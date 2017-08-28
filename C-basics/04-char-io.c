#include<stdio.h>

int main(){
	int c;
	printf("Enter a character: ");
	c = getchar();
	//printf("\nYou entered: %c\n",c);
	printf("\nYou have entered: ");
	putchar(c);
	return(0);
}
