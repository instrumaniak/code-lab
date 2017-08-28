#include <stdio.h>

int main()
{
	char c;
	printf("Enter a number (1,2,3): ");
	scanf("%c", &c);
	
	switch(c)
	{
		case '1':
			printf("Excellent choice\n");
			break;
		case '2':
			printf("Good choice\n");
			break;
		case '3':
			printf("Ok choice\n");
			break;
		default:
			printf("Invalide choice!\n");
	}
	
	return 0;
}
