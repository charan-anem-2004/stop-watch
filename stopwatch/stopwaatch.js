let hr=document.getElementById("hr");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

let start=document.getElementById("start");
let stop=document.getElementById("stop");


function startfun(){
      if(sec.innerText=="60")
      {
        sec.innerText="00";
      min.innerText++;
      if(min.innerText<10)
      min.innerText="0"+min.innerText;
      }
     if(min.innerText=="60")
     {
        min.innerText="00";
     hr.innerText++;
     if(hr.innerText<10)
     hr.innerText="0"+hr.innerText;
     }
    sec.innerText++;

    if(sec.innerText<10)
    sec.innerText="0"+sec.innerText;
    start.disabled=true;
}
function resetfun(){
    sec.innerText="00";
    min.innerText="00";
    hr.innerText="00";
}
function startenable(){
    start.disabled=false;
}