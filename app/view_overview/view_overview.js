/**
 * Created by henry on 20/10/2015.
 */

'use strict';

angular.module('myApp.view_overview', ['ngRoute', 'firebase'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/overview', {
            templateUrl: 'view_overview/view_overview.html',
            controller: 'controlOverview'
        });
    }])

    .controller('controlOverview', [function() {
        var ref = new Firebase('http://sws.firebaseio.com');

        var gardens = $firebaseObject(ref);


    }]);