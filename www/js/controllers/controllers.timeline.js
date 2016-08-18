angular.module('starter.controller.timeline', ['starter.service', 'relativeDate'])

.controller('TimelineCtrl', function(FileService, $cordovaToast, $ionicHistory, $scope, $state, $ionicModal, localStorage, $timeout, $cordovaContacts, $ionicLoading, timelineService ) {
  
      $scope.doRefresh = function() {       
        $scope.$broadcast('scroll.refreshComplete');
        $cordovaToast.showShortBottom('Atualizado');
        var user =  localStorage.getObject("user");
         var phone = user.data.phone.value;
         $scope.phone = phone;
         timelineService.getAllTransactions(phone).then(function(response){
                  FileService.removeAndCreateAndWrite("timeline.json", response).then(function(resp){
                  console.log("excluiu, criou, populou");
                  console.log(resp);                           
            }); 
         })  
      };

      

      $scope.onInit = function(){
            var user =  localStorage.getObject("user");
            var phone = user.data.phone.value;
            $scope.phone = phone;
            FileService.readAsText("timeline.json").then(function(response){  
                  console.log("entrou aqui");         
                  response = JSON.parse(response);
                  $scope.transactions = response;
                                                     
            });
      } 
})