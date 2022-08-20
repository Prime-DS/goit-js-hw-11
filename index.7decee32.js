const e=document.querySelector("#vimeo-player"),t=new Player(e);t.on("timeupdate",throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds),console.log(e.seconds)}),1e3));const o=localStorage.getItem("videoplayer-current-time");o&&t.setCurrentTime(o);
//# sourceMappingURL=index.7decee32.js.map
