import angular from 'angular';

class AppHostController {
    static get $inject() {
        return ['simpleService'];
    }

    constructor(SimpleService) {
        this.title = SimpleService.getMessage();
        this.url = 'https://github.com/vinayakhegde';
    }
}

let appHost = () => {
    return {
        template: require('./appHost.directive.html'),
        controller: AppHostController,
        controllerAs: '$ctrl'
    }
};


angular.module('app').directive('appHost', appHost);
