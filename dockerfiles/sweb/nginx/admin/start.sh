#!/bin/bash
config_nginx () {
    service nginx restart
    service nginx stop
}

load_entrpoint_base () {

    bash /root/admin/base/start.sh
}

main() {
    load_entrpoint_base
    config_nginx

#tail -f /dev/null

}
main