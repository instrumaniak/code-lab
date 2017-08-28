#include <stdio.h>

int main(){
	char text[100];
	printf("Enter some text: ");
	
	fgets(text, 100, stdin);
	
	printf("You have entered: %s\n", text);
	return 0;
}
