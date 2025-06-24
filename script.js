// 1. Data Arrays
const skills = [
  { icon: 'fab fa-html5', name: 'HTML5', info: 'Intermediate: Semantic markup, accessibility best practices, and modern HTML5 features.' },
  { icon: 'fab fa-css3-alt', name: 'CSS3', info: 'Intermediate: Flexbox, Grid, animations, and responsive design principles.' },
  { icon: 'fab fa-js', name: 'JavaScript', info: 'Intermediate: ES6+, DOM manipulation, async programming, and modern JS practices.' },
  { icon: 'fab fa-wordpress', name: 'WordPress', info: 'Advanced: Custom themes, plugin development, API integration, and admin panel optimization.' },
  { icon: 'fab fa-react', name: 'React', info: 'Starting Phase: Learning components, hooks, and state management.' },
  { icon: 'fab fa-node-js', name: 'Node.js', info: 'Starting Phase: Building APIs, automation tools, and server-side applications.' },
  { icon: 'fab fa-php', name: 'PHP', info: 'Intermediate: OOP, MVC patterns, and working with databases.' },
  { icon: 'fab fa-git-alt', name: 'Git', info: 'Intermediate: Version control, branching strategies, and collaboration workflows.' },
  { icon: 'fab fa-github', name: 'Github', info: 'Intermediate: Repository management, issues, and project collaboration.' },
  { icon: 'fab fa-js', name: 'jQuery', info: 'Intermediate: DOM manipulation, event handling, and jQuery plugins.' },
  { icon: 'fas fa-exchange-alt', name: 'AJAX', info: 'Intermediate: Asynchronous requests, API integration, and data handling.' }
];

const experiences = [
  {
    date: 'Oct 2023 - Present',
    title: 'Full Stack Developer',
    company: 'Erosteps, Jalandhar',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    details: [
      'Developing and maintaining web applications',
      'Working with modern JavaScript frameworks',
      'Implementing responsive designs'
    ]
  },
  {
    date: 'Nov 2023 - Present',
    title: 'Web Administrator',
    company: 'Saurabh Pandey UPSC',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    details: [
      'Managed technical aspects of saurabhpandeyupsc.com',
      'Handled content updates and performance optimization',
      'Implemented SEO best practices',
      'Successfully migrated hosting with minimal downtime'
    ]
  }
];

