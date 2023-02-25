// on the server end of the socket we needd to also crate a socket with a socket call, 
// but then we need to bind that socket to an ip and port where it can then listen 
// for connecitons, adnt hen finally accept a connection and then send or recv data to 
// the other sockets it has connected to 


// we specify the same ip and port 
// we call the listen function 
// we call the accept functions which allows us to call functions on that socket 
// like reading and writing data 
// like send and recieve functions 
// we create the socket on the same way 
// we see if any server try to connect on the server socket 
// to get and read data from the socket 

#include<stdio.h>
#include<unistd.h>
#include<stdlib.h>
#include<sys/socket.h>
#include<netinet/in.h>


int main()
{
    // hold string to hold all clients 
    char server_message[256] = "You have reached the server";

    // create the server socket
    int server_socket; 

    // we make the socket calls 
    server_socket = socket(AF_INET,SOCK_STREAM,0); 

    // define the address structure 
    struct sockaddr_in server_address; 
    // once again pretty much the same parameters 
    // actual address is going to stay as the same address 
    // we use the same port 
    server_address.sin_family=AF_INET;
    server_address.sin_port = htons(9002);
    server_address.sin_addr.s_addr = INADDR_ANY;
    // bind the socket to our specified IP and port 
    bind(server_socket, (struct sockaddr*) &server_address, sizeof(server_address));

    // listen function 
    listen(server_socket,5);

    // 
    int client_socket ;
    // call the accept funciton 

    client_socket=accept(server_socket,NULL,NULL);

    send(client_socket,server_message,sizeof(server_message),0);





    return 0;

}

