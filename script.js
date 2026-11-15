/* Sergiu Construcții Proiect – site static, fără biblioteci JS.
   Pentru contact direct, completează datele de mai jos și publică din nou fișierele. */
const CONTACT = Object.freeze({
  phone: '',      // Exemplu de format: +40 7xx xxx xxx
  whatsapp: '',   // Doar cifre, cu prefix de țară, fără + (ex: 407xxxxxxxx)
  email: ''        // Exemplu: contact@domeniu.ro
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
if (menuToggle && nav) {
  function closeMenu() { nav.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Deschide meniul'); }
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Închide meniul' : 'Deschide meniul');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', e => {
    if (nav.classList.contains('is-open') && !e.target.closest('.site-header')) closeMenu();
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });
}

const filters = [...document.querySelectorAll('[data-filter]')];
const galleryItems = [...document.querySelectorAll('.gallery-item')];
const galleryCounter = document.querySelector('#gallery-counter');
function visibleItems() { return galleryItems.filter(el => !el.hidden); }
filters.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filters.forEach(b => { const active = b === button; b.classList.toggle('active',active); b.setAttribute('aria-pressed',String(active)); });
  galleryItems.forEach(item => { item.hidden = filter !== 'toate' && item.dataset.category !== filter; });
  const n=visibleItems().length;
  galleryCounter.textContent = `${n} ${n === 1 ? 'fotografie' : 'fotografii'}`;
}));

const dialog = document.querySelector('#gallery-dialog');
const dialogImg = document.querySelector('#dialog-image');
const dialogCaption = document.querySelector('#dialog-caption');
const dialogCount = document.querySelector('#dialog-count');
let galleryIndex = 0;
let lastGalleryButton = null;
function showPhoto(index) {
  const list = visibleItems(); if (!list.length) return;
  galleryIndex = (index + list.length) % list.length;
  const photo = list[galleryIndex];
  dialogImg.src = photo.dataset.full;
  dialogImg.alt = photo.querySelector('img').alt;
  dialogCaption.textContent = photo.dataset.label;
  dialogCount.textContent = `${galleryIndex + 1} / ${list.length}`;
}
function openPhoto(photo) {
  lastGalleryButton = photo;
  showPhoto(visibleItems().indexOf(photo));
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else dialog.setAttribute('open','');
}
function closePhoto(){ if (typeof dialog.close === 'function') dialog.close(); else dialog.removeAttribute('open'); }
galleryItems.forEach(photo => photo.addEventListener('click', () => openPhoto(photo)));
document.querySelector('#dialog-close').addEventListener('click',closePhoto);
document.querySelector('#dialog-prev').addEventListener('click',()=>showPhoto(galleryIndex-1));
document.querySelector('#dialog-next').addEventListener('click',()=>showPhoto(galleryIndex+1));
dialog.addEventListener('keydown',e => {if(e.key==='ArrowLeft'){e.preventDefault();showPhoto(galleryIndex-1);}if(e.key==='ArrowRight'){e.preventDefault();showPhoto(galleryIndex+1);}});
dialog.addEventListener('click',e => {if(e.target===dialog) closePhoto();});
dialog.addEventListener('close',()=>lastGalleryButton?.focus());
let swipeStartX;
dialog.addEventListener('touchstart',e=>{swipeStartX=e.changedTouches[0].screenX;},{passive:true});
dialog.addEventListener('touchend',e=>{if(swipeStartX===undefined)return; const delta=e.changedTouches[0].screenX-swipeStartX;if(Math.abs(delta)>65)showPhoto(galleryIndex+(delta<0?1:-1));swipeStartX=undefined;},{passive:true});

// When a visitor clicks a service card, preselect that service in the quote form.
const serviceInput = document.querySelector('#service');
document.querySelectorAll('.service-card a[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    const option = [...serviceInput.options].find(item => item.value === link.dataset.service);
    if (option) serviceInput.value = option.value;
  });
});

const form = document.querySelector('#quote-form');
const output = document.querySelector('#generated-message');
const result = document.querySelector('#form-result');
const status = document.querySelector('#form-status');
const helper = document.querySelector('#form-helper');
const formButtonLabel = document.querySelector('#form-button-label');
const phoneDisplay = document.querySelector('#contact-phone-display');
const emailDisplay = document.querySelector('#contact-email-display');
const contactSmallNote=document.querySelector('.contact-small-note');
if (CONTACT.phone) { const a=document.createElement('a');a.href='tel:'+CONTACT.phone.replace(/[^+\d]/g,'');a.textContent=CONTACT.phone;phoneDisplay.replaceChildren(a); }
if (CONTACT.email) { const a=document.createElement('a');a.href='mailto:'+CONTACT.email;a.textContent=CONTACT.email;emailDisplay.replaceChildren(a); }
if (CONTACT.phone || CONTACT.email) contactSmallNote.textContent='Contactează-ne pentru a discuta detaliile lucrării.';
if (CONTACT.email) {formButtonLabel.textContent='Pregătește emailul';helper.textContent='La apăsare se va deschide aplicația ta de email, cu mesajul pregătit.';}
else if (CONTACT.whatsapp) {formButtonLabel.textContent='Pregătește mesaj WhatsApp';helper.textContent='La apăsare se va deschide WhatsApp, cu mesajul pregătit.';}
function composeMessage(){
  const name=document.querySelector('#full-name').value.trim();
  const phone=document.querySelector('#phone').value.trim();
  const city=document.querySelector('#work-city').value.trim();
  const service=document.querySelector('#service').value;
  const details=document.querySelector('#details').value.trim();
  return `Bună ziua, Sergiu Construcții Proiect!\n\nAș dori o ofertă pentru o lucrare.\n\nNume: ${name}\nTelefon: ${phone}\nLocalitatea lucrării: ${city}\nLucrare: ${service}\n\nDetalii:\n${details}\n\nVă mulțumesc!`;
}
form.addEventListener('submit', e => {
  e.preventDefault();
  const nameInput = document.querySelector('#full-name');
  const detailsInput = document.querySelector('#details');
  const cityInput = document.querySelector('#work-city');
  nameInput.value = nameInput.value.trim();
  detailsInput.value = detailsInput.value.trim();
  cityInput.value = cityInput.value.trim();
  if (!form.reportValidity()) return;
  const message=composeMessage();
  output.value=message;result.hidden=false;status.textContent='';
  if (CONTACT.email) {window.location.href='mailto:'+CONTACT.email+'?subject='+encodeURIComponent('Cerere de ofertă – Sergiu Construcții Proiect')+'&body='+encodeURIComponent(message);}
  else if (CONTACT.whatsapp) {window.open('https://wa.me/'+CONTACT.whatsapp+'?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');}
  else {status.textContent='Mesajul este pregătit, dar nu a fost trimis. Copiază-l și păstrează-l până când firma publică datele de contact.';result.scrollIntoView({behavior:'smooth',block:'nearest'});}
});
document.querySelector('#copy-message').addEventListener('click',async()=>{
  const txt=output.value;
  try{if(navigator.clipboard?.writeText && window.isSecureContext){await navigator.clipboard.writeText(txt);}else {output.focus();output.select();const ok=document.execCommand('copy');if(!ok)throw new Error('copy');}status.textContent='Mesajul a fost copiat.';}
  catch(err){output.focus();output.select();status.textContent='Selectează și copiază manual textul mesajului.';}
});
document.querySelector('#copyright-year').textContent=new Date().getFullYear();