const projects = [
   {
    title: 'Admin Leave Management',
    description: 'WordPress plugin for managing employee leaves with jQuery and AJAX integration.',
    images: ['adminleave1.png', 'adminleave2.png'],
    tech: ['WordPress', 'PHP', 'jQuery', 'AJAX']
  },
  {
    title: 'Expense Management System',
    description: 'Admin dashboard for expense tracking and management using jQuery and AJAX.',
    images: ['expenses1.png', 'expenses2.png'],
    tech: ['PHP', 'MySQL', 'jQuery', 'AJAX']
  },
  {
    title: 'Image Optimization Plugin',
    description: 'WordPress plugin for automatic image optimization, supporting multiple formats and compression levels.',
    images: ['imageoptimize1.png', 'imageoptimize2.png', 'imageoptimize3.png'],
    tech: ['WordPress', 'PHP', 'JavaScript', 'Image Processing']
  },
  {
    title: 'WhatsApp Automation',
    description: 'Node.js app for automated WhatsApp messaging with Discord integration and QR authentication.',
    images: ['https://images.pexels.com/photos/4132538/pexels-photo-4132538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    tech: ['Node.js', 'Discord.js', 'WebSocket', 'MySQL']
  },
  {
    title: 'Dynamic PDF Generator',
    description: 'Plugin that fetches data from APIs and generates customized PDFs.',
    images: [
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    tech: ['PHP', 'REST API', 'DOMPDF', 'JavaScript']
  },
  {
    title: 'Excel to PDF Invoice Generator',
    description: 'Google Apps Script that automatically generates PDF invoices from Excel data using scheduled cron jobs.',
    images: [
      'https://images.pexels.com/photos/2265482/pexels-photo-2265482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    tech: ['Google Apps Script', 'JavaScript', 'Automation']
  },
  {
    title: 'WhatsApp to Discord Bridge',
    description: 'Node.js application that forwards WhatsApp messages to Discord with sender information.',
    images: [
      'https://images.pexels.com/photos/4132538/pexels-photo-4132538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4132539/pexels-photo-4132539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    tech: ['Node.js', 'Discord.js', 'WhatsApp Web API']
  },
  {
    title: 'WhatsApp Message Logger',
    description: 'Automated system for logging WhatsApp messages with metadata to a database.',
    images: [
      'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5483078/pexels-photo-5483078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    tech: ['Node.js', 'MySQL', 'WhatsApp API']
  }
];

// 2. Greeting Rotation Function
function rotateGreeting() {
  const greetings = [
    "HELLO", "नमस्ते", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "হ্যালো", "హలో", "नमस्कार", "வணக்கம்",
    "નમસ્તે", "سلام", "ಹಲೋ", "ഹലോ", "ନମସ୍କାର", "নমস্কাৰ", "नमस्कार", "नमः"
  ];

  let greetIndex = 0;
  const helloEl = document.getElementById('hello');

  function updateGreeting() {
    if (helloEl) {
      helloEl.textContent = greetings[greetIndex];
      greetIndex = (greetIndex + 1) % greetings.length;
    }
  }

  if (helloEl) {
    updateGreeting();
    setInterval(updateGreeting, 1500);
  }
}

// 3. Main jQuery DOM Ready Block
$(function () {
  // Handle loader
  const loaderWrapper = $('#loader-wrapper');
  const minLoaderTime = 1400;
  const startTime = Date.now();

  $(window).on('load', function () {
    const timeElapsed = Date.now() - startTime;
    const remainingTime = Math.max(0, minLoaderTime - timeElapsed);
    setTimeout(function () {
      loaderWrapper.addClass('hidden');
    }, remainingTime);
  });

  // Start greeting rotation
  rotateGreeting();

  // Populate skills
  const skillsGrid = $('.skills-grid');
  if (skillsGrid.length) {
    skills.forEach(skill => {
      skillsGrid.append(`
        <div class="skill-card">
          <i class="${skill.icon}"></i>
          <span>${skill.name}</span>
        </div>
      `);
    });
  }

  // Populate experience timeline
  const timeline = $('.timeline');
  if (timeline.length) {
    experiences.forEach(exp => {
      timeline.append(`
        <div class="timeline-item">
          <div class="timeline-content">
            <div class="experience-header">
              <div class="experience-company">
                <img src="${exp.image}" alt="${exp.company}">
                <div>
                  <h3>${exp.title}</h3>
                  <p>${exp.company}</p>
                </div>
              </div>
              <span class="experience-date">${exp.date}</span>
            </div>
            <div class="experience-body">
              <ul class="experience-details">
                ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `);
    });
  }

  // Create modal element
  const modal = $('<div class="modal"></div>');
  modal.html(`
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      <img class="modal-image" src="" alt="Project Image">
      <div class="modal-nav">
        <button class="modal-prev"><i class="fas fa-chevron-left"></i></button>
        <button class="modal-next"><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>
  `);
  $('body').append(modal);

  let currentProjectIndex = 0;
  let currentImageIndex = 0;

  function updateModalImage() {
    modal.find('.modal-image').attr('src', projects[currentProjectIndex].images[currentImageIndex]);
  }

  modal.find('.modal-close').on('click', function () {
    modal.removeClass('active');
  });
  modal.find('.modal-prev').on('click', function () {
    currentImageIndex = (currentImageIndex - 1 + projects[currentProjectIndex].images.length) % projects[currentProjectIndex].images.length;
    updateModalImage();
  });
  modal.find('.modal-next').on('click', function () {
    currentImageIndex = (currentImageIndex + 1) % projects[currentProjectIndex].images.length;
    updateModalImage();
  });
  modal.on('click', function (e) {
    if (e.target === this) {
      modal.removeClass('active');
    }
  });

  // Populate projects with image slider
  const projectsGrid = $('.projects-grid');
  if (projectsGrid.length) {
    projects.forEach((project, projectIndex) => {
      projectsGrid.append(`
        <div class="project-card">
          <div class="project-image-slider">
            <div class="slider-container" id="slider-${projectIndex}">
              ${project.images.map((img, imgIndex) => `
                <img src="${img}" alt="${project.title} ${imgIndex + 1}" 
                     class="slider-image ${imgIndex === 0 ? 'active' : ''}"
                     data-project="${projectIndex}"
                     data-image="${imgIndex}" />
              `).join('')}
            </div>
            <div class="slider-dots">
              ${project.images.map((_, imgIndex) => `
                <span class="dot ${imgIndex === 0 ? 'active' : ''}" data-index="${imgIndex}"></span>
              `).join('')}
            </div>
          </div>
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
              ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
            </div>
          </div>
        </div>
      `);
    });

    projects.forEach((_, projectIndex) => {
      const slider = $(`#slider-${projectIndex}`);
      const dots = slider.parent().find('.slider-dots');
      slider.find('.slider-image').on('click', function () {
        currentProjectIndex = parseInt($(this).data('project'));
        currentImageIndex = parseInt($(this).data('image'));
        updateModalImage();
        modal.addClass('active');
      });
      dots.on('click', '.dot', function () {
        const index = parseInt($(this).data('index'));
        const images = slider.find('.slider-image');
        const allDots = dots.find('.dot');
        images.removeClass('active');
        allDots.removeClass('active');
        images.eq(index).addClass('active');
        $(this).addClass('active');
      });
      let currentIndex = 0;
      setInterval(function () {
        const images = slider.find('.slider-image');
        const allDots = dots.find('.dot');
        if (images.length > 1) {
          images.eq(currentIndex).removeClass('active');
          allDots.eq(currentIndex).removeClass('active');
          currentIndex = (currentIndex + 1) % images.length;
          images.eq(currentIndex).addClass('active');
          allDots.eq(currentIndex).addClass('active');
        }
      }, 5000);
    });
  }

  // Scroll animations
  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    const maxScroll = 300;
    const scrollFraction = Math.min(scrollTop / maxScroll, 1);
    const isMobile = $(window).width() <= 768;
    const profile = $('.profile');
    const miniProfile = $('.mini-profile');
    const name = $('.name');
    const intro = $('.intro');
    const buttons = $('.buttons');
    const header = $('.header');
    if (header.length) {
      if (scrollTop > 50) {
        header.addClass('scrolled');
      } else {
        header.removeClass('scrolled');
      }
    }
    if (profile.length) {
      const scale = 1 - scrollFraction * (isMobile ? 0.4 : 0.6);
      const translateX = scrollFraction * (isMobile ? -30 : -50);
      const translateY = scrollFraction * (isMobile ? -50 : -80);
      profile.css({
        transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
        opacity: 1 - scrollFraction
      });
    }
    if (miniProfile.length) {
      const size = 40 * scrollFraction;
      miniProfile.css({
        width: `${size}px`,
        height: `${size}px`,
        opacity: scrollFraction
      });
    }
    if (name.length) {
      const translateX = isMobile ? 20 * scrollFraction : 60 * scrollFraction;
      name.css('transform', `translateX(${translateX}px)`);
    }
    if (intro.length) {
      const translateX = isMobile ? scrollFraction * 50 : scrollFraction * 100;
      intro.css({
        transform: `translateX(${translateX}%)`,
        opacity: 1 - scrollFraction
      });
    }
    if (buttons.length) {
      buttons.css({
        transform: `scale(${1 - scrollFraction * 0.3})`,
        opacity: 1 - scrollFraction
      });
    }
  });

  // Intersection Observer for animations (no direct jQuery equivalent, so keep as is)
  if ($(window).width() <= 768) {
    // On mobile, always show all sections and timeline items
    $('.section, .timeline-item').addClass('visible');
  } else {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2
    });
    document.querySelectorAll('.section, .timeline-item').forEach(element => {
      sectionObserver.observe(element);
    });
  }

  // Contact form handling
  const contactForm = $('#contactForm');
  if (contactForm.length) {
    contactForm.on('submit', function (e) {
      e.preventDefault();
      const formData = {
        name: $('#name').val() || '',
        email: $('#email').val() || '',
        subject: $('#subject').val() || '',
        message: $('#message').val() || '',
        to: 'rishabkhanna26@gmail.com'
      };
      const mailtoLink = `mailto:${formData.to}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
    });
  }
});
