(function() {

    let app = angular.module('book', [])

    app.controller('Book',  ['$scope', '$state', '$stateParams', '$http', function($scope, $state, $stateParams, $http){
        let product = this

        product._id = $stateParams._id
        product.detail = {}

        product.current = 0

        product.setCurrent = function(i){
            product.current = i || 0
        }

        product.isSet = function(i){
            return i === product.current
        }

        $http.get("./books.json").then(function(data){
            product.booklist = data.data.book

            product.detail = product.booklist.find(p => p._id === product._id)
            

            
        })

    }])
})();