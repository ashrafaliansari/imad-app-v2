//console.log('Loaded!');
//counter code
var button=document.getElementById('counter');
var counter=0;
//var counter=0;
button.onlick= function()
{   
    counter=counter+1;
    var span=document.getElementById('counting');
    span.innerHTML=counter.toString();
};