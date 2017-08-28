// 100 10x10 random numbers

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
	int row, column, r;
	srand((unsigned) time(NULL));
	
	for(row=0; row<10; row++)
	{
		for(column=0; column<10; column++)
		{
			r = rand();
			printf("%2d\t", r % 100);
		}
		putchar('\n');
	}
	
	return 0;
}
