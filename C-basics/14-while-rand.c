#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
	int r,i = 1;
	srand((unsigned) time(NULL)); /* seed rand */
	while(i<11)
	{
		r = rand();
		printf("%d\n",r);
		i++;
	}
	return 0;
}
