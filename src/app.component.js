import template from './app.component.html';
import './app.component.less';

const component = function() {

    const controller = [function(){

        const ctrl = this;
        ctrl.welcome = "Hello Robi!";

    }];

    return {
        controller: controller,
        template: template
    }

}

angular.module('app').component('appRoot',component());