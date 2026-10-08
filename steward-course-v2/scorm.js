/* SCORM 1.2 bridge — JAM Event Steward: Code of Conduct in Action
   Discovers the LMS API up the frame chain; no-ops gracefully when
   launched standalone (GitHub Pages, local file, etc.). */
(function(){
  "use strict";
  function findAPI(win){
    var hops=0;
    try{
      while(win && hops<10){
        if(win.API) return win.API;
        if(win.parent===win) break;
        win=win.parent; hops++;
      }
    }catch(e){/* cross-origin wall — stop looking */}
    try{ if(window.opener) {
      var o=window.opener, n=0;
      while(o && n<10){ if(o.API) return o.API; if(o.parent===o) break; o=o.parent; n++; }
    }}catch(e){}
    return null;
  }
  var api=findAPI(window);
  var connected=false;
  window.SCORM={
    present: !!api,
    init: function(){
      if(!api) return false;
      try{
        connected = (api.LMSInitialize("")==="true" || api.LMSInitialize("")===true);
        if(connected){
          var st=api.LMSGetValue("cmi.core.lesson_status");
          if(st==="not attempted"||st==="unknown"||st===""){
            api.LMSSetValue("cmi.core.lesson_status","incomplete");
            api.LMSCommit("");
          }
        }
      }catch(e){ connected=false; }
      return connected;
    },
    get: function(k){ try{ return connected ? String(api.LMSGetValue(k)) : ""; }catch(e){ return ""; } },
    set: function(k,v){ try{ if(connected) api.LMSSetValue(k,String(v)); }catch(e){} },
    commit: function(){ try{ if(connected) api.LMSCommit(""); }catch(e){} },
    finish: function(suspend){
      if(!connected) return;
      try{
        if(suspend) api.LMSSetValue("cmi.core.exit","suspend");
        api.LMSCommit("");
        api.LMSFinish("");
      }catch(e){}
      connected=false;
    }
  };
})();
