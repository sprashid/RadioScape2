'use strict';

/* Controllers */

angular.module('hitachiApp.controllers', [])
  .controller('HomeCtrl', ['$scope','$location','$rootScope','$window', function($scope,$location,$rootScope,$window) {
	  
	  
	  
	$scope.enterApp = function () {
			$location.path( '/start' );			
	}
		
	
	$scope.tc={isCollapsedOne : false};
	$scope.tc={isCollapsedTwo : false};
	$scope.tc={isCollapsedThree : false};
	$scope.tc={isCollapsedFour : false};
		
	$scope.collapseMenuOne=function(){  
			$scope.tc.isCollapsedFour= false;    
			$scope.tc.isCollapsedThree= false;   
			$scope.tc.isCollapsedTwo= false;
        }	
	
	$scope.collapseMenuTwo=function(){  
			$scope.tc.isCollapsedFour= false;    
			$scope.tc.isCollapsedThree= false; 
            $scope.tc.isCollapsedOne= false;			
        }
			
	$scope.collapseMenuThree=function(){  
			$scope.tc.isCollapsedFour= false; 
			$scope.tc.isCollapsedTwo= false;        
            $scope.tc.isCollapsedOne= false;			
        }
	$scope.collapseMenuFour=function(){  			   
			$scope.tc.isCollapsedThree= false;   
			$scope.tc.isCollapsedTwo= false;        
            $scope.tc.isCollapsedOne= false;			
        }
	
	
	
	var pageheight = angular.element(window).height();
	var pagewidth = angular.element(window).width() - 250;
	
	$rootScope.$on('$includeContentLoaded', function() {
    		resizeDiv();	
		});


	function resizeDiv() {	
				
		angular.element('.navigationRight').css({'height': pageheight});  
		angular.element('.startDiv').css({'width': pagewidth});
		angular.element('.welcomePage').css({'width': pagewidth});
		angular.element('.enterButton').addClass('animated');
		
		}
		
	var w = angular.element($window);  
  		w.bind('resize', resizeDiv); 

  }]);
  
