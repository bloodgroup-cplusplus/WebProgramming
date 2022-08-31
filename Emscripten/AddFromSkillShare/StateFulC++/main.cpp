#include "fib.h"
#include <iostream>

int main()
{
    Fib fib{};
    std::cout << fib.next() << std::endl;
    std::cout << fib.next() << std::endl;
    std::cout << fib.next() << std::endl;
    std::cout << fib.next() << std::endl;
    std::cout << fib.next() << std::endl;
    return 0;
}

