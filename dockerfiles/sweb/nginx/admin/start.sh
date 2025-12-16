#!/bin/bash
config_nginx () {
    service nginx restart
    service nginx stop
}

load_entrpoint_base () {

    bash /root/admin/base/start.sh
}

ajustar_nginx(){
    server {
    listen 80;

    location / {

        proxy_pass http://194.163.147.140:80; 

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }


main() {
    load_entrpoint_base
    ajustar_nginx
    config_nginx

#tail -f /dev/null

}
main