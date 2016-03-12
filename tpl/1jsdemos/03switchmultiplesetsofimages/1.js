window.onload=function() {
	var oPrev=document.getElementById('prev');	
	var oNext=document.getElementById('next');

	var oPicOne=document.getElementById('picOne');
	var oPicTwo=document.getElementById('picTwo');

	var arrP=document.getElementsByTagName('p');
	var arrSpan=document.getElementsByTagName('span');

	var arrSrcOne=['img/a0.png','img/a1.png','img/a2.png','img/a3.png'];
	var arrSrcTwo=['img/b0.png','img/b1.png','img/b2.png'];

	var numOne=0;
	var numTwo=0;

	var fnTabOne=function(numOne){
		oPicOne.src=arrSrcOne[numOne];
		arrP[0].innerHTML='第1组第'+(numOne+1)+'张';
		arrSpan[0].innerHTML=(numOne+1)+'/'+arrSrcOne.length;
	};
	var fnTabTwo=function(numTwo){
		oPicTwo.src=arrSrcTwo[numTwo];
		arrP[1].innerHTML='第2组第'+(numTwo+1)+'张';
		arrSpan[1].innerHTML=(numTwo+1)+'/'+arrSrcTwo.length;
	};

	oPicOne.onclick=function(){
		numOne++;
		if(numOne==arrSrcOne.length){numOne=0;}
		fnTabOne(numOne);
	};
	oPicTwo.onclick=function(){
		numTwo++;
		if(numTwo==arrSrcTwo.length){numTwo=0;}
		fnTabTwo(numTwo);
	};
	oNext.onclick=function(){
		numOne++;
		if(numOne==arrSrcOne.length){numOne=0;}
		numTwo++;
		if(numTwo==arrSrcTwo.length){numTwo=0;}

		fnTabOne(numOne);
		fnTabTwo(numTwo);
	};
	oPrev.onclick=function(){
		numOne--;
		if(numOne==-1){numOne=arrSrcOne.length-1;}
		numTwo--;
		if(numTwo==-1){numTwo=arrSrcTwo.length-1;}
		
		fnTabOne(numOne);
		fnTabTwo(numTwo);
	};
};