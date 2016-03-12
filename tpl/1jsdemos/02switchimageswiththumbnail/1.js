window.onload=function () {
	var oPrev=document.getElementById('prev');
	var oNext=document.getElementById('next');

	var oPic=document.getElementById('pic');
	var oList=document.getElementById('list');
	var arrLi=oList.getElementsByTagName('li');
	var arrDiv=oList.getElementsByTagName('div');

	var arrSrc=['img/pic0.png','img/pic1.png','img/pic2.png','img/pic3.png','img/pic4.png'];
	var num=0;

	oPrev.onclick=function(){
		num--;
		if(num==-1){num=arrSrc.length-1;}
		oPic.src=arrSrc[num];

		for (var i = 0; i < arrLi.length; i++) {
			arrLi[i].className='';
		};
		arrLi[num].className='active';
	};
	oNext.onclick=function(){
		num++;
		if(num==arrSrc.length){num=0;}
		oPic.src=arrSrc[num];

		for (var i = 0; i < arrLi.length; i++) {
			arrLi[i].className='';
		};
		arrLi[num].className='active';
	};

	for (var i = 0; i < arrLi.length; i++) {
		arrLi[i].index=i;

		arrLi[i].onmouseover=function(){
			for (var x = 0; x < arrDiv.length; x++) {
				arrDiv[x].style.display='none';
			};
			arrDiv[this.index].style.display='block';
		};

		arrLi[i].onclick=function(){
			for (var y = 0; y < arrLi.length; y++) {
				arrLi[y].className='';
			};
			this.className='active';
			
			num=this.index;
			oPic.src=arrSrc[num];
		};

		arrLi[i].onmouseout=function(){
			arrDiv[this.index].style.display='none';
		};

	};
};