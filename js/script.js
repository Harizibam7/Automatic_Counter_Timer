const day=document.querySelector('#days');
const hours=document.querySelector('#hours');
const minute=document.querySelector('#minutes');
const second=document.querySelector('#seconds');

function updateYear(){
const currentYear=new Date().getFullYear();
const newYear=new Date(`January 1 ${currentYear+1} 00:00:00`);
const currentDate=new Date();
const dif=newYear-currentDate;
const d=Math.floor(dif/1000/60/60/24);
const h=Math.floor((dif/1000/60/60)%24);
const m=Math.floor((dif/1000/60)%60);
const s=Math.floor((dif/1000)%60);

day.innerHTML=d;
hours.innerHTML=h;
minute.innerHTML=m;
second.innerHTML=s;
/*
1000 ms = 1
60 s= 1m
60m = 1h
24h = 1 day
*/
}
console.log(setInterval(updateYear,1000));