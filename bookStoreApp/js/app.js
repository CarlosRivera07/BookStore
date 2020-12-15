(function(){
    let app = angular.module('bookStoreApp', ['ui.router', 'ui.router.state.events', 'booklist', 'book', 'app', 'navbar'])

    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
        
        $stateProvider
        .state('booklist', {
            url: '/booklist',
            templateUrl: 'partials/booklist.html', 
            controller: 'Booklist'
        })
        
        .state('app',{
            url: '/app',
            abstract: true,
            templateUrl: 'partials/panel.html',
            controller: 'App'
        })

        .state('app.bookdetail', {
            url: './booklist/:_id',
            views: {
                'content':{
                    templateUrl: 'partials/book-detail.html',
                    controller: 'Book'
                }
            }
        })

        $urlRouterProvider.otherwise('/booklist')
        $locationProvider.html5Mode(false)
    }])

})()