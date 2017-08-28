#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
	int x, r;
	srand((unsigned) time(NULL));
	
	x = 10;
	while(x > 0)
	{
		r = rand();
		printf("%2d\n", r % 100); // keep random number betn 0-99
		x--;
	}
	return 0;
}
