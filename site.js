(function(){
  var storageKey='au-theme';
  function getSaved(){ try{return localStorage.getItem(storageKey)}catch(e){return null} }
  function save(v){ try{localStorage.setItem(storageKey,v)}catch(e){} }
  function preferred(){ return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
  function setTheme(theme){
    document.documentElement.setAttribute('data-theme',theme);
    save(theme);
    document.querySelectorAll('.theme-toggle').forEach(function(btn){
      btn.textContent=theme==='dark'?'☀':'☾';
      var label=theme==='dark'?'Use light mode':'Use dark mode';
      btn.setAttribute('aria-label',label); btn.setAttribute('title',label);
    });
  }
  var initial=getSaved()||preferred();
  document.documentElement.setAttribute('data-theme',initial);
  function init(){
    var existing=document.querySelector('.theme-toggle');
    if(!existing){
      var nav=document.querySelector('.navbar .navbar-nav:last-of-type')||document.querySelector('.navbar .navbar-nav');
      if(nav){
        var wrap=document.createElement('li'); wrap.className='nav-item theme-nav-item';
        var btn=document.createElement('button'); btn.className='theme-toggle'; btn.type='button';
        wrap.appendChild(btn); nav.appendChild(wrap); existing=btn;
      }
    }
    document.querySelectorAll('.theme-toggle').forEach(function(btn){
      if(btn.dataset.bound!=='1'){
        btn.dataset.bound='1';
        btn.addEventListener('click',function(){ setTheme(document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark'); });
      }
    });
    setTheme(document.documentElement.getAttribute('data-theme')||initial);
    var file=(location.pathname.split('/').pop()||'index.html').replace(/\.html$/,'');
    var active=document.querySelector('.navbar .nav-'+file);
    if(active){document.querySelectorAll('.navbar .nav-link').forEach(function(a){a.classList.remove('active');a.removeAttribute('aria-current')});active.classList.add('active');active.setAttribute('aria-current','page');}
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
