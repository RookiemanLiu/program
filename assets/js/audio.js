window.onload = function() {
    /* 获取对象 */
    var pControl = document.querySelector('.play-control');
    var audio = document.querySelector('audio');
    var play = document.querySelector('.play-start');
    var pause = document.querySelector('.play-pause');
    var current = document.querySelector('.current');
    var total = document.querySelector('.total');
    var progress = document.querySelector('.play-progress');
    var playBar = document.querySelector('.play-bar');
    var progressBar = document.querySelector('.progress-bar');
    var playDot = document.querySelector('.play-dot');
    var bool = true;

    /* 音乐的播放与暂停 */
    pause.onclick = function() {
        if (audio.paused) {
            audio.play();
            this.classList.remove('play-pause');
            this.classList.add('play-start');
        } else {
            audio.pause();
            this.classList.remove('play-start');
            this.classList.add('play-pause');
        }
    }

    /* 音乐的当前时间和总时间 */
    current.innerHTML = formatTime(audio.currentTime);
    audio.ontimeupdate = function() {
        current.innerHTML = formatTime(audio.currentTime);

        var percent = audio.currentTime / audio.duration;

        progressBar.style.width = percent * 100 + '%';
        playDot.style.left = (playBar.offsetWidth * percent - playDot.offsetWidth / 2) / playBar.offsetWidth * 100 + '%';
    }

    total.innerHTML = formatTime(audio.duration);
    audio.ondurationchange = function() {
        total.innerHTML = formatTime(audio.duration);
    }

    /* 时间的格式化 */
    function formatTime(time) {
        var time = Math.floor(time);
        var minute = Math.floor(time / 60);
        if (minute < 10) {
            minute = '0' + minute;
        }
        var second = time % 60;
        if (second < 10) {
            second = '0' + second;
        }

        return minute + ':' + second;
    }

    /* 进度条上的点击 */
    playBar.onclick = function (e) {
        var distance = e.pageX - progress.offsetLeft - pControl.offsetLeft;
        var percent = distance / this.offsetWidth;

        audio.currentTime = audio.duration * percent;

        playDot.style.left = distance + 'px';
        progressBar.style.width = distance  + 'px';
    }

    /* 进度条上小球的拖动 */
    playDot.onmousedown = function(ent) {
        var lineWidth = progressBar.offsetWidth;
        var startX = ent.pageX;

        window.onmousemove = function(me) {
            var x = me.pageX - startX;

            var percent = (lineWidth + x) / progress.offsetWidth;

            audio.currentTime = audio.duration * percent;
        }

        window.onmouseup = function() {
            window.onmousemove = null;
        }

    }
}