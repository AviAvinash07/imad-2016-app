// counter mode.
var button = document.getElementById('counter');


button.onclick = function(){
    
    
    //Create the request object
    var request = XMLHttpRequest();
    //Capture the response and store it in a variable.
    request.onreadystatechange = function(){
        
        if(request.readystate === XMLHttpRequest.DONE){
            
            //Take some action
            if(request.status === 200){
                
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
        //Not done Yet
    };
    //Make the request
    request.open('GET', 'http://aviavinash07.imad.hasura-app.io/counter', true);
    request.send(null);
};