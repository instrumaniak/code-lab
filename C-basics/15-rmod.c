/* How the for a % 7 the output remains 
 * in the range of 0-6
 */

#include <stdio.h>

int main()
{
	int a,b;
	a = 7; 
	while (a < 30)
	{
		b = a % 7 ; 
		printf("%d %% 7 - %d", a,b);
		if (b==0)
			printf(" <-----");
		
		printf("\n");
		a++;
	}
	
	return 0;
}
