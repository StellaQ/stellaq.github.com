window.onload=function() {
	var oUl=document.getElementById('list');
	var arrLi=oUl.getElementsByTagName('li');

	var oImg=document.getElementById('pic');
	var oP=document.getElementById('word');

	var arrText=['很差','较差','还行','推荐','力荐'];
	var num=0;

	oUl.onmouseover=function(){
		oImg.style.display='none';
		oP.style.display='block';
	};
	oUl.onmouseout=function(){
		if (num==0) {
			oUl.style.background='url(img/0.png) no-repeat 0 0';
			oImg.style.display='block';
			oP.style.display='none';
		}else{
			oUl.style.background='url(img/'+(num)+'.png) no-repeat 0 0';
			oP.innerHTML=arrText[num-1];
		};
		
	};

	for (var i = 0; i < arrLi.length; i++) {
		arrLi[i].index=i;
		arrLi[i].onmouseover=function(){
			oUl.style.background='url(img/'+(this.index+1)+'.png) no-repeat 0 0';
			oP.innerHTML=arrText[this.index];
		};
		arrLi[i].onclick=function(){
			num=this.index+1;
		};
	};
};
	
