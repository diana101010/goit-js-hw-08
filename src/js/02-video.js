var player = new Vimeo.Player('vimeo-player');
var currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(parseFloat(currentTime));
}
player.on(
  'timeupdate',
  _.throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
