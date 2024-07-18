var random=Math.floor(Math.random()*100)+1;
var attempt=0;
document.getElementById('btn').addEventListener('click',function(){
    attempt++;
    var guess=parseInt(document.getElementById('guessinput').value);
    if(guess===random){
        display("Congrats!👏🏻👏🏻👏🏻 "+attempt+" attempts used to guess the number");
        document.getElementById('btn').disabled=true;
    }
    else if(guess<random){
        display("Pathala Pathala value pathala");
    }
    else if(guess>random){
        display("Over ah tha poitomo");
    }
});
function display(message){
    document.getElementById("msg").textContent=message;}