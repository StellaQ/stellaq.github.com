window.onload=function() {
	var oUl=document.getElementById('list');
	var arrLi=oUl.getElementsByTagName('li');
	var arrInput=oUl.getElementsByTagName('input');

	var oCtrl=document.getElementById('ctrl');
	var oBtn=document.getElementById('btn');
	var arrImg=oCtrl.getElementsByTagName('img');

	var arrSong=[
					{
						"name":"私奔",
						"author":"梁博"
					},
					{
						"name":"北京北京",
						"author":"梁博，黄勇",
					},
					{
						"name":"我爱你中国",
						"author":"梁博"
					},
					{
						"name":"花火",
						"author":"梁博"
					},
					{
						"name":"回来",
						"author":"梁博"
					},
					{
						"name":"爱要有你才完美",
						"author":"梁博，那英"
					}
				];
	var arrSrcOne=['img/bg1.png','img/bg2.png','img/bg3.png'];	
	var arrSrcTwo=['img/bg4.png','img/bg5.png','img/bg6.png'];

	var str='';
	for (var i = 0; i < arrSong.length; i++) {
		str += '<li>'+'<div class="boxOne"><input type="checkbox"/></div>'+'<div class="boxTwo"><p>'+arrSong[i].name+'</p></div>'+'<div class="boxThree"><p>'+arrSong[i].author+'</p></div>'+'</li>';
	};
	oUl.innerHTML=str;

	var fnCheck=function(){
		for (var i = 0; i < arrLi.length; i++) {
				
			if(arrInput[i].checked==true){
				arrLi[i].className='active2';
			}else if(i%2==0){
				arrLi[i].className='active1';
			}else{
				arrLi[i].className='';
			};

		};
	};

	for (var i = 0; i < arrLi.length; i++) {

		if(i%2==0){
			arrLi[i].className='active1';
		};

		arrLi[i].onmouseover=function(){
			this.className='active2';
		};

		arrLi[i].onmouseout= fnCheck;
	};
	
	for (var i = 0; i < arrInput.length; i++) {
		
		arrInput[i].onclick=function(){

			if (this.checked==true) {
				for (var i = 0; i < arrImg.length; i++) {
					arrImg[i].src=arrSrcTwo[i];
				};
			};

			var arrTest=[];
			for (var i = 0; i < arrInput.length; i++) {
				if(arrInput[i].checked==false){arrTest.push(0);}	
			};
			if(arrTest.length==arrInput.length){
				for (var i = 0; i < arrImg.length; i++) {
					arrImg[i].src=arrSrcOne[i];
				};
			};

			for (var i = 0; i < arrInput.length; i++) {
				if(arrInput[i].checked==false){
					oBtn.checked = false;
					break;
				}else{
					oBtn.checked = true;
				};
			};

		};
	};

	oBtn.checked=false;
	oBtn.onclick=function(){
		if (oBtn.checked==true) {
			for (var i = 0; i < arrInput.length; i++) {
				arrInput[i].checked=true;
			};
			for (var i = 0; i < arrImg.length; i++) {
				arrImg[i].src=arrSrcTwo[i];
			};
		}else{
			for (var i = 0; i < arrInput.length; i++) {
				arrInput[i].checked=false;
			};
			for (var i = 0; i < arrImg.length; i++) {
				arrImg[i].src=arrSrcOne[i];
			};
		};
		fnCheck();
	};
};