const endDate=new Date();endDate.setDate(endDate.getDate()+40);
setInterval(()=>{const n=new Date(),d=endDate-n;if(d<=0)return;
document.getElementById('days').innerText=Math.floor(d/864e5);
document.getElementById('hours').innerText=Math.floor(d/36e5)%24;
document.getElementById('minutes').innerText=Math.floor(d/6e4)%60;
document.getElementById('seconds').innerText=Math.floor(d/1e3)%60;},1000);
