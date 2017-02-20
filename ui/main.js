//console.log('Loaded!');
//counter code
var button=document.getElementById('counter');
var counter=0;
//var counter=0;
button.onlick= function()
{   
    counter++;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};