import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeUpdate, 1000));
const currentTime = localStorage.getItem("videoplayer-current-time");

if (currentTime) {
    player.setCurrentTime(currentTime);
}


function timeUpdate(time){
    localStorage.setItem("videoplayer-current-time", time.seconds)
    console.log(time.seconds)
}
