
class PortfolioApp {
    constructor() {
        // ---------------------------------------
        // Project Data
        // ---------------------------------------
        this.projects = [{
            id: "mosfet",
            title: "Layout Amplifier Common-Source NMOS",
            category: "PCB Design",
            images: ["assets/mosfet1.jpg", "assets/mosfet2.png", "assets/mosfet3.png", "assets/mosfet4.png", "assets/mosfet5.png"],
            short: "Desain, Simulasi, dan Perencanaan Layout Amplifier Common-Source NMOS.",
            codeLink: "https://github.com/username/filter-lp",
            reportLink: "https://drive.google.com/file/d/1nsGvwYg8U233ybEwNLwxoib-6zkeM_5Q/view?usp=sharing",
            detail: `
                <strong>Tujuan:</strong> Proyek ini mencakup proses perancangan, validasi kinerja melalui simulasi, dan perencanaan implementasi fisik untuk sebuah rangkaian Common-Source Amplifier menggunakan transistor NMOS IRFZ43N.-CNN.<br><br>
                <strong>Tools:</strong>  LTSpice, KiCad.<br><br>
                <strong>Hasil:</strong> Proyek ini telah berhasil menyelesaikan tahap perancangan dan validasi virtual untuk rangkaian Common-Source Amplifier. 
            `,
            skills: ["PCB Design"]
        }, {
            id: "Ai-LstmCnn",
            title: "Deteksi Fibrilasi Atrium dengan LSTM dan 1D-CNN",
            category: "Artificial Intelegent",
            images: ["assets/lstm1.png", "assets/cnn1.png"],
            short: "Mengklasifikasikan sinyal EKG dari dataset yang tersedia secara publik, dengan fokus pada deteksi fibrilasi atrium menggunakan LSTM dan 1D-CNN.",
            codeLink: "https://github.com/username/filter-lp",
            reportLink: "https://drive.google.com/file/d/1tcWV9MWoatwath5SZFMAUKT3IBMsxGWP/view?usp=sharing",
            detail: `
                <strong>Tujuan:</strong> Mengklasifikasikan sinyal EKG dari dataset yang tersedia secara publik, dengan fokus pada deteksi fibrilasi atrium menggunakan LSTM dan 1D-CNN.<br><br>
                <strong>Tools:</strong>  Google Colab.<br><br>
                <strong>Hasil:</strong> Model LSTM memiliki keunggulan dalam menangani karakteristik sekuensial sinyal EKG, terutama dalam mengenali ketergantungan temporal panjang.
            `,
            skills: ["Python"]
        }, {
            id: "LPF",
            title: "Analisis Rangkaian Low-Pass Filter Aktif Orde Satu ",
            category: "PCB Design",
            images: ["assets/LPF2.jpg", "assets/LPF1.png", "assets/LPF3.jpg"],
            short: "Mendesain dan mengimplementasikan rangkaian LPF orde 1 untuk memenuhi kriteria yang diinginkan.",
            codeLink: "https://github.com/username/3d-prosthesis",
            reportLink: "https://drive.google.com/file/d/1qScpsexzc52iu3nkEvF-mMJZv2RIhp5j/view?usp=sharing",
            detail: `
                <strong>Tujuan:</strong> esain dan mengimplementasikan rangkaian LPF orde 1 untuk memenuhi kriteria yang diinginkan.<br><br>
                <strong>Tools:</strong>  LTSpice, Osiloskop, Signal Generator.<br><br>
                <strong>Hasil:</strong> Berdasarkan hasil perancangan, simulasi, dan implementasi, dapat disimpulkan bahwa rangkaian low-pass filter aktif orde satu menggunakan op-amp LM741 sebagai buffer berhasil bekerja sesuai dengan teori.
            `,
            skills: ["PCB Design"]
        }];

        // ---------------------------------------
        // Certificate Data
        // ---------------------------------------
        this.certificates = [{
            id: "cert-kmteti25",
            title: "Staff of Three Month - Adkesma",
            issuer: "KMTETI",
            date: "Maret-Mei 2025",
            image: "assets/KMTETI.jpg",
            link: ""
        }, {
            id: "cert-dc",
            title: "Biomedical Image Analysis in Python",
            issuer: "Datacamp",
            date: "September 2025",
            image: "assets/camp1.jpg",
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/e52bf958f96f3ba25cc9162b5f54fcb5542420c3?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa&utm_source=copylink"
        }, {
            id: "cert-tc",
            title: "Subkoordinator Multimedia",
            issuer: "Technocorner",
            date: "Juni 2025",
            image: "assets/tc1.jpg",
            link: ""
        }, {
            id: "cert-fi",
            title: "Staff Divisi E-sport",
            issuer: "FindIT",
            date: "Mei 2025",
            image: "assets/Fi.jpg",
            link: ""
        }, {
            id: "cert-lbi",
            title: "Member Beasiswa Pelatihan KTI",
            issuer: "latar Belakang Id",
            date: "Januari 2025",
            image: "assets/Latarbelakangid.png",
            link: ""

        }];

        this.init();
    }

