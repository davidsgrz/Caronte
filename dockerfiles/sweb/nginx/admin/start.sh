#!/bin/bash
config_nginx () {
    nginx &
}

load_entrpoint_base () {

    bash /root/admin/base/start.sh
}

main() {
    load_entrpoint_base
    config_nginx

tail -f /dev/null

}
main