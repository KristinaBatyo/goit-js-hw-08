import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (evt) {
    localStorage.setItem('videoplayer-current-time', evt.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

if (localStorage.getItem('videoplayer-current-time')) {
    const currenTime = JSON.parse(
        localStorage.getItem('videoplayer-current-time')
    );
    player.setCurrentTime(currenTime);
}