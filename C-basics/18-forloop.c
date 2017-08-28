#include <stdio.h>

int main()
{
	int i;
	
	//output: 1-20
	for(i=1;i<=20;i++)
		printf("%d ",i);
	
	printf("\n");
	
	//output: 2-20, even
	for(i=2;i<=20;i = i + 2)
		printf("%d ",i);
	
	printf("\n");
	
	//output: 10-1
	for(i=10;i>0;i--)
		printf("%d ",i);
	
	printf("\n");
	
	return 0;
	
}
