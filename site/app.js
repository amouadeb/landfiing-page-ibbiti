// Fonte de verdade: contexto mestre e memorando/estrutura jurídica da Sprint 3.
const TOKENOMICS = Object.freeze({total:100,external:67,treasury:33,price:113763,royaltyRate:.15,shareOfPool:.01,shareOfGrossRevenue:.0015,start:'2027-04-01',end:'2030-12-31',close:'2031-01-01',benefitPerYear:8,benefitTotal:32,benefitFace:780,benefitCost:24960,benefitUse:41600,maxExternalPerHolder:2});
const brl=v=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}).format(v);
document.querySelectorAll('[data-value]').forEach(n=>n.textContent=brl(TOKENOMICS[n.dataset.value]));
const login=document.getElementById('login'),experience=document.getElementById('experience');
function showExperience(){login.hidden=true;experience.hidden=false;location.hash='inicio';window.scrollTo(0,0);}
document.getElementById('login-form').addEventListener('submit',event=>{event.preventDefault();event.currentTarget.reset();showExperience();});
document.getElementById('logout').addEventListener('click',()=>{experience.hidden=true;login.hidden=false;simulatedPosition=0;nav.classList.remove('open');menu.setAttribute('aria-expanded','false');history.replaceState(null,'',location.pathname);window.scrollTo(0,0)});
const menu=document.getElementById('menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.addEventListener('click',event=>{if(event.target.closest('a')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
const dialog=document.getElementById('info-dialog');
document.querySelectorAll('[data-dialog]').forEach(button=>button.addEventListener('click',()=>{const recover=button.dataset.dialog==='recover';document.getElementById('dialog-title').textContent=recover?'Recuperar acesso':'Atendimento IBITI';document.getElementById('dialog-text').textContent=recover?'Nesta prévia, não há envio de e-mail ou alteração de senha. A recuperação de acesso será conectada ao serviço de autenticação da IBITI.':'Nesta prévia, o canal de atendimento ainda não está integrado. A experiência final utilizará o canal definido pela IBITI.';dialog.showModal()}));
document.querySelectorAll('.dialog-close,.dialog-close-bottom').forEach(b=>b.addEventListener('click',()=>dialog.close()));
if(location.hash&&location.hash!=='#login'){login.hidden=true;experience.hidden=false;}

// A simulação fica apenas na memória da página; não envia ordens ou pagamentos.
let quantity=1,simulatedPosition=0;
const el=id=>document.getElementById(id);
const percent=v=>new Intl.NumberFormat('pt-BR',{style:'percent',maximumFractionDigits:2}).format(v);
function updateOffer(){
  el('quantity').textContent=quantity;
  el('quantity-minus').disabled=quantity<=1;
  el('quantity-plus').disabled=quantity>=TOKENOMICS.maxExternalPerHolder;
  el('offer-share').textContent=percent(quantity*TOKENOMICS.shareOfPool);
  el('offer-benefits').textContent=`${quantity*TOKENOMICS.benefitTotal} ao longo da Série`;
  el('offer-total').textContent=brl(quantity*TOKENOMICS.price);
}
el('quantity-minus').addEventListener('click',()=>{quantity=Math.max(1,quantity-1);updateOffer()});
el('quantity-plus').addEventListener('click',()=>{quantity=Math.min(TOKENOMICS.maxExternalPerHolder,quantity+1);updateOffer()});
el('start-purchase').addEventListener('click',()=>{
  el('summary-quantity').textContent=quantity;
  el('summary-share').textContent=percent(quantity*TOKENOMICS.shareOfPool);
  el('summary-benefits').textContent=`${quantity*TOKENOMICS.benefitTotal} na Série`;
  el('summary-cost').textContent=brl(quantity*TOKENOMICS.benefitCost);
  el('summary-use').textContent=brl(quantity*TOKENOMICS.benefitUse);
  el('summary-total').textContent=brl(quantity*TOKENOMICS.price);
  el('purchase-ack').checked=false;
  el('simulate-payment').disabled=true;
  el('checkout-review').hidden=false;
  el('checkout-success').hidden=true;
  el('checkout-dialog').showModal();
});
document.querySelectorAll('[data-method]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-method]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button))});
  el('payment-name').textContent=button.dataset.method;
  el('payment-description').textContent=button.dataset.method==='PIX'?'Na experiência final, você terá um QR Code e um código copia e cola para concluir o pagamento.':'Na experiência final, os dados do cartão serão informados em um ambiente de pagamento seguro. Nenhum parcelamento foi definido nesta prévia.';
}));
el('purchase-ack').addEventListener('change',()=>el('simulate-payment').disabled=!el('purchase-ack').checked);
el('simulate-payment').addEventListener('click',()=>{
  simulatedPosition=quantity;
  el('checkout-review').hidden=true;
  el('checkout-success').hidden=false;
  el('view-position').focus();
});
function openWallet(){
  el('wallet-empty').hidden=simulatedPosition>0;
  el('wallet-position').hidden=!simulatedPosition;
  el('position-quantity').textContent=simulatedPosition;
  el('position-value').textContent=brl(simulatedPosition*TOKENOMICS.price);
  el('position-benefits').textContent=`${simulatedPosition*TOKENOMICS.benefitTotal} · ${simulatedPosition*TOKENOMICS.benefitPerYear} por ano`;
  el('wallet-dialog').showModal();
}
el('open-wallet').addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');openWallet()});
el('view-position').addEventListener('click',()=>{el('checkout-dialog').close();openWallet()});
el('wallet-buy').addEventListener('click',()=>{el('wallet-dialog').close();location.hash='aquisicao'});
document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>el(button.dataset.close).close()));
updateOffer();
