// Data
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
    image: 'admin leave1.png',
    tech: ['WordPress', 'PHP', 'jQuery', 'AJAX']
  },
  {
    title: 'Expense Management System',
    description: 'Admin dashboard for expense tracking and management using jQuery and AJAX.',
    image: 'expenses1.png',
    tech: ['PHP', 'MySQL', 'jQuery', 'AJAX']
  },
  {
    title: 'WhatsApp Automation',
    description: 'Node.js application for automated WhatsApp messaging with Discord integration and QR authentication.',
    image: 'https://images.pexels.com/photos/4132538/pexels-photo-4132538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['Node.js', 'Discord.js', 'WebSocket', 'MongoDB']
  },
  {
    title: 'Utility Tools',
    description: 'Image compression and PDF generation tools using DOM PDF.',
    image: 'image optimize1.png',
    tech: ['PHP', 'DOM PDF', 'JavaScript']
  }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Populate skills
  const skillsGrid = document.querySelector('.skills-grid');
  if (skillsGrid) {
    skills.forEach(skill => {
      skillsGrid.innerHTML += `
        <div class="skill-card">
          <i class="${skill.icon}"></i>
          <span>${skill.name}</span>
          <div class="skill-info">${skill.info}</div>
        </div>
      `;
    });
  }

  // Populate experience timeline
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    experiences.forEach(exp => {
      timeline.innerHTML += `
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
      `;
    });
  }

  // Populate projects
  const projectsGrid = document.querySelector('.projects-grid');
  if (projectsGrid) {
    projects.forEach(project => {
      projectsGrid.innerHTML += `
        <div class="project-card">
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
          </div>
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
              ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    });
  }

  // Greeting rotation
  const greetings = [
    "HELLO", "नमस्ते", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "হ্যালো", "హలో", "नमस्कार", "வணக்கம்",
    "નમસ્તે", "سلام", "ಹಲೋ", "ഹലോ", "ନମସ୍କାର", "নমস্কাৰ", "नमस्कार", "नमः"
  ];

  let greetIndex = 0;
  const helloEl = document.getElementById('hello');

  function rotateGreeting() {
    if (helloEl) {
      helloEl.textContent = greetings[greetIndex];
      greetIndex = (greetIndex + 1) % greetings.length;
    }
  }

  if (helloEl) {
    rotateGreeting();
    setInterval(rotateGreeting, 1500);
  }

  // Scroll animations
  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const maxScroll = 300;
    const scrollFraction = Math.min(scrollTop / maxScroll, 1);
    const isMobile = window.innerWidth <= 768;

    const profile = document.querySelector('.profile');
    const miniProfile = document.querySelector('.mini-profile');
    const name = document.querySelector('.name');
    const intro = document.querySelector('.intro');
    const buttons = document.querySelector('.buttons');
    const header = document.querySelector('.header');

    // Header scroll effect
    if (header) {
      if (scrollTop > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (profile) {
      const scale = 1 - scrollFraction * (isMobile ? 0.4 : 0.6);
      const translateX = scrollFraction * (isMobile ? -30 : -50);
      const translateY = scrollFraction * (isMobile ? -50 : -80);
      profile.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
      profile.style.opacity = `${1 - scrollFraction}`;
    }

    if (miniProfile) {
      const size = 40 * scrollFraction;
      miniProfile.style.width = `${size}px`;
      miniProfile.style.height = `${size}px`;
      miniProfile.style.opacity = `${scrollFraction}`;
    }

    if (name) {
      const translateX = isMobile ? 20 * scrollFraction : 60 * scrollFraction;
      name.style.transform = `translateX(${translateX}px)`;
    }

    if (intro) {
      const translateX = isMobile ? scrollFraction * 50 : scrollFraction * 100;
      intro.style.transform = `translateX(${translateX}%)`;
      intro.style.opacity = `${1 - scrollFraction}`;
    }

    if (buttons) {
      buttons.style.transform = `scale(${1 - scrollFraction * 0.3})`;
      buttons.style.opacity = `${1 - scrollFraction}`;
    }
  });

  // Intersection Observer for animations
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

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('name')?.value || '',
        email: document.getElementById('email')?.value || '',
        subject: document.getElementById('subject')?.value || '',
        message: document.getElementById('message')?.value || '',
        to: 'rishabkhanna26@gmail.com'
      };

      const mailtoLink = `mailto:${formData.to}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
    });
  }
});

// DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const loaderWrapper = document.getElementById('loader-wrapper');
  const portfolioWrapper = document.querySelector('.portfolio-wrapper');
  const minLoaderTime = 1400;
  const startTime = Date.now();

  window.addEventListener('load', () => {
    const timeElapsed = Date.now() - startTime;
    const remainingTime = Math.max(0, minLoaderTime - timeElapsed);

    setTimeout(() => {
      loaderWrapper.classList.add('hidden');
      portfolioWrapper.classList.add('portfolio-visible');
      populateSkills();
      populateExperience();
      populateProjects();
      initScrollAnimations();
      initHeaderScrollEffects();
    }, remainingTime);
  });

  rotateGreeting();
  setInterval(rotateGreeting, 1500);
});
