#include<stdio.h>

int main()
{
	int vi;
	float vf;
	char vc;
	char vs[20];
	
	printf("Enter an integer: ");
	scanf("%d", &vi);
	
	printf("Float: ");
	scanf("%f", &vf);
	
	printf("Character: ");
	scanf("%c", &vc); // Error! why? does not takes input..
	
	printf("String: ");
	scanf("%s", vs); // array 
	
	printf("\n---------------");
	printf("\nInt: %d", vi);
	printf("\nFloat: %f", vf);
	printf("\nCharacter: %c", vc);
	printf("\nString: %s", vs);
	
	return 0;
}
