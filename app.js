document.addEventListener('keydown', (event) => {
    document.getElementById('which').textContent = event.which;
    document.getElementById('key').textContent = event.key.toUpperCase();
    document.getElementById('code').textContent = event.code;
    document.getElementById('big-key').textContent = event.which;
    document.getElementById('message').style.display = "none";
});