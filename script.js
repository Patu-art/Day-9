(()=>{'use strict';
  const menu=document.querySelector('.menu-button');
  const nav=document.querySelector('.navigation');
  const close=()=>{if(!menu||!nav)return;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');nav.classList.remove('is-open')};
  menu?.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));menu.setAttribute('aria-label',expanded?'Open navigation':'Close navigation');nav?.classList.toggle('is-open',!expanded)});
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  document.addEventListener('pointerdown',e=>{if(nav?.classList.contains('is-open')&&!nav.contains(e.target)&&!menu?.contains(e.target))close()});
  const data={acai:{title:'A little purple magic.',copy:'The açaí base is where it all begins. A bright, cool bowl made for a good moment in your day.'},fruit:{title:'The fresh finish.',copy:'Fresh fruit brings natural colour and a little extra joy to the top of every bowl.'},granola:{title:'That homemade crunch.',copy:'Homemade granola is the finishing touch: something crunchy to go with every spoonful.'}};
  const title=document.querySelector('[data-ingredient-title]'),copy=document.querySelector('[data-ingredient-copy]');
  document.querySelectorAll('[data-ingredient]').forEach(button=>button.addEventListener('click',()=>{const item=data[button.dataset.ingredient];if(!item)return;document.querySelectorAll('[data-ingredient]').forEach(tab=>{const active=tab===button;tab.classList.toggle('is-active',active);tab.setAttribute('aria-pressed',String(active))});if(title)title.textContent=item.title;if(copy)copy.textContent=item.copy}));
  const revealed=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver'in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches){revealed.forEach(el=>el.classList.add('is-visible'))}else{const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.09,rootMargin:'0px 0px -24px 0px'});revealed.forEach(el=>observer.observe(el))}
  const year=document.getElementById('year');if(year)year.textContent=String(new Date().getFullYear());
})();
