// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// stagger siblings marked with data-stagger
document.querySelectorAll('[data-stagger]').forEach(group=>{
  [...group.children].forEach((c,i)=>{c.style.transitionDelay=(i*0.08)+'s';c.classList.add('reveal');io.observe(c)});
});

// mobile nav
const burger=document.querySelector('.burger');
if(burger){burger.addEventListener('click',()=>{
  const m=document.querySelector('.mobile-nav');
  m.classList.toggle('open');
  burger.textContent=m.classList.contains('open')?'✕':'☰';
})}

// typing effect (home hero)
const tp=document.querySelector('.typing .txt');
if(tp){
  const words=['MERN Stack Developer','DSA Problem Solver (Java)','System Design Learner','Open Source Contributor','GenAI Explorer'];
  let w=0,i=0,del=false;
  (function tick(){
    const cur=words[w];
    tp.textContent=cur.slice(0,i);
    if(!del){i++;if(i>cur.length){del=true;return setTimeout(tick,1400)}}
    else{i--;if(i===0){del=false;w=(w+1)%words.length}}
    setTimeout(tick,del?38:78);
  })();
}
