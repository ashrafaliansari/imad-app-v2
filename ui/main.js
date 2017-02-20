//console.log('Loaded!');
//counter code
var button=document.getElementById('counter');
var count=0;
//var counter=0;
button.onclick= function()
{   
    count=count+1;
    var span=document.getElementById('counting');
    span.innerHTML=count.toString();
};