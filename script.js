const audio = document.getElementById("audio");
const btn = document.getElementById("audioBtn");

// Ambil Nama Tamu dari URL (?to=Nama)
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('to');
if (nama) {
    document.getElementById("namaTamu").innerText = nama;
}

function bukaUndangan() {
    // Sembunyikan Cover dengan halus
    const cover = document.getElementById("cover");
    cover.style.transition = "0.5s";
    cover.style.opacity = "0";
    audio.currentTime = 25;

    setTimeout(() => {
        cover.style.display = "none";
        const content = document.getElementById("content");
        content.style.display = "block";
        
        // Putar Audio
        audio.play().catch(error => console.log("Autoplay dicegah browser"));
        btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }, 500);
}

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audio.pause();
        btn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}