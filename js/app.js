function getPin(){
    const pin=Math.round(Math.random()*10000);
    const pinString=pin+'';
    if(pinString.length==4){
        return pin;
    }else{
        return pin();
    }
}
function genaratePin(){
    const pin=getPin();
    document.getElementById('pin-output').value=pin;
}
document.getElementById('key-pad').addEventListener('click',function(event){
    const key=event.target.innerText;
    const keyOutput=document.getElementById('key-output');
   if(isNaN(key)){
       if(key=='C'){
           keyOutput.value='';
       }
   }else{
    
    const previousnumber=keyOutput.value;
    const newNumber=previousnumber+key;
    keyOutput.value=newNumber;
   }
    
})
function varify(){
    const pin=document.getElementById('pin-output').value;
    const keyOutput=document.getElementById('key-output').value;
    const matchSuccess=document.getElementById('match-success');
    const matchFail=document.getElementById('match-fail');
    if(pin==keyOutput){
        matchSuccess.style.display='block';
        matchFail.style.display='none';
    }else{
        
        matchFail.style.display='block';
        matchSuccess.style.display='none'
    }
}