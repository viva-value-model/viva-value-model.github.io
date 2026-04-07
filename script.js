document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#task-tabs li').forEach(function (tab) {
        tab.addEventListener('click', function () {
            var task = this.getAttribute('data-task');
            document.querySelectorAll('#task-tabs li').forEach(function (t) {
                t.classList.remove('is-active');
            });
            document.querySelectorAll('.task-content').forEach(function (c) {
                c.style.display = 'none';
            });
            this.classList.add('is-active');
            document.getElementById('tab-' + task).style.display = 'block';
        });
    });
});
