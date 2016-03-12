var str = '',
data = [
    [
        { title : 'js demos'},
        { url : 'a/1/index.html', title : 'analog mobile phone text message'},
        { url : 'a/2/index.html', title : 'switch images with thumbnail'},
        { url : 'a/3/index.html', title : 'switch multiple sets of images'},
        { url : 'a/4/index.html', title : 'select cards carry set of cards'},
        { url : 'a/5/index.html', title : 'baidu library score'},
        { url : 'a/6/index.html', title : 'application of string method'},
        { url : 'a/7/index.html', title : 'button control picture scroll up and down'},
    ],
    [
        { title : 'ajax php'},
        { url : 'b/1/index.html', title : 'the waterfall flow' },
        { url : 'b/2/index.html', title : 'message board'},
    ],
    [
        { title : 'angular'},
        { url : 'c/1/index.html', title : '单元行上鼠标悬停提示' },
    ]
];
for(var i = 0; i < data.length; i++){
    var items = data[i];
    var sub = '';
    for(var j=0; j<items.length; j++){
        var son = items[j];
        if(j == 0){
            sub += '<li><h1><a href="javascript:;" title="' + son.title + '">' + son.title + '</a></h1><dl class="sub-dl">';
        } else {
            sub += '<dd><a href="' + son.url + '" target="_blank" title="' + son.title + '">' + son.title + '</a></dd>';
        }
        if(j == items.length - 1){
            sub += '</dl></li>';
        }
    }
    str += sub;
}
var ol = document.getElementById('ol');
ol.innerHTML = str;
var h1 = ol.getElementsByTagName('h1');
var dl = ol.getElementsByTagName('dl');
var tmp = -1;
var open = false;
for(var i=0; i < h1.length; i++){
    h1[i].index = i;
    h1[i].onclick = function(){
        for(var i=0; i<h1.length; i++){
            dl[i].style.display = 'none';
        }
        if(tmp == this.index && open){
            dl[this.index].style.display = 'none';
            open = false;
        } else {
            dl[this.index].style.display = 'block';
            open = true;
        }
        tmp = this.index;
    }
}