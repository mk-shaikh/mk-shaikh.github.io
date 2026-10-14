/* Interactivity lab shell: the SMP 2.1 bar, title strip and card around one trial interaction. */
var LAB={xp:0};
function $(q,r){return (r||document).querySelector(q);}
function $$(q,r){return [].slice.call((r||document).querySelectorAll(q));}
function el(html){var t=document.createElement('template');t.innerHTML=html.trim();return t.content.firstChild;}
function icon(name,cls){var f=name==='wristband'?'custom-wristband.svg':'fluent-3d-'+name.replace(/ /g,'-')+'.png';
  return '<img class="ico '+(cls||'')+'" src="../assets/icons/'+f+'" alt="">';}
function fb(kind,head,body){return el('<div class="fb '+kind+'" role="status"><b class="h">'+head+'</b>'+(body||'')+'</div>');}
function addXp(n){LAB.xp+=n;var x=$('.bar .xp');if(x)x.textContent=LAB.xp+' XP';}
function shell(o){
  document.title=o.title+' – Interactivity lab';
  document.body.insertAdjacentHTML('afterbegin',
    '<header class="bar"><a class="pill" href="../">☰ All demos</a><span class="sp"></span><span class="xp">0 XP</span><img src="../assets/jam-training-white.png" alt="JAM Training"></header>'+
    '<div class="strip"><b>Your role, authority limits &amp; chain of command</b><span>Interactivity trial '+o.n+' of 6 · '+o.code+' · SMP 2.1 content</span></div>'+
    '<main class="wrap"><section class="card" id="card"><div class="crumb"><a href="../">‹ All demos</a> · '+o.where+'</div>'+
    '<p class="kicker">'+(o.kicker||'Your turn.')+'</p><h2>'+o.title+'</h2>'+(o.lead?'<p class="lead">'+o.lead+'</p>':'')+
    (o.task?'<div class="task">'+o.task+'</div>':'')+'<div id="stage"></div></section></main>');
  return $('#stage');
}
