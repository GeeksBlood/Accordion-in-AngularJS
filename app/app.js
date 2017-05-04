var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('MyCtrl', function ($scope) {
    $scope.groups = [
      {
          title: "First Header - 1",
          contents: [{ content: "First Group Body - 1" }, { content: "First Group Body - 2" }, { content: "First Group Body - 3" }]
      },
      {
          title: "Second Group Header - 2",
          contents: [{ content: "Second Group Body - 1" }, { content: "Second Group Body - 2" }, { content: "Second Group Body - 3" }]
      },
      {
          title: "Third Group Header - 3",
          contents: [{ content: "Third Group Body - 1" }, { content: "Third Group Body - 2" }, { content: "Third Group Body - 3" }]
      }
    ];
})
