window.onload=function() {
	var oThreeDiv=document.getElementById('threeDiv');
	var oThreeUl=document.getElementById('threeUl');
	var arrThreeLi=oThreeUl.getElementsByTagName('li');

	var oBoxTwo=document.getElementById('boxTwo');
	var oTwoUl=document.getElementById('twoUl');
	var arrTwoLi=oTwoUl.getElementsByTagName('li');
	var oSearc=document.getElementById('searc');
	var oReplac=document.getElementById('replac');

	var oSeText=document.getElementById('seText');
	var oSeBtn=document.getElementById('seBtn');

	var oReTextOne=document.getElementById('reTextOne');
	var oReTextTwo=document.getElementById('reTextTwo');
	var oReBtn=document.getElementById('reBtn');

	var oXbtn=document.getElementById('xbtn');
	
	var oP=document.getElementById('article');
	var str='一年中最温暖也最孤独的季节来临了。一年中最温暖也最孤独的季节来临了，这一年一次同自己的告别，无从选择。一年中最温暖也最孤独的季节来临了，这一年一次同自己的告别，无从选择。走在灯火朦胧、火树银花的夜晚，四季的往事就会在心里翻腾，人会显得和针头里的棉线一样渺小。走在灯火朦胧、火树银花的夜晚，四季的往事就会在心里翻腾，人会显得和针头里的棉线一样渺小。';
	oP.innerHTML=str;
	oSeText.value='';
	oReTextOne.value='';
	oReTextTwo.value='';

	var fnChange=function(num){
		for (var i = 0; i < arrTwoLi.length; i++) {
			arrTwoLi[i].className='';
		};
		arrTwoLi[num].className='active';
		if(num==0){
			oSearc.style.display='block';
			oReplac.style.display='none';
		}else{
			oSearc.style.display='none';
			oReplac.style.display='block';
		}
	};

	oThreeDiv.onclick=function(){
		oThreeUl.style.display='block';
	};
	for (var i = 0; i < arrThreeLi.length; i++) {
		arrThreeLi[i].index=i;
		arrThreeLi[i].onclick=function(){
			oBoxTwo.style.display='block';
			fnChange(this.index);
			oThreeUl.style.display='none';
		};
	};
	for (var i = 0; i < arrTwoLi.length; i++) {
		arrTwoLi[i].index=i;
		arrTwoLi[i].onclick=function(){
			fnChange(this.index);
		};
	};

	oSeBtn.onclick=function(){
		var str1=oSeText.value;
		var str2='';

		if (!str1){
			return alert('请输入要查找的内容');
		}
		if(str.split(str1).length==1){
			return alert('对不起，没找到您输入的【'+ str1 +'】');
		}

		oP.innerHTML=str;

		str2 = str.split(str1).join('<span>'+str1+'</span>');
		oP.innerHTML=str2;

		oSeText.value='';
	};

	oReBtn.onclick=function(){
		var str3=oReTextOne.value;
		var str4=oReTextTwo.value;
		var str5='';

		if (!str3||!str4){
			return alert('请输入内容');
		}
		if(str.split(str3).length==1){
			return alert('对不起，没找到您输入的【'+ str1 +'】');
		}

		oP.innerHTML=str;

		str5 = str.split(str3).join('<span>'+str4+'</span>');
		oP.innerHTML=str5;

		oReTextOne.value='';
		oReTextTwo.value='';
	};

	oXbtn.onclick=function(){
		oThreeUl.style.display='none';
		oBoxTwo.style.display='none';
	};

};
