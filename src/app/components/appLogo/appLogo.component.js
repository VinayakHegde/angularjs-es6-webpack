import angular from 'angular';
import logo from '../../../img/logo.png';

class AppLogoController{
    constructor(){
        this.logo = logo;
    }
} 

const appLogo = {
    bindings : {},
    controllerAs: '$ctrl',
    template : require('./appLogo.component.html'),   
    controller: AppLogoController
}

angular.module('app').component('appLogo', appLogo);