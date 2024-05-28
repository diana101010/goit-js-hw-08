const _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  _.throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
