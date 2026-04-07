document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('video.speed-2x').forEach(function (v) {
        v.addEventListener('loadedmetadata', function () { v.playbackRate = 2.0; });
        v.addEventListener('play', function () { v.playbackRate = 2.0; });
    });

    document.querySelectorAll('#indomain-tabs li').forEach(function (tab) {
        tab.addEventListener('click', function () {
            var task = this.getAttribute('data-task');
            document.querySelectorAll('#indomain-tabs li').forEach(function (t) {
                t.classList.remove('is-active');
            });
            document.querySelectorAll('.indomain-content').forEach(function (c) {
                c.style.display = 'none';
            });
            this.classList.add('is-active');
            document.getElementById('indomain-' + task).style.display = 'block';
        });
    });
});
