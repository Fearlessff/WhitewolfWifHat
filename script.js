// Snow + eye tracking
const eyes=document.querySelector('.eyes');
document.addEventListener('mousemove',e=>{
if(window.innerWidth>768){
eyes.style.left=e.clientX/50+'px';
eyes.style.top=e.clientY/50+'px';
}
});
