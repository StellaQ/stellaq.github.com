var shopAppModule=angular.module('shopApp',[]);

shopAppModule.factory('shopData',function(){
	return [
		{
			'id':1,
			'picSrc':'img/1.png',
			'des':'米其林 高精度数显胎压计 汽车胎压监测胎压表 轮胎气压表测压器',
			'price':85.00,
			'quantity':1
		},
		{
			'id':2,
			'picSrc':'img/2.png',
			'des':'米其林车载充气泵12V便携式车用轮胎打气筒 智能数显汽车用打气泵',
			'price':188.00,
			'quantity':1
		},
		{
			'id':3,
			'picSrc':'img/3.png',
			'des':'奇虎360行车记录仪高清夜视新款智能1296P汽车载广角迷你无线wifi',
			'price':458.00,
			'quantity':1
		},
		{
			'id':4,
			'picSrc':'img/4.png',
			'des':'车用工具安全锤逃生锤破窗器汽车安全锤车载多功能随身迷你救生锤',
			'price':20.00,
			'quantity':1
		},
		{
			'id':5,
			'picSrc':'img/5.png',
			'des':'洗车毛巾 车用超细纤维不掉毛磨绒加厚吸水擦车巾布汽车清洁用品',
			'price':8.00,
			'quantity':1
		},
		{
			'id':6,
			'picSrc':'img/6.png',
			'des':'品固汽车日夜两用防眩镜 高清司机护目镜 汽车偏光遮阳板防远光灯',
			'price':50.00,
			'quantity':1
		},
		{
			'id':7,
			'picSrc':'img/7.png',
			'des':'亚麻汽车坐垫四季通用座垫凯越宝来速腾捷达专用座套全包夏季新款',
			'price':288.00,
			'quantity':1
		},
		{
			'id':8,
			'picSrc':'img/8.png',
			'des':'最新款自动升级电子测速狗智能车载云狗安全预警仪雷达流动一体机',
			'price':88.00,
			'quantity':1
		},
		{
			'id':9,
			'picSrc':'img/9.png',
			'des':'车载手机支架iphone6 plus三星小米汽车空调出风口手机支架 通用',
			'price':6.00,
			'quantity':1
		}
	];
});

shopAppModule.controller('shopCtr',['$scope','shopData',function($scope,shopData){
	
	$scope.data=shopData;

	var findIndex=function(id){
		var num=-1;
		angular.forEach($scope.data,function(item,index){
			if(item.id === id){
				num=index;
				return;
			}
		});
		return num;
	};
	$scope.add=function(id){
		var index=findIndex(id);
		
		if(index !== -1){
			$scope.data[index].quantity ++;
		}
	}
	$scope.reduce=function(id){
		var index=findIndex(id);

		if (index !== -1) {
			if($scope.data[index].quantity>1){
				$scope.data[index].quantity --;
			}else{
				$scope.data[index].quantity =1;
			}
		};
	}
	$scope.remove=function(id){
		var index=findIndex(id);

		if (index !== -1) {
			$scope.data.splice(index,1);
		};
	}

	$scope.totalPrice=function(){
		var numPrice=0;
		angular.forEach($scope.data,function(item,index){
			numPrice += item.price*item.quantity;
		});
		return numPrice;
	}
	$scope.amount=function(){
		var numAmount=0;
		angular.forEach($scope.data,function(item,index){
			numAmount += item.quantity;
		});
		return numAmount;
	}

}]);