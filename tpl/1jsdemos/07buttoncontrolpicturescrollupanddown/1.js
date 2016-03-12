window.onload=function() {
	var oUl=document.getElementById('showList');	
	var oPrev=document.getElementById('prev');
	var oNext=document.getElementById('next');

	var arrCompu=[
					{
						"title":"1翻新台式机",
						"intro":"1RMB7698起降价50%",
						"src":"img/0.png"
					},
					{
						"title":"2翻新台式机",
						"intro":"2RMB7698起降价50%",
						"src":"img/1.png"
					},
					{
						"title":"3翻新台式机",
						"intro":"3RMB7698起降价50%",
						"src":"img/3.png"
					},
					{
						"title":"4翻新台式机",
						"intro":"4RMB7698起降价50%",
						"src":"img/0.png"
					},
					{
						"title":"5翻新台式机",
						"intro":"5RMB7698起降价50%",
						"src":"img/2.png"
					},
					{
						"title":"6翻新台式机",
						"intro":"6RMB7698起降价50%",
						"src":"img/1.png"
					},
					{
						"title":"7翻新台式机",
						"intro":"7RMB7698起降价50%",
						"src":"img/0.png"
					},
					{
						"title":"8翻新台式机",
						"intro":"8RMB7698起降价50%",
						"src":"img/3.png"
					}
				];

	var str='';
	for (var i = 0; i < arrCompu.length; i++) {
		str+='<li>'+'<p>'+arrCompu[i].title+'</p>'+'<span>'+arrCompu[i].intro+'</span>'+'<img src='+arrCompu[i].src+' />'+'</li>';
	};
	oUl.innerHTML=str;

	function getStyle ( obj, attr ) { 
		return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; 
	}

	var fnPrev=function(){
		var oTop= parseInt(getStyle(oUl,'top'));
		oTop += 10; 

		if(oTop>22){oTop=22};

		oUl.style.top=oTop+'px';
	};
	var fnNext=function(){
		var oTop= parseInt(getStyle(oUl,'top'));
		oTop -= 10; 

		if(oTop<-484){oTop=-484};

		oUl.style.top=oTop+'px';
	};  
	
	oPrev.onmousedown=function(){
		clearInterval(oUl.timer);
		oUl.timer=setInterval(fnPrev,100);
	};
	oPrev.onmouseup=function(){
		clearInterval(oUl.timer);
	};
	oNext.onmousedown=function(){
		clearInterval(oUl.timer);
		oUl.timer=setInterval(fnNext,100);
	};
	oNext.onmouseup=function(){
		clearInterval(oUl.timer);
	};
};