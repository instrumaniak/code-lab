// Random numbers

#include <stdio.h>
#include <stdlib.h>

int main()
{
	//srand(61232); // seed for rand function, +ve integer
	srand((unsigned) time(NULL)); // seed using current time
	printf("Here is a random number: %d", rand() );
	return 0;
}
