#include <stdio.h>

int main(){
	int i;
	float f;
	char c;
	char s[100];
	
	printf("Enter int, float, char and string- seperated by space \n:");
	scanf("%d %f %c %s", &i, &f, &c, s);
	printf("You entered: %d, %f, %c, %s\n", i, f, c, s );
	
	return 0;
}
