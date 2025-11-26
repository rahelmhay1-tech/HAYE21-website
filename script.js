const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {threshold:0.2});
sections.forEach(sec => observer.observe(sec));
window.addEventListener('load',()=>{
  document.querySelector('.hero h1').style.opacity='1';
  document.querySelector('.hero p').style.opacity='1';
});
const toggleBtn = document.getElementById('toggleDark');
toggleBtn.addEventListener('click',()=>{
  document.body.classList.toggle('dark-mode');
});