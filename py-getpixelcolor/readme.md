# getpixelcolor.py

*by Raziur Rahman, 2017*

This is a little python script that extracts pixel color values and puts it into a sqlite3 db file for playing with that data, may be to get an idea of the color palette or most used color or something like that, may be using SQLite firefox extension.

## Usages

Run this command to extract color values of image.png and put it into image.db

```bash
$python getpixelcolor.py image.png
```

## Play

Open the db file, may be using the SQLite firefox extension and run the following SQL to see the most occurring colors: 

```sql
select r,g,b, count(*) from pixel group by r order by count(*) desc limit 20;
```