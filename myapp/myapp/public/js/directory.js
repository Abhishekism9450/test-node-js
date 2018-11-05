console.log('test.js loaded');


angular.module('directoryApp',[])
	.controller('directoryController',function($scope){


			var dirList=this;

			dirList.toggle=false;

			dirList.list=[{name:'Ratan Tata',age:'29',img:'images/tata.jpg'},
			{name:'Sundar Pichai',age:'28',img:'images/sundar.jpg'},
			{name:'Elon Musk',age:'35',img:'images/musk.jpg'},
			{name:'Nikola Tesla',age:'42',img:'images/tesla.jpg'},
			{name:'Steve Jobs',age:'42',img:'images/steve.jpg'}
			];

			dirList.addPerson=function(){
				dirList.list.push({name:dirList.name,age:dirList.age })
				dirList.name=' ';
				dirList.age=0;
			};

			$scope.counter = 0;
    		$scope.count = function(inc) {
        	$scope.counter += inc;
    		};
	});

	