    // =========================================================
    // Initialization
    // =========================================================
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.renderProjects();
        this.renderCertificates();
        this.setupNavigation();
        this.setupSmoothScrolling();
        this.setupActiveNavLinks();
        this.setupMobileNavigation();
        this.setupModal();
        this.setupCertificateModal();
        this.setupProjectCarousel();
        this.setupCertificateCarousel(); 
    }

    // =========================================================
    // Project Rendering
    // =========================================================
    renderProjects() {
        const container = document.getElementById('projects-container');
        if (!container) return;

        container.innerHTML = '';
        this.projects.forEach((project) => {
            const card = document.createElement('div');
            card.className = 'project-card';

            let imagesHTML = '';
            project.images.forEach((img, idx) => {
                imagesHTML += `
                    <div class="carousel-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                        <img src="${img}" alt="${project.title} image ${idx + 1}" loading="lazy" />
                    </div>
                `;
            });

            card.innerHTML = `
                <div class="carousel" data-project="${project.id}">
                    ${imagesHTML}
                    <!-- REVISI: Mengganti karakter panah dengan tag ikon -->
                    <button class="carousel-prev"><i class="bi bi-chevron-left"></i></button>
                    <button class="carousel-next"><i class="bi bi-chevron-right"></i></button>
                </div>
                <div class="card-content">
                    <h3>${project.title}</h3>
                    <p>${project.short}</p>
                    <div class="project-actions">
                        <button class="btn btn--primary btn--sm detail-btn" data-id="${project.id}">
                          <i class="bi bi-search"></i>
                          Lihat Detail
                        </button>
                        <a href="${project.codeLink}" target="_blank" class="btn btn--secondary btn--sm">
                          <i class="bi bi-github"></i>
                          View Code
                        </a>
                    </div>
                </div>
            `;

            container.appendChild(card);
            this.initCarousel(card.querySelector('.carousel'));
        });

        document.querySelectorAll('.detail-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                const id = e.target.dataset.id;
                this.openModal(id);
            });
        });
    }

    // =========================================================
    // Certificate Rendering
    // =========================================================
    renderCertificates() {
        const container = document.getElementById('certificates-container');
        if (!container) return;

        container.innerHTML = this.certificates.map(cert => `
            <div class="certificate-card">
                <img src="${cert.image}" alt="${cert.title}" class="certificate-img" loading="lazy">
                <div class="certificate-body">
                    <h3 class="certificate-title">${cert.title}</h3>
                    <p class="certificate-issuer">${cert.issuer} — ${cert.date}</p>
                    <button class="btn btn--primary btn--sm" onclick="app.openCertificateModal('${cert.id}')">
                      <i class="bi bi-patch-check-fill"></i>
                      View Certificate
                    </button>
                </div>
            </div>
        `).join('');
    }

    // =========================================================
    // Carousel Setup (per project)
    // =========================================================
    initCarousel(carouselEl) {
        const slides = carouselEl.querySelectorAll('.carousel-slide');
        const prevBtn = carouselEl.querySelector('.carousel-prev');
        const nextBtn = carouselEl.querySelector('.carousel-next');
        let current = 0;

        const showSlide = (idx) => {
            slides.forEach((s, i) => s.classList.toggle('active', i === idx));
        };

        prevBtn.addEventListener('click', () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });

        nextBtn.addEventListener('click', () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });

        carouselEl.addEventListener('mouseenter', () => {
            document.onkeydown = (e) => {
                if (e.key === 'ArrowLeft') prevBtn.click();
                if (e.key === 'ArrowRight') nextBtn.click();
            };
        });

        carouselEl.addEventListener('mouseleave', () => {
            document.onkeydown = null;
        });
    }

    // =========================================================
    // Project Modal
    // =========================================================
    setupModal() {
        const modal = document.createElement('div');
        modal.id = 'project-modal';
        modal.className = 'modal hidden';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" aria-label="Close modal">
                  <i class="bi bi-x-lg"></i>
                </button>
                <div class="modal-body">
                    <h2 id="modal-title"></h2>
                    <div id="modal-carousel" class="modal-carousel"></div>
                    <div id="modal-detail" class="modal-detail"></div>
                    <div id="modal-skills" class="modal-skills"></div>
                    <div class="modal-links">
                        <a id="modal-code" href="#" target="_blank" class="btn btn--secondary">
                          <i class="bi bi-github"></i>
                          View Code
                        </a>
                        <a id="modal-report" href="#" target="_blank" class="btn btn--primary">
                          <i class="bi bi-file-earmark-text-fill"></i>
                          View Report
                          </a>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        modal.querySelector('.modal-close').addEventListener('click', () => modal.classList.add('hidden'));
    }

    openModal(id) {
        const project = this.projects.find(p => p.id === id);
        if (!project) return;

        const modal = document.getElementById('project-modal');
        modal.querySelector('#modal-title').textContent = project.title;
        modal.querySelector('#modal-detail').innerHTML = project.detail;

         const modalCarouselContainer = modal.querySelector('#modal-carousel');
    
        let imagesHTML = project.images.map((img, idx) => `
            <div class="carousel-slide ${idx === 0 ? 'active' : ''}">
                <img src="${img}" alt="${project.title} image ${idx + 1}" class="modal-img" loading="lazy">
            </div>
        `).join('');

        modalCarouselContainer.innerHTML = `
            ${imagesHTML}
            <button class="carousel-prev"><i class="bi bi-chevron-left"></i></button>
            <button class="carousel-next"><i class="bi bi-chevron-right"></i></button>
        `;

        const slides = modalCarouselContainer.querySelectorAll('.carousel-slide');
        const prevBtn = modalCarouselContainer.querySelector('.carousel-prev');
        const nextBtn = modalCarouselContainer.querySelector('.carousel-next');
        let current = 0;

        const showSlide = (idx) => {
            slides.forEach((s, i) => s.classList.toggle('active', i === idx));
        };

        prevBtn.addEventListener('click', () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });

        nextBtn.addEventListener('click', () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });

        const skillsEl = modal.querySelector('#modal-skills');
        skillsEl.innerHTML = project.skills ?
            project.skills.map(s => `<span class="tag">${s}</span>`).join('') :
            '';

        const codeLink = modal.querySelector('#modal-code');
        const reportLink = modal.querySelector('#modal-report');
        codeLink.href = project.codeLink || '#';
        reportLink.href = project.reportLink || '#';
        reportLink.style.display = project.reportLink ? 'inline-flex' : 'none';

        modal.classList.remove('hidden');
    }

    // =========================================================
    // Certificate Modal
    // =========================================================
    openCertificateModal(id) {
        const cert = this.certificates.find(c => c.id === id);
        if (!cert) return;

        const modal = document.getElementById('certificate-modal');
        const title = modal.querySelector('#cert-modal-title');
        const image = modal.querySelector('#cert-modal-image');
        const issuer = modal.querySelector('#cert-modal-issuer');
        const linkContainer = modal.querySelector('#cert-modal-link');

        title.textContent = cert.title;
        image.src = cert.image;
        image.alt = cert.title;
        issuer.textContent = `${cert.issuer} — ${cert.date}`;

        if (cert.link && cert.link.trim() !== '') {
            linkContainer.innerHTML = `
              <a href="${cert.link}" target="_blank" class="btn btn--primary">
                <i class="bi bi-box-arrow-up-right"></i>
                Open Certificate Link
              </a>
            `;
        } else {
            linkContainer.innerHTML = `
                <span class="no-link">Certificate link not available</span>
            `;
        }

        modal.classList.remove('hidden');
    }

    setupCertificateModal() {
        const modal = document.getElementById('certificate-modal');
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    }

