window.onload=function(){
	var oUl=document.getElementById('list');
	var arrLi=oUl.getElementsByTagName('li');

	var getShortest=function(){
		var index=0;
		for (var i = 0; i < arrLi.length; i++) {
			if(arrLi[i].offsetHeight<arrLi[index].offsetHeight){
				index=i;
			}
		};
		return index;
	};
	//url=data.preview/a=data.width/b=data.height/c=data.title/obj=arrLi[index]
	var appendPic=function(url,a,b,c,obj){
		var oImg=document.createElement('img');
		oImg.src=url;
		oImg.style.width='200px';
		oImg.style.height=200*a/b+'px';
		
		var oP=document.createElement('p');
		oP.innerHTML=c;

		var oDiv=document.createElement('div');
		oDiv.appendChild(oImg);
		oDiv.appendChild(oP);

		obj.appendChild(oDiv);
	};
	var cpage=1;
	var onOff=true;
	var fnAjax=function(){
		ajax('get','data.php','cpage='+cpage,function(data){

			var data = JSON.parse(data);
			if(!data.length){
				return;
			}
			for (var i = 0; i < data.length; i++) {
				var index=getShortest();
				appendPic(data[i].preview,data[i].width,data[i].height,data[i].title,arrLi[index]);
			};
			onOff=true;
		});
	};
	fnAjax();
	var getTop=function(obj){
		var iTop=0;
		while(obj){
			iTop+=obj.offsetTop;
			obj=obj.offsetParent;
		}
		return iTop;
	};
	window.onscroll=function(){
		var index=getShortest();
		var oLi=arrLi[index];
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;

		if(getTop(oLi)+oLi.offsetHeight < document.documentElement.clientHeight+scrollTop){
			if ( onOff) {
				onOff = false;
				cpage++;
				fnAjax();
			}
		}
	};

};