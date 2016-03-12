window.onload=function(){
	var oPic=document.getElementById('pic');
	var oSay=document.getElementById('said');
	var oBtn=document.getElementById('btn');

	var oContent=document.getElementById('contentOne');
	
	var str1='';
	var str2='';
	var str='';
	var sub='';

	var onOff=true;

	oPic.onclick=function(){
		onOff = !onOff;
		if(onOff){this.src='img/5.png';}else{this.src='img/6.png'}
	}
	oBtn.onclick=function(){
		sub=oSay.value;
		if(onOff){
			str2='<div class="fr clear setOne"><div class="fr"><img src="img/5.png" /></div><div class="fr setTwo"><div class="divTwo fr">'+sub+'</div></div></div>';
			str=str2+str;
		}else{
			str1='<div class="fl clear setOne"><div class="fl"><img src="img/6.png" /></div><div class="fl setTwo"><div class="divOne fl">'+sub+'</div></div></div>';
			str=str1+str;
		}
		oContent.innerHTML=str;
	};
};