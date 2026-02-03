
let time=900,timer;
function start(){
 let n=document.getElementById('name').value.trim();
 if(!n) return alert('Please enter your name');
 document.getElementById('student').innerText=n;
 timer=setInterval(()=>{
  time--;
  let m=Math.floor(time/60),s=time%60;
  document.getElementById('timer').innerText=`${m}:${s.toString().padStart(2,'0')}`;
  if(time<=0) clearInterval(timer);
 },1000);
}
