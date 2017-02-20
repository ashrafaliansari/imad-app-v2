//console.log('Loaded!');
//counter code
var button=document.getElementById('counter');
//var counter=0;
button.onlick= function()
{
    //create a requst object  for the  counter end point 
    var request=new XMLHttpRequest();
    //capture the respoonse and store it in avariable
    reuest.onreadystatechange=function()
    {
        if(request.readystate === XMLRequest.DONE)
        {//take some action
            if(request.status===200)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        
        }
    };

//make a request
request.open('GET','http://ashrafaliansari.imad.hasura-app.io/counter', true);
request.send(null);
};