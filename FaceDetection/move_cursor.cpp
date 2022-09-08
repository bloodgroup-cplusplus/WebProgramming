#if defined(WIN32) 

    # ifdef _WIN64

        // define something for windows (64 bits only)
        #include<iostream>
        #include<windows.h>

    # else
        // define something for windows(32-bits only)


#elif __APPLE__
    #include<TargetConditionals.h>
    # if TARGET_OS_MAC


#elif __linux__


#elif __unix__

void set_cursor( int x, int y)
{
    HANDLE handle;
    COORD coordinates;
    handle = GetStdHandle(STD_OUTPUT_HANDLE);
    coordinates.X =x;
    coordinates.Y =y;
    SetConsoleCursorPosition(handle,coordinates);

}

int main()
{
    set_cursor(x,y);

}





    