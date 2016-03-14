window.onload=function () {
    var oContainer=document.getElementById('container');
    var arrDiv=oContainer.getElementsByTagName('div');
    var arrUl=oContainer.getElementsByTagName('ul');
    var arrLi=oContainer.getElementsByTagName('li');

    for (var i = 0; i < arrDiv.length; i++) {

        arrDiv[i].index=i;

        arrDiv[i].onclick=function(){

            for (var j = 0; j < arrDiv.length; j++) {
                if(arrDiv[j] !== this){
                    arrDiv[j].className='';
                    arrUl[j].style.display='none';
                }
            };

            if(this.className==''){
                this.className='active';
                arrUl[this.index].style.display='block';
            }else{
                this.className='';
                arrUl[this.index].style.display='none';
            }
            
        };
    };
};