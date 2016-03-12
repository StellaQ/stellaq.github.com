window.onload=function () {
//第一步：检测是否登录，显示对应部分
	var oSignIn=document.getElementById('signIn');
	var oSignUp=document.getElementById('signUp');
	var oYidenglu=document.getElementById('yidenglu');
	var oNote=document.getElementById('note');

	var oYidengluH=oYidenglu.getElementsByTagName('h4')[0];

	var fnLoginEd=function(){

		var uid=fnGetCookie('uid');
		var name=fnGetCookie('name');
		name=decodeURI(name);
		if (uid) {
			oSignIn.style.display='none';
			oSignUp.style.display='none';
			oYidengluH.innerHTML=name;
			oYidenglu.style.display='block';
			oNote.style.display='block';
		}else{
			oSignIn.style.display='block';
			oSignUp.style.display='block';
			oYidenglu.style.display='none';
			oNote.style.display='none';
		};
	};
	fnLoginEd();
//第二步：登录oSignIn
	var oLoginEmail=document.getElementById('loginEmail');
	var oLoginPw=document.getElementById('loginPw');
	var oBtnLogin=document.getElementById('btnLogin');
	var arrSpanLogin=oSignIn.getElementsByTagName('span');
//本地检测:邮箱不能为空/邮箱格式正确
	var fnEmailCheck=function(obj){
		var str=obj.value;
		var reg = /(^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$)|(^$)/;
		if(reg.test(str)){
			return true;
		}else{
			return false;
		}
	};
	oLoginEmail.onblur=function(){
		if(fnEmailCheck(this)){
			arrSpanLogin[0].innerHTML='';
			arrSpanLogin[0].style.display='none';
		}else{
			arrSpanLogin[0].innerHTML='邮箱格式不正确';
			arrSpanLogin[0].style.display='block';
		};
	};
	oLoginEmail.onkeyup=function(){
		if(this.value==''){
			arrSpanLogin[0].innerHTML='邮箱不能为空';
			arrSpanLogin[0].style.display='block';
		}else{
			arrSpanLogin[0].innerHTML='';
			arrSpanLogin[0].style.display='none';
		}
	};
//本地检测:密码不能为空/密码格式正确（6-16位，不能有空格）
	var fnPwCheck=function(obj){
		var str=obj.value;
		if (str=='') {
			return 0;
		}else if(str.indexOf(" ")>=0){
			return 1;
		}else if(str.length<6){
			return 2;
		}else if(str.length>16){ 
			return 3;
		}else{
			return 4
		}
	};
	oLoginPw.onkeyup=function(){
		var num = fnPwCheck(this);
		switch (num) {
			case 0:
				arrSpanLogin[1].innerHTML='密码不能为空';
				arrSpanLogin[1].style.display='block';
				break;
			case 1:
				arrSpanLogin[1].innerHTML='密码不能有空格';
				arrSpanLogin[1].style.display='block';
				break;
			case 2:
				arrSpanLogin[1].innerHTML='密码长度不能小于6位';
				arrSpanLogin[1].style.display='block';
				break;
			case 3:
				arrSpanLogin[1].innerHTML='密码长度不能大于16位';
				arrSpanLogin[1].style.display='block';
				break;
			case 4:
				arrSpanLogin[1].style.display='none';
				break;
		}
	};
//连到signin.php检测邮箱是否存在，密码是否正确。若错误返回错误信息。若正确，setcookie，fnLoginEd；
	oBtnLogin.onclick=function(){
		if(oLoginEmail.value==''){
			arrSpanLogin[0].innerHTML='邮箱不能为空';
			arrSpanLogin[0].style.display='block';
		}
		if(oLoginPw.value==''){
			arrSpanLogin[1].innerHTML='密码不能为空';
			arrSpanLogin[1].style.display='block';
			return;
		}
		ajax('post','dataphp/signin.php','email='+oLoginEmail.value+'&password='+oLoginPw.value,function(data){
			var data=JSON.parse(data);
			switch (data){
				case 0:
					arrSpanLogin[0].innerHTML='账号未注册';
					arrSpanLogin[0].style.display='block';
					break;
				case 1:
					arrSpanLogin[1].innerHTML='密码错误';
					arrSpanLogin[1].style.display='block';
					break;
				case 2:
					fnLoginEd();	
					break;
			}
		});
	};
//第三步：注册oSignUp
	var oRegEmail=document.getElementById('regEmail');
	var oRegPw=document.getElementById('regPw');
	var oRegName=document.getElementById('regName');
	var oBtnReg=document.getElementById('btnReg');
	var arrSpanSign=oSignUp.getElementsByTagName('span');
//本地检测:邮箱不能为空/邮箱格式正确
//连到signup.php检测邮箱是否已被注册
	oRegEmail.onblur=function(){
		if(fnEmailCheck(this)){
			arrSpanSign[0].innerHTML='';
			arrSpanSign[0].style.display='none';
			ajax('post','dataphp/signup.php','email='+oRegEmail.value+'&fn=0',function(data){
				var data=JSON.parse(data);
				if(data==0){
					arrSpanSign[0].innerHTML='账号已被注册';
					arrSpanSign[0].style.display='block';
				}
			});
		}else{
			arrSpanSign[0].innerHTML='邮箱格式不正确';
			arrSpanSign[0].style.display='block';
		};
	};
	oRegEmail.onkeyup=function(){
		if(this.value==''){
			arrSpanSign[0].innerHTML='邮箱不能为空';
			arrSpanSign[0].style.display='block';
		}else{
			arrSpanSign[0].innerHTML='';
			arrSpanSign[0].style.display='none';
		}
	};
//本地检测:密码不能为空/密码格式正确（6-16位，不能有空格）
	oRegPw.onkeyup=function(){
		var num = fnPwCheck(this);
		switch (num) {
			case 0:
				arrSpanSign[1].innerHTML='密码不能为空';
				arrSpanSign[1].style.display='block';
				break;
			case 1:
				arrSpanSign[1].innerHTML='密码不能有空格';
				arrSpanSign[1].style.display='block';
				break;
			case 2:
				arrSpanSign[1].innerHTML='密码长度不能小于6位';
				arrSpanSign[1].style.display='block';
				break;
			case 3:
				arrSpanSign[1].innerHTML='密码长度不能大于16位';
				arrSpanSign[1].style.display='block';
				break;
			case 4:
				arrSpanSign[1].style.display='none';
				break;
		}
	};
//本地检测:昵称不能为空/昵称格式正确（2-18位，中英文，数字及下划线）
//连到signup.php检测昵称是否已被注册
	var fnNameCheck=function(obj){
		var str=obj.value;
		//Q2：此正则有误，只能输入英文，不能输入中文，待研究
		var reg = /^[a-zA-Z0-9\x80-\xff][\x80-\xff_a-zA-Z0-9]{2,18}$/;
		if(reg.test(str)){
			return true;
		}else{
			return true;
		}
	};
	oRegName.onblur=function(){
		if(fnNameCheck(this)){
			arrSpanSign[2].innerHTML='';
			arrSpanSign[2].style.display='none';
			ajax('post','dataphp/signup.php','name='+oRegName.value+'&fn=1',function(data){
				var data=JSON.parse(data);
				if(data==2){
					arrSpanSign[2].innerHTML='昵称已被使用';
					arrSpanSign[2].style.display='block';
				}
			});
		}else{
			arrSpanSign[2].innerHTML='昵称格式不正确';
			arrSpanSign[2].style.display='block';
		};
	};
	oRegName.onkeyup=function(){
		if(this.value==''){
			arrSpanSign[2].innerHTML='昵称不能为空';
			arrSpanSign[2].style.display='block';
		}else{
			arrSpanSign[2].innerHTML='';
			arrSpanSign[2].style.display='none';
		}
	};
//连到signup.php注册。若错误返回错误信息。若正确，setcookie，fnLoginEd；
	oBtnReg.onclick=function(){
		if(oRegEmail.value==''){
			arrSpanSign[0].innerHTML='邮箱不能为空';
			arrSpanSign[0].style.display='block';
		}
		if(oRegPw.value==''){
			arrSpanSign[1].innerHTML='密码不能为空';
			arrSpanSign[1].style.display='block';
		}
		if(oRegName.value==''){
			arrSpanSign[2].innerHTML='昵称不能为空';
			arrSpanSign[2].style.display='block';
			return;
		}
		ajax('post','dataphp/signup.php','email='+oRegEmail.value+'&password='+oRegPw.value+'&name='+oRegName.value+'&fn=2',function(data){
			var data=JSON.parse(data);
			if(data==4){
				fnLoginEd();
			}
		});
	};
//第四步:初始化留言板
	var ipage=1;
	var fnInitialList=function(){
		ajax('get','dataphp/initial.php','page='+ipage,function(data){
			var data=JSON.parse(data);
			if(data==1){
				alert('这是最后一页了');
				ipage--;
			}else{
				var oList=document.getElementById('list');
				oList.innerHTML='';
				for (var i = 0; i < data.length; i++) {
					fnAppendChild(data[i]);
				};
			}	
		});
	};
	fnInitialList(ipage);
	var oFlip=document.getElementById('flip');
	var arrFlip=oFlip.getElementsByTagName('li');
	arrFlip[0].onclick=function(){
		ipage=ipage-1;
		if (ipage>0) {
			fnInitialList(ipage);
		}else{
			alert('已经到第一页了');
			ipage=1;
		}
	};
	arrFlip[1].onclick=function(){
		ipage++;
		fnInitialList(ipage);
	};
//第五步：留言oNote
	var oText=document.getElementById('text');
	var oBtnAdd=document.getElementById('btnAdd');
	oBtnAdd.onclick=function(){
		var str=oText.value;
		if(str==''){
			alert('留言不能为空');
			return;
		}
		ajax('post','dataphp/addnote.php','message='+str,function(data){
			var data = JSON.parse(data);
			if (data==1) {
				alert('留言成功了');
				ipage=1;
				fnInitialList(ipage);
				oText.value='';
			};
		});
	};
//第六步：登出oYidenglu
	var oBtnLogout=document.getElementById('btnLogout');
	oBtnLogout.onclick=function(){
		ajax('get','dataphp/logout.php','',function(data){
			var data=JSON.parse(data);
			if(data){
				fnLoginEd();
				fnClean();
			}
		});
	};
//新加载页面/退出账号时，特定input内容都应该清空
	var fnClean=function(){
		oLoginEmail.value='';
		oLoginPw.value='';
		oRegEmail.value='';
		oRegPw.value='';
		oRegName.value='';
	};
	fnClean();
};
var fnGetCookie=function(key){
	var str=document.cookie;
	str = str.replace(/\s+/g,""); 

	var arr1=str.split(';');
	for (var i = 0; i < arr1.length; i++) {
		var arr2=arr1[i].split('=');
		if (arr2[0]==key) {
			return arr2[1];
		};
	};
};
/*<li>
	<h4>名字data.name</h4>
	<p>用户留言data.content</p>
	<span>2016.22.34data.pubdate</span>
</li>*/
var fnAppendChild=function(obj){
	var oList=document.getElementById('list');

	var oLi=document.createElement('li');

	var oH4=document.createElement('h4');
	oH4.innerHTML=obj.name;
	oLi.appendChild(oH4);

	var oP=document.createElement('p');
	oP.innerHTML=obj.content;
	oLi.appendChild(oP);

	var oSpan=document.createElement('span');
	oSpan.innerHTML=obj.pubdate;
	oLi.appendChild(oSpan);

	oList.appendChild(oLi);
};
