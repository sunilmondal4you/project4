/**
 * Created by abc on 20/05/2016.
 */
var app=angular.module("myapp",['checklist-model','ngMessages']);

app.controller("myctrl", function ($scope) {

    $scope.userbook=[];

    $scope.id=1;
    $scope.user={'id':$scope.id};

    $scope.education=['B.Tech', 'B.Com', 'B.Sc', 'BA'];
    $scope.knldg=["a","b","c"];


    $scope.savme=function(){
        $scope.userbook.push($scope.user);
        $scope.id = $scope.id +1 ;
        $('#mymodal').modal('hide');

        $scope.user={'id':$scope.id};
    };

    $scope.predicate = 'email';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    
    $scope.nwpush=function () {
        $('#mymodal').modal('show');
         $scope.user={'id':$scope.id};
    };

    $scope.updatme=function($index){
        $scope.editg=false;
        $scope.user={'id':$scope.id};
        $('#mymodal').modal('hide');
    };

    $scope.edtme=function ($index) {
        $scope.editg=true;
        $scope.user=$scope.userbook[$index];
        $('#mymodal').modal('show')
    };

    $scope.deleteme=function ($index) {
        $scope.userbook.splice($index,1);
    };






});