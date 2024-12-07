document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('animateBox');
    let position = 0;
    let direction = 1;

    function animate() {
        position += direction;
        box.style.left = position + 'px';

        if (position >= window.innerWidth - box.offsetWidth || position <= 0) {
            direction *= -1;
        }

        requestAnimationFrame(animate);
    }

    animate();
});