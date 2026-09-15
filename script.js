const menu=document.querySelector(".menu");
const nav=document.querySelector(".nav-links");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal, .section-head, .project, .timeline-item, .skill-group, .education-card, .mentor-banner").forEach(el=>{
  el.classList.add("reveal"); observer.observe(el);
});
