(function() {

    let app = angular.module('booklist', [])

    app.controller('Booklist', ['$scope', '$state', '$http', function($scope, $state, $http){
        let store = this;

        store.books = []

        $http.get("./books.json").then(function(data){
            console.info(data)
            store.books = data.data.book
        
    })
    
    store.go = function(_id){
        console.log(_id)
        $state.go('app.bookdetail', {
            _id: _id
        })
    }

    }]) 
    
})();