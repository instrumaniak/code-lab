#include <stdio.h>
#include <math.h>

int main(){
	float in;
	printf("Enter a number: ");
	scanf("%f", &in);
	printf("Square root of %.2f is %.2f\n", in, sqrt(in));
	printf("Using pow: %.2f \n", pow(in, 0.5));
	return 0;
}
