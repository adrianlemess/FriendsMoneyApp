angular.module('starter.service', [])

.factory('ContactsService', function($http){
    return {
        setContact: function(contacts){

        var data = {
            contacts : contacts
        }
         var url = "http://10.96.127.155:3000/api/contacts";
        return $http.post(url, data).then(function(response){
            var responses = response.data;
            return responses;
        })
        },

        registerTransactionWithNoFlag: function(transaction){
 
            var data = {
                transaction : transaction
            }
            var url = "http://10.96.127.155:3000/api/userFromTransaction";
            return $http.post(url, data).then(function(response){
                return response;
            })
        },

        registerTransactionWithFlag:function(transaction){
            var data = transaction;
            var url = "http://10.96.127.155:3000/api/transaction";
           
            return $http.post(url, data).then(function(response){
                var response = response.data;
                return response;
            })
            }
    }
})

.factory('PendeciesService', function($http){
    return {
        getListContacts: function(phone){
            return $http.get('http://10.96.127.155:3000/api/pendingTransactions/'+phone).then(function(response){
                return response.data;
            })
        },
        changeStatusPendencie: function(transaction){

            var url = "http://10.96.127.155:3000/api/transaction";
            var req = {
                method: 'PUT',
                url: url,				   
                data: transaction
            }

            return $http(req).then(function(response){
                var responses = response.data;
                return responses;
            })
        }
    }
})

.factory('registerService', function($http){
    return {
        setUser: function(user, device){
        var data = {
            user:{
                name: user.name,
                phone:{value: "+55"+user.phone.value},
                deviceId: device
            } 
        }
        
         var url = "http://10.96.127.155:3000/api/user";
        return $http.post(url, data).then(function(response){
            return response;
        })
        }
    }
})

.factory('timelineService', function($http){
    return {

        getAllTransactions:function(phone){            
            var url = "http://10.96.127.155:3000/api/transactions/" + phone ;
            return $http.get(url).then(function(response){
                return response.data;       
            })
        }
    }
})




