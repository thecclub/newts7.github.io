var app = angular.module('myapp', []);

app.controller("mycontroller",['$scope','$http',
function ($scope,$http,$q,$timeout) {
console.log("hello world!");
$scope.array=[1,2,3,4];
$http.get('https://contesttrackerapi.herokuapp.com/android/')
    .success(function (response) {
console.log(response);
var ongoingContest=response.result.ongoing;
var upcomingContest=response.result.upcoming;

var ongoingContests=[];
for(var i=0;i<ongoingContest.length;i++)
  {
    var EndTime=ongoingContest[i].EndTime;
    var Name=ongoingContest[i].Name;
    var platform=ongoingContest[i].Platform;
    var url=ongoingContest[i].url;
    ongoingContests.push({
    "Name" : Name,
    "Platform": platform,
    "EndTime" : EndTime,
      "url" : url
    });
  }
console.log(ongoingContests.length);
$scope.ongoingcontest=ongoingContests;
var upcomingContests=[];
for(var i=0;i<upcomingContest.length;i++)
  {
      var StartTime=upcomingContest[i].StartTime;
      var EndTime=upcomingContest[i].EndTime;
      var Name=upcomingContest[i].Name;
      var platform=upcomingContest[i].Platform;
      var url=upcomingContest[i].url;
      var Duration=upcomingContest[i].Duration;
      upcomingContests.push({
          "Name" : Name,
          "Platform": platform,
          "StartTime" : StartTime,
          "EndTime" : EndTime,
          "url" : url,
          "Duration" : Duration
      });
  }
  console.log(upcomingContests.length);
  $scope.upcomingcontest=upcomingContests;


    });

}]);
