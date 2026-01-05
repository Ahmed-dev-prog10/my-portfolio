   document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.getElementById('navbarNav');
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse)
        || new bootstrap.Collapse(navbarCollapse, { toggle: false });

      bsCollapse.hide();
    });
  });
 
 // Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    

    const scrollBtn = document.getElementById('scrollTopBtn');
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
// switch  Ar/En
function switchLang() {
  const current = document.documentElement.lang;
  if (current === "en") {
    window.location.href = "home_ar.html";
  } else {
    window.location.href = "home.html";
  }
}

// Scroll to top
document.getElementById('scrollTopBtn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

/* Draggable Hero Card */
const card = document.getElementById('heroCard');
let isDragging = false;
let offsetX, offsetY;
const initialPosition = { top: card.offsetTop, left: card.offsetLeft };

card.addEventListener('mousedown', function(e){
    isDragging = true;
    offsetX = e.clientX - card.offsetLeft;
    offsetY = e.clientY - card.offsetTop;
    card.style.cursor = 'grabbing';
    // Stop swing while dragging
    card.style.animation = 'none';
});

document.addEventListener('mousemove', function(e){
    if(isDragging){
        card.style.left = `${e.clientX - offsetX}px`;
        card.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', function(){
    if(isDragging){
        isDragging = false;
        card.style.cursor = 'grab';
        // return to initial position
        card.style.left = `${initialPosition.left}px`;
        card.style.top = `${initialPosition.top}px`;
        // Resume swing
        card.style.animation = 'swing 3s ease-in-out infinite';
    }
});
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close-modal");

function showImage(src) {
  modal.style.display = "flex";
  modalImg.src = src;
  document.body.style.overflow = "hidden"; // يمنع اسكرول
}

// إغلاق
closeBtn.onclick = closeModal;
modal.onclick = (e) => { if (e.target === modal) closeModal(); };

function closeModal() {
  modal.style.display = "none";
  modalImg.src = "";
  document.body.style.overflow = "auto";
}
// Services animation
const serviceCards = document.querySelectorAll('.service-card');

const servicesObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2
});

serviceCards.forEach(card => servicesObserver.observe(card));
 



document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.course-card');

  // Assign stagger delay
  cards.forEach((card, i) => {
    const delay = i * 0.22;
    card.style.setProperty('--delay', delay + 's');
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

      // ظهر داخل الشاشة
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } 
      
      // خرج من الشاشة
      else {
        entry.target.classList.remove('visible');
      }

    });
  }, observerOptions);

  cards.forEach(card => observer.observe(card));
});


document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".progress-item");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            const bar = entry.target.querySelector(".fill");
            const val = entry.target.getAttribute("data-value");

            if (entry.isIntersecting) {
                // 💡 الحالة 1: العنصر مرئي (لأسفل)
                // يتم ملء الشريط إلى القيمة المحددة
                setTimeout(() => {
                    bar.style.width = val + "%";
                }, 200);

                // **ملاحظة:** تم حذف obs.unobserve(entry.target);
                
            } else {
                // 💡 الحالة 2: العنصر غير مرئي (لأعلى أو لأسفل بعيدًا عنه)
                // يتم إعادة ضبط الشريط إلى الصفر لتجهيزه للحركة التالية
                bar.style.width = "0%";
            }
        });
    }, { threshold: 0.35 });

    items.forEach(i => observer.observe(i));
});

//       project//
const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
});

cards.forEach(c => observer.observe(c));
// فتح الفيديو في المودال (لروابط اليوتيوب)
function openVideo(element) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalVideo');
    let videoSrc = element.getAttribute('data-src');

    // التأكد من أن الرابط يحتوي على autoplay
    if (!videoSrc.includes('autoplay=1')) {
        const separator = videoSrc.includes('?') ? '&' : '?';
        videoSrc = videoSrc + separator + "autoplay=1&mute=1";
    }

    iframe.src = videoSrc;
    modal.style.display = "flex";
}

// وظيفة إغلاق الفيديو
function closeVideo() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalVideo');
    modal.style.display = "none";
    iframe.src = ""; // مهم جداً لإيقاف الصوت والفيديو
}

// زر تكبير الشاشة (يعمل مع الـ iframe)
function toggleFullscreen() {
    const iframe = document.getElementById('modalVideo');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    }
}
function openDemoModal(e) {
  e.preventDefault(); // يمنع التنقل
  document.getElementById("demoModal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeDemoModal() {
  document.getElementById("demoModal").style.display = "none";
  document.body.style.overflow = "auto";
}



document.getElementById("year").textContent = new Date().getFullYear();
