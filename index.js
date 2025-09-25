const eventDate = new Date('2026-12-05T00:00:00').getTime();
const cdEl = document.getElementById('countdown');
function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;
    if (distance < 0) {
    cdEl.innerHTML = "Le jour est arrivé !";
    clearInterval(interval);
    return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);
    cdEl.innerHTML = `${days}j ${hours}h ${mins}m ${secs}s`;
}
const interval = setInterval(updateCountdown, 1000);
updateCountdown();