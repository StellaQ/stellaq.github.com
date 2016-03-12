window.onload = function() {
	var oMenu = document.getElementById('menuPart');
	var arrLi1 = oMenu.getElementsByTagName('li');

	var oDetail = document.getElementById('detailPart');
	var arrLi2 = oDetail.getElementsByTagName('li');

	var oImg = document.getElementById('img');

	var arrLi =[['1-1','1-2','1-3'],
		    	['2-1','2-2','2-3','2-4'],
		    	['3-1','3-2','3-3','3-4','3-5'],
		    	['4-1','4-2','4-3','4-4']
		    	];
	var arrSrc=[
		    	["img/1.1.png","img/1.2.png","img/1.3.png"],
		    	["img/2.1.png","img/2.2.png","img/2.3.png","img/2.4.png"],
		    	["img/3.1.png","img/3.2.png","img/3.3.png","img/3.4.png","img/3.5.png"],
		    	["img/4.1.png","img/4.2.png","img/4.3.png","img/4.4.png"]];
	var arrCtrl=[0,0,0,0];

	var fnChange=function(a){	

		for(i=0;i<arrLi1.length;i++){arrLi1[i].className='';};
		arrLi1[a].className='active';

		var wid=(720/(arrLi[a].length)-2)+'px';
		var str=''; 
		for (var i = 0; i < arrLi[a].length; i++) {
			str +='<li>'+arrLi[a][i]+'</li>';
			oDetail.innerHTML=str;
		};
		for (var i = 0; i < arrLi2.length; i++) {
			arrLi2[i].style.width=wid;
		};
	};
	var fnClick=function(a,b){
		oImg.src=arrSrc[a][b];
		for(i=0;i<arrLi2.length;i++){arrLi2[i].className='';};
		arrLi2[b].className='active2';
	};
	var a=0;
	var b=0;
	fnChange(a);
	fnClick(a,b);

	for (var i = 0; i < arrLi2.length; i++) {

		arrLi2[i].index = i;

		arrLi2[i].onclick=function(){
			b=this.index;
			fnClick(a,b);

			arrCtrl[a]=b;
		};
	};

	for(var i = 0; i < arrLi1.length; i++){

		arrLi1[i].index = i;

		arrLi1[i].onclick = function(){
			
			a=this.index;
			b=arrCtrl[a];
			fnChange(a);
			fnClick(a,b);
			
			for (var i = 0; i < arrLi2.length; i++) {

				arrLi2[i].index = i;

				arrLi2[i].onclick=function(){
					b=this.index;
					fnClick(a,b);

					arrCtrl[a]=b;
				};
			};
		};
	};
};