(function(){
  const t=document.getElementById('toggle');
  let light=true; t.addEventListener('click',()=>{light=!light; if(light){ document.documentElement.style.setProperty('--bg','#fff'); document.documentElement.style.setProperty('--text','#111'); t.textContent='●'; } else { document.documentElement.style.setProperty('--bg','#1a1a1a'); document.documentElement.style.setProperty('--text','#eee'); t.textContent='○'; } });
})();