// =========================================================
// Project Carousel
// =========================================================
setupProjectCarousel() {
    const container = document.getElementById('projects-container');
    const prevBtn = document.getElementById('project-carousel-prev');
    const nextBtn = document.getElementById('project-carousel-next');

    if (!container || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    
    const updateCarousel = () => {
        const slides = container.querySelectorAll('.project-card');
        if (slides.length === 0) return;

        const slideWidth = slides[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(container).gap);
        const totalSlideWidth = slideWidth + gap;
        
        container.style.transform = `translateX(-${currentIndex * totalSlideWidth}px)`;

        prevBtn.disabled = currentIndex === 0;
        
        let slidesInView = Math.round(container.parentElement.offsetWidth / totalSlideWidth);
        nextBtn.disabled = currentIndex >= slides.length - slidesInView;
    };

    nextBtn.addEventListener('click', () => {
        const slides = container.querySelectorAll('.project-card');
        let slidesInView = Math.round(container.parentElement.offsetWidth / (slides[0].offsetWidth + parseFloat(getComputedStyle(container).gap)));
        
        if (currentIndex < slides.length - slidesInView) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    setTimeout(updateCarousel, 100); 

    window.addEventListener('resize', () => {
        currentIndex = 0; 
        updateCarousel();
    });
}    

// =========================================================
// Certificate Carousel
// =========================================================
    setupCertificateCarousel() {
        const container = document.getElementById('certificates-container');
        const prevBtn = document.getElementById('cert-carousel-prev');
        const nextBtn = document.getElementById('cert-carousel-next');

        if (!container || !prevBtn || !nextBtn) return;

        let currentIndex = 0;
        
        const updateCarousel = () => {
            const slides = container.querySelectorAll('.certificate-card');
            if (slides.length === 0) return;

            const slideWidth = slides[0].offsetWidth;
            const gap = parseFloat(getComputedStyle(container).gap);
            const totalSlideWidth = slideWidth + gap;
            
            container.style.transform = `translateX(-${currentIndex * totalSlideWidth}px)`;

            prevBtn.disabled = currentIndex === 0;
            
            let slidesInView = Math.round(container.parentElement.offsetWidth / totalSlideWidth);
            nextBtn.disabled = currentIndex >= slides.length - slidesInView;
        };

        nextBtn.addEventListener('click', () => {
            const slides = container.querySelectorAll('.certificate-card');
            let slidesInView = Math.round(container.parentElement.offsetWidth / (slides[0].offsetWidth + parseFloat(getComputedStyle(container).gap)));
            
            if (currentIndex < slides.length - slidesInView) {
                currentIndex++;
                updateCarousel();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
        
        setTimeout(updateCarousel, 100); 

        window.addEventListener('resize', () => {
            currentIndex = 0; 
            updateCarousel();
        });
    }

    // =========================================================
    // Navigation & Scrolling
    // =========================================================
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupActiveNavLinks() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav__link');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(l => l.classList.remove('active-link'));
                    const id = entry.target.getAttribute('id');
                    const active = document.querySelector(`.nav__link[href='#${id}']`);
                    if (active) {
                        active.classList.add('active-link');
                    }
                }
            });
        }, {
            threshold: 0.5
        });

        sections.forEach(sec => observer.observe(sec));
    }

    setupMobileNavigation() {
        const toggle = document.getElementById('nav-toggle');
        const menu = document.getElementById('nav-menu');

        if (!toggle || !menu) return;

        toggle.addEventListener('click', () => menu.classList.toggle('show'));
    }

    setupNavigation() {
        const header = document.getElementById('header');
        if (!header) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// =========================================================
//  Initialize Application
// =========================================================
const app = new PortfolioApp();