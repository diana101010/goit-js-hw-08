var e=new Vimeo.Player("vimeo-player"),t=localStorage.getItem("videoplayer-current-time");t&&e.setCurrentTime(parseFloat(t)),e.on("timeupdate",_.throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));
//# sourceMappingURL=02-video.859be953.js.map
