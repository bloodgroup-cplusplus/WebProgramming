#include<stdio.h>
#include<stdlib.h>

// we include types and socket for definition of socket functions that we are going to be using 
// for our sockets 


#include<sys/types.h>
#include<sys/socket.h>

// to include address information we need in . net 

#include<netinet/in.h>

// then we have the main function 

int main()
{
    // in this example we will start writing our tcp client 
    // hold the socket descriptor 
    int network_socket ;

    // call the socket function and store the result of it in the integer 
    network_socket=socket(AF_INET,SOCK_STREAM,0); // we will use 0 for tcp , if we use raw sockets we use other integer 

    // this is actually all we need to do to create a socket 
    // we need to write one of the server 
    // to send and receive data from 
    // we need to now connect it to anotehr socket 
    // before we can get to connect 
    // we should specify address to connect to 
    // specify an address for the socket 
    struct sockaddr_in server_address;
    // af_inet 
    server_address.sin_family = AF_INET;
    server_address.sin_port = htons(9002);
    // htons specifies the port to connect remotely 
    // specify the ip address . 
    // bind to any address on the local computer 
    // shortcut really already there for us 
    server_address.sin_addr.s_addr = INADDR_ANY;
    int connection_status= connect(network_socket,(struct sockaddr *) &server_address, sizeof(server_address));
    // check for error with the connection 
    if(connection_status ==-1)
    {
        printf("There was an error making a connection to the remote server");
    }
    // receive data from the server
    char server_response[299] ;
    recv(network_socket,&server_response,sizeof(server_response),0);


    return 0;
}