// by dribehance <dribehance.kksdapp.com>
angular.module("<%= appModule %>", [
    "ngRoute",
    "mobile-angular-ui",
    "mobile-angular-ui.core",
    "LocalStorageModule",
    "timer"
])
.config(function($routeProvider,$httpProvider,localStorageServiceProvider) {
    $routeProvider
        .when("/index", {
            templateUrl: "home.html",
            reloadOnSearch: false,
            controller: indexController
        })
        .otherwise({
            redirectTo: "/index"
        });
        // $httpProvider.defaults.useXDomain = true;
        // $httpProvider.defaults.withCredentials = true;
        // delete $httpProvider.defaults.headers.common["X-Requested-With"];
        localStorageServiceProvider.setStorageCookie(1/50);
        $httpProvider.interceptors.push('tokenInterceptor');

}).run(function(appServices) {
    // init event such as routechangestart...
    appServices.init();
});
