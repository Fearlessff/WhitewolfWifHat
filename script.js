// Countdown
const end=new Date();end.setDate(end.getDate()+40);
setInterval(()=>{
const n=new Date(),d=end-n;if(d<=0)return;
days.innerText=Math.floor(d/864e5);
hours.innerText=Math.floor(d/36e5)%24;
minutes.innerText=Math.floor(d/6e4)%60;
seconds.innerText=Math.floor(d/1e3)%60;
},1000);

// Snow
const c=document.getElementById("snow"),ctx=c.getContext("2d");
let w,h,flakes=[];
function resize(){w=c.width=innerWidth;h=c.height=innerHeight}
window.onresize=resize;resize();
for(let i=0;i<120;i++)flakes.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*3+1,s:Math.random()+.5});
function snow(){
ctx.clearRect(0,0,w,h);
flakes.forEach(f=>{
ctx.beginPath();
ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
ctx.fillStyle="rgba(255,255,255,.8)";
ctx.fill();
f.y+=f.s;
if(f.y>h)f.y=0;
});
requestAnimationFrame(snow);
}
snow();

// Howl toggle
const howl=document.getElementById("howl");
document.getElementById("soundToggle").onclick=()=>{
howl.paused?howl.play():howl.pause();
};
