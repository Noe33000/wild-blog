import moment from "moment"

let navbar = {
    templateUrl: 'js/components/common/navbar.html',
    controller: ['UsersService', '$state', '$interval', function (UsersService, $state, $interval) {
        'use strict'

        this.clock = moment()
        angular.extend(this, {
            $onInit() {
                UsersService.getCurrent().then((user) => {
                    this.user = user
                }).catch((err) => {

                })
            },
            disconnect() {
                UsersService.disconnect().then(() => {
                    Materialize.toast('Disconnected', 4000, 'toast-warning')
                    this.user = null
                    $state.reload()
                })
            }

        })
        let dateUpdate = () => {
            this.clock = moment().format()
        }

        $interval(dateUpdate, 300);
    }]
}

export default navbar
