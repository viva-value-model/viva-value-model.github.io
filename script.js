document.addEventListener('DOMContentLoaded', function () {
    // Tab switching
    function setupTabs(tabId, contentClass, prefix) {
        document.querySelectorAll('#' + tabId + ' li').forEach(function (tab) {
            tab.addEventListener('click', function () {
                var task = this.getAttribute('data-task');
                document.querySelectorAll('#' + tabId + ' li').forEach(function (t) {
                    t.classList.remove('is-active');
                });
                document.querySelectorAll('.' + contentClass).forEach(function (c) {
                    c.style.display = 'none';
                });
                this.classList.add('is-active');
                var content = document.getElementById(prefix + task);
                if (content) content.style.display = 'block';
            });
        });
    }

    setupTabs('indomain-tabs', 'indomain-content', 'indomain-');
    setupTabs('realworld-tabs', 'realworld-content', 'realworld-');

    // Video controls: play/pause, seek, speed
    document.querySelectorAll('.video-card').forEach(function (card) {
        var video = card.querySelector('video');
        var playBtn = card.querySelector('.ctrl-play');
        var seekBtns = card.querySelectorAll('.ctrl-seek');
        var speedSel = card.querySelector('.ctrl-speed');

        if (!video) return;

        if (playBtn) {
            playBtn.addEventListener('click', function () {
                if (video.paused) {
                    video.play();
                    playBtn.innerHTML = '❚❚ Pause';
                } else {
                    video.pause();
                    playBtn.innerHTML = '▶ Play';
                }
            });
        }

        seekBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var sec = parseFloat(btn.getAttribute('data-seek'));
                if (!isNaN(sec) && video.duration) {
                    video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + sec));
                }
            });
        });

        if (speedSel) {
            speedSel.addEventListener('change', function () {
                video.playbackRate = parseFloat(speedSel.value);
            });
        }

        video.addEventListener('ended', function () {
            if (playBtn) playBtn.innerHTML = '▶ Play';
        });
    });
});
