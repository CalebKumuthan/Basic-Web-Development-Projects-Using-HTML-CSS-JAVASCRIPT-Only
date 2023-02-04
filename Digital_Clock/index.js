const hrEl = document.getElementById("hour");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function datecal(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h>12){
        h=h-12;
        ampm="PM";
    }

    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;

    hrEl.innerHTML=h;
    minEl.innerHTML=m;
    secEl.innerHTML=s;
    ampmEl.innerHTML=ampm;

    setTimeout(()=>{
        datecal();
    },1000);
}

datecal()



