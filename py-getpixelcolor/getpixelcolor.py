# Raziur Rahman, 2017
# -------------------
# getpixelcolor.py takes pixel colors and puts into a sqlite db

# To Run execute: $python getpixelcolor.py image.png

# SQL to play with it:
# "select r,g,b, count(*) from pixel group by r order by count(*) desc limit 20;"

import sys, os, sqlite3
from PIL import Image

# Image file name
fn = sys.argv[1]

# Open Image
print "Openning Image..."
im = Image.open(fn)

# Open a file of same supplied name but with different extention
print "Creating Database..."
conn = sqlite3.connect(os.path.splitext(fn)[0] + '.db')
c = conn.cursor()
c.execute("create table pixel (r integer, g integer, b integer)")

idata = list(im.getdata())

print "Inserting data into db..."
count = 0
for i in idata:
	s = "insert into pixel values ({0},{1},{2})".format(i[0],i[1],i[2])
	c.execute(s)
	count += 1
	
conn.commit()
conn.close()

print "Inserted %d rows of data. OK." % count	