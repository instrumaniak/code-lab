// Basic if-else
// check a number against 10

#include <stdio.h>

int main()
{
	int a;
	printf("Enter an integer: ");
	scanf("%d", &a);
	
	printf("You have entered: %d\n", a);
	
	if(a>10)
		printf("%d is greater than 10");
	else if (a == 10)
		printf("Your number is equal to 10");
	else
		printf("%d is less than 10");
		
	return 0;
}
