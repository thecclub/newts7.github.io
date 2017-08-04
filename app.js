/**
 * Created by ubuntu on 4/8/17.
 */
var app=angular.module('myapp',[]);
app.controller("mycontroller",['$scope', function ($scope) {
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
        if(upi) {
            $scope.result.push("upi");
        }
        else
        {
            var ismobile=false,isbank=false;
            if(value.length<=10)
            {
                if(value.charAt(0)==='9'||value.charAt(0)==='8'||value.charAt(0)==='7'||value.charAt(0)=='6')
                    ismobile=true;
                else
                    ismobile=false;
                isbank=true;
            }
            else
            {
                isbank=true;
                ismobile=false;
            }

            if(isbank)
                $scope.result.push("Bank account number");
            if(ismobile)
                $scope.result.push(("Mobile Number"));
        }
    };
}]);
