// Inisialisasi library Animasi AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800, // Kecepatan animasi (milidetik)
        once: true,    // Animasi hanya berjalan sekali ketika di-scroll
        offset: 100    // Jarak memicu animasi dari viewport
    });
});

// Efek Aktif Navbar Otomatis Berdasarkan Posisi Scroll (Scrollspy Sederhana)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Memberikan offset 150px agar deteksi navigasi lebih akurat sebelum mencapai elemen
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Penanganan Form Kontak Sederhana (Placeholder Submit Action)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Mencegah muat ulang halaman asli

        // Mengambil data input
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulasi notifikasi sukses (Siap diintegrasikan dengan PHP mailer / Service Form)
        alert(`Terima kasih ${name}! Pesan Anda berhasil disimulasikan terkirim.\n\nDetail:\nEmail: ${email}\nPesan: ${message}`);
        
        // Reset form
        contactForm.reset();
    });
}