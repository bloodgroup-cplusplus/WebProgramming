#include<iostream>
#include<ApplicationServices/ApplicationServices.h>
void mouse_mover(long x,long y)
{
    CGPoint mypoint = CGPointMake(33,234);
    typedef uint32_t CGDirectDisplayID;
    CGDirectDisplayID display_id = CGMainDisplayID();
    CGDisplayMoveCursorToPoint(display_id,mypoint);
}

int main()
{
    long x,y;
    mouse_mover(x,y);
}