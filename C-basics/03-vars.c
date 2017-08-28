#include<stdio.h>
int main()
{
	int age = 32;
	char x,y,z;
	float pi = 3.141596;
	
	x = 'A';
	y = x + 1;
	z = y + 1;
	
	printf("Integer: %d. \nCharacters: %c%c%c\n",age,x,y,z);
	printf("Float: %.4f\n",pi);
	return 0;
}
