function displayTime(){
    let dateTime=new Date()
    let hr=adzero(dateTime.getHours());
    let min=adzero(dateTime.getMinutes());
    let secs=adzero(dateTime.getSeconds());
    let ampm=document.getElementById("ampm");
    if(hr>13){
        hr=hr-12
        ampm.innerHTML="PM"
    }
    
    document.getElementById('hours').innerHTML=hr;
    document.getElementById('mins').innerHTML=min;
    document.getElementById('secs').innerHTML=secs;
}

function adzero(num){
    return num<10?"0"+num:num
}
setInterval(displayTime,500)