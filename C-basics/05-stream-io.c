#include<stdio.h>

// Buffered input

int main()
{
	unsigned int a,b,c;
	
	printf("Enter three letters: ");
	a = getchar();
	
	printf("You have entered: ");
	putchar(a);
	
	b = getchar();
	putchar(b);
	
	c = getchar();
	putchar(c);
	
	return 0;	
}
