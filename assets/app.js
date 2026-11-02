/* MARINA FUERTES — website interaction. No external JS frameworks. */
(()=>{
 'use strict';
 const $ = id => document.getElementById(id);
 const records = Array.isArray(window.MARINA_PUBLICATIONS) ? window.MARINA_PUBLICATIONS : [];
 const els = {search:$('pub-search'), topic:$('pub-topic'),year:$('pub-year'),results:$('pub-results'),count:$('pub-count'),total:$('pub-total'),more:$('load-more'),empty:$('empty-results'),csv:$('download-csv')};
 const escapeHTML = s => String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let shown=8;
 const years=[...new Set(records.map(p=>p.year))].sort((a,b)=>b-a);
 for(const year of years){const o=document.createElement('option');o.value=String(year);o.textContent=String(year);els.year.appendChild(o)}
 els.total.textContent=String(records.length);
 const filtered=()=>{
   const q=els.search.value.trim().toLocaleLowerCase();
   const topic=els.topic.value,year=els.year.value;
   return records.filter(p=>(topic==='all'||p.topic===topic)&&(year==='all'||String(p.year)===year)&&(!q||[p.title,p.authors,p.journal,p.doi,p.type].join(' ').toLocaleLowerCase().includes(q)));
 };
 function render(){
   const selected=filtered();els.count.textContent=String(Math.min(selected.length,shown));
   els.empty.hidden=selected.length!==0;
   els.more.hidden=selected.length<=shown;
   els.results.innerHTML=selected.slice(0,shown).map(p=>{
     const url=String(p.url||''); const good=/^https:\/\//i.test(url);
     return `<article class="pub-item"><span class="pub-year">${escapeHTML(p.year)}</span><div class="pub-content"><h3>${good?`<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(p.title)}</a>`:escapeHTML(p.title)}</h3><p class="pub-journal">${escapeHTML(p.journal)}</p><p class="pub-authors">${escapeHTML(p.authors)}</p><div class="pub-badges"><span>${escapeHTML(p.topic)}</span><small>${escapeHTML(p.type)}</small></div></div>${good?`<a class="pub-link" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(p.linkLabel)} for ${escapeHTML(p.title)}">↗</a>`:''}</article>`
   }).join('');
 }
 [els.search,els.topic,els.year].forEach(el=>el.addEventListener(el===els.search?'input':'change',()=>{shown=8;render()}));
 els.more.addEventListener('click',()=>{shown+=8;render()});
 els.csv.addEventListener('click',()=>{
   const fields=['year','title','authors','journal','type','topic','doi','url'];
   const csv=[fields.join(','),...records.map(r=>fields.map(k=>'"'+String(r[k]??'').replace(/"/g,'""')+'"').join(','))].join('\r\n');
   const blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8;'});
   const url=URL.createObjectURL(blob), a=document.createElement('a');a.href=url;a.download='Marina_Fuertes_Scopus_Publications.csv';a.click();URL.revokeObjectURL(url);
 });
 const menu=$('menu-button'),nav=$('main-nav');
 if(menu&&nav){menu.addEventListener('click',()=>{const active=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(active));menu.setAttribute('aria-label',active?'Close navigation':'Open navigation')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false')}})}
 const y=$('current-year');if(y)y.textContent=String(new Date().getFullYear());
 render();
})();