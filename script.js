function showAlert(imageDesc) {
    alert("Anda mengklik gambar: " + imageDesc);
}

function goToHome() {
    const intro = document.getElementById("intro-screen");
    intro.classList.add("fade-out");

    // Sembunyikan elemen setelah animasi selesai (1 detik)
    setTimeout(() => {
        intro.style.display = "none";
    }, 1000);
}
