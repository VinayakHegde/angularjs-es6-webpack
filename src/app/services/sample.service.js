import angular from 'angular';

class SimpleService{
    getMessage(){
        return 'Hello AngularJS + ES6';
    }
}

angular.module('app').service('simpleService', SimpleService);