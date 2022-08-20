!function(){var e=document.querySelector("#vimeo-player"),t=new Player(e);t.on("timeupdate",throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds),console.log(e.seconds)}),1e3));var o=localStorage.getItem("videoplayer-current-time");o&&t.setCurrentTime(o)}();
//# sourceMappingURL=index.6fad8121.js.map
