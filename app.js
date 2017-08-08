/**
 * Created by ubuntu on 4/8/17.
 */
var app=angular.module('myapp',[]);
app.controller("mycontroller",['$scope','$http',function ($scope,$http,$q,$timeout) {
    $scope.searchText="";
    $scope.change = function() {
        $scope.result=[];
        var value=$scope.searchText.toString();
        console.log(value.length);
        var upi=false;
        for(var i=0;i<value.length;i++)
        {
            if((value.charAt([i]))==='@')
            {
                upi=true;
            }
        }
        if(upi)
        {
            $scope.result.push("upi");
        }
        else
        {
            var ismobile=false,isbank=false;
           if(value.length!==10)
           {
               $scope.result.push("Bank Account Number");
           }
           else
           {
               $http.get("http://apilayer.net/api/validate?access_key=c48ba011363cd81c74ce3f60b121444a&number="+value+"&country_code=IN&format=1")
                   .success(function (response) {
                       var valid=response.valid;
                       if(valid===true)
                           $scope.result.push("Mobile Number");
                       else
                           $scope.result.push("Bank Account Number")

                   })

           }


        }
    };
}]);
