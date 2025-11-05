#!/bin/bash



newuser() {
        useradd -rm -d / home/david - s/bin/bash david
    
    echo "david:1234" | chpasswd
    echo "BIENVENIDO DAVID..." >> /home/david/BIENVENIDA_DAVID.txt
}

main() {
    newuser
#Encargada de mantener el contenedor en ejecución
tail -f /dev/null
}
main
   
