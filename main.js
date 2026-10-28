/**
 * NITSHITEY - PERSONAL PORTFOLIO JAVASCRIPT
 * Matching the exact Cyan Neon Glow Dark theme interaction
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearElem = document.getElementById('current-year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }

  // 2. Typewriter Effect in Hero Section
  initTypewriter();

  // 3. Sticky Navbar & Scroll Spy Active Link
  initScrollEffects();

  // 4. Mobile Menu Toggle
  initMobileMenu();

  // 5. Contact Form Handler & Toast Feedback
  initContactForm();

  // 6. Animate Progress Bars on Scroll
  initProgressBarAnimation();
});

/* --------------------------------------------------------------------------
   TYPEWRITER EFFECT
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const typedTextElem = document.getElementById('typed-text');
  if (!typedTextElem) return;

  const words = [
    '4th Year AgroEconomics Student',
    'University of Gondar (UoG) Scholar',
    'Agribusiness Market Analyst',
    'Farm Financial Modeler',
    'Rural Food Systems Researcher',
    'Econometric & Data Enthusiast'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typedTextElem.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 50;
    } else {
      typedTextElem.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typingDelay = 2000; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingDelay = 400; // Pause before typing new word
    }

    setTimeout(type, typingDelay);
  }

  type();
}

/* --------------------------------------------------------------------------
   STICKY NAVBAR & ACTIVE SECTION LINK SPY
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const header = document.querySelector('.header');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Sticky header
    if (window.scrollY > 80) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }

    // Scroll Spy: highlight corresponding navbar link
    const scrollPosition = window.scrollY;

    sections.forEach(sec => {
      const top = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   MOBILE MENU TOGGLE
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!menuIcon || !navbar) return;

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    const icon = menuIcon.querySelector('i');
    if (navbar.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });

  // Close mobile menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      const icon = menuIcon.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   PROGRESS BAR ANIMATION ON VIEWPORT ENTRY
   -------------------------------------------------------------------------- */
function initProgressBarAnimation() {
  const progressSpans = document.querySelectorAll('.progress-bar span');
  const eduSection = document.getElementById('education');

  if (!eduSection || !progressSpans.length) return;

  let animated = false;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        progressSpans.forEach(span => {
          const width = span.style.width;
          span.style.width = '0%';
          setTimeout(() => {
            span.style.width = width;
          }, 150);
        });
        animated = true;
      }
    });
  }, { threshold: 0.25 });

  observer.observe(eduSection);
}

/* --------------------------------------------------------------------------
   PORTFOLIO MODAL DATA & CONTROLLERS
   -------------------------------------------------------------------------- */
const modalData = {
  'modal-1': {
    title: 'Academic Defense & Seminar Presentation',
    subtitle: 'Lecture Hall Research Presentation on Agricultural Price Volatility',
    category: 'Classroom & Academic Rigor',
    description: 'Delivered an empirical research presentation examining grain market price volatility and market margin transmission in regional agrarian hubs.',
    highlights: [
      'Defended methodology before academic faculty and senior seminar students.',
      'Illustrated supply elasticity and seasonality effects using quantitative charts.',
      'Commended for structured delivery, clarity of thought, and poise.'
    ]
  },
  'modal-2': {
    title: 'Smallholder Farmer Market Access & Margin Analysis',
    subtitle: 'Fieldwork Investigation in Agricultural Supply Chains',
    category: 'Agribusiness Field Research',
    description: 'Investigated the gap between rural farmgate prices and urban wholesale rates across cereal producers.',
    highlights: [
      'Interviewed 120+ rural farmers using structured survey instruments.',
      'Modeled transport cost barriers and middleman margin distribution.',
      'Recommended cooperative grain aggregation hubs to boost farmer income.'
    ]
  },
  'modal-3': {
    title: 'Linear Programming Farm Optimization Model',
    subtitle: 'Constrained Resource Allocation for Maximum Profitability',
    category: 'Farm Production Economics',
    description: 'Formulated a mathematical linear programming optimization model using Excel Solver to allocate land, labor, and scarce irrigation water.',
    highlights: [
      'Simulated +27% net revenue increase over traditional farm budgeting.',
      'Derived shadow prices for seasonal water quotas.',
      'Demonstrated high practical utility for extension advisory.'
    ]
  },
  'modal-4': {
    title: 'Rural Heritage, Culture & Agricultural Cooperatives',
    subtitle: 'Social Capital and Community Economic Resilience',
    category: 'Community & Agrarian Culture',
    description: 'Studied the intersection of timeless cultural traditions, mutual-aid farming networks (Debo/Wonfel), and formal microfinance cooperatives.',
    highlights: [
      'Documented traditional labor-sharing productivity metrics.',
      'Assessed member trust indices within agricultural credit societies.',
      'Advocated for culturally grounded rural development policy.'
    ]
  },
  'modal-5': {
    title: 'Post-Harvest Loss Economic Valuation',
    subtitle: 'Hermetic Storage Adoption & Cost-Benefit Analysis',
    category: 'Value Chain Economics',
    description: 'Quantified financial losses from insect infestation in stored legume crops and evaluated modern storage intervention economics.',
    highlights: [
      'Calculated an impressive 3.2x Benefit-Cost Ratio for hermetic bags.',
      'Estimated a brief 4.5-month capital payback horizon.',
      'Created enterprise budgeting guide for cooperative adoption.'
    ]
  }
};

window.openModal = function(modalId) {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  const data = modalData[modalId];

  if (!overlay || !body || !data) return;

  body.innerHTML = `
    <div style="margin-bottom: 1.25rem;">
      <span style="font-size: 0.85rem; font-weight: 700; color: var(--main-color); text-transform: uppercase; letter-spacing: 0.08em;">
        ${data.category}
      </span>
      <h3 style="font-size: 1.7rem; color: #fff; margin-top: 0.4rem; margin-bottom: 0.35rem;">${data.title}</h3>
      <p style="font-size: 1rem; color: var(--main-color); margin-bottom: 1.25rem;">${data.subtitle}</p>
    </div>

    <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
      ${data.description}
    </p>

    <div style="background: rgba(0, 238, 255, 0.06); border: 1px solid rgba(0, 238, 255, 0.2); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem;">
      <h4 style="font-size: 1rem; color: #fff; margin-bottom: 0.75rem;">Key Takeaways & Methodologies:</h4>
      <ul style="display: flex; flex-direction: column; gap: 0.5rem; list-style: none;">
        ${data.highlights.map(h => `<li style="font-size: 0.9rem; color: var(--text-color); display: flex; align-items: flex-start; gap: 0.65rem;"><i class="fa-solid fa-check" style="color: var(--main-color); margin-top: 4px;"></i> <span>${h}</span></li>`).join('')}
      </ul>
    </div>

    <button onclick="closeModal()" class="btn btn-hire" style="padding: 0.6rem 1.8rem; font-size: 0.95rem;">
      Close Preview
    </button>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* --------------------------------------------------------------------------
   CONTACT FORM SUBMISSION & TOAST NOTIFICATION
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');

  if (!contactForm || !submitBtn) return;

  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const userName = document.getElementById('user-name').value;

    // Loading feedback
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `Submit Message`;
      contactForm.reset();

      showToast(`Thank you, ${userName}! Your message has been sent successfully. Nitshitey will get back to you soon.`, 'paper-plane');
    }, 1200);
  });
}

function showToast(message, iconName = 'circle-check') {
  const toastBox = document.getElementById('toast-box');
  if (!toastBox) return;

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `
    <i class="fa-solid fa-${iconName}" style="color: var(--main-color); font-size: 1.25rem;"></i>
    <span>${message}</span>
  `;

  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-100%)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/* --------------------------------------------------------------------------
   INTERACTIVE CLICK TO ACTIVATE: TESTIMONIALS & EDUCATION
   -------------------------------------------------------------------------- */
window.activateTestimonial = function(cardElem) {
  const allCards = document.querySelectorAll('.testimonial-card');
  allCards.forEach(card => card.classList.remove('active'));
  cardElem.classList.add('active');
};

window.activateEdu = function(eduElem) {
  const allEdus = document.querySelectorAll('.education-content');
  allEdus.forEach(item => item.classList.remove('active-edu'));
  eduElem.classList.add('active-edu');
};

/* --------------------------------------------------------------------------
   INTERACTIVE BUTTONS: DOWNLOAD CV & VIEW PROJECTS
   -------------------------------------------------------------------------- */
window.handleDownloadCV = function(btnElem) {
  const rowBtns = document.querySelectorAll('.about-btn-row .btn');
  rowBtns.forEach(btn => btn.classList.remove('active'));
  if (btnElem) btnElem.classList.add('active');

  const cvModal = document.getElementById('cv-modal-overlay');
  if (cvModal) {
    cvModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  showToast("Opening Nitshitey's Academic Curriculum Vitae (UoG)...", 'file-arrow-down');
};

window.closeCVModal = function() {
  const cvModal = document.getElementById('cv-modal-overlay');
  if (cvModal) {
    cvModal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.downloadCVFile = function() {
  const cvText = `
========================================================================
                      CURRICULUM VITAE (CV)
                            NITSHITEY
          4th Year B.Sc. Agricultural Economics Scholar
             University of Gondar (UoG), Ethiopia
               Email: nitshitey.agecon@gmail.com
========================================================================

1. ACADEMIC PROFILE & SUMMARY
------------------------------------------------------------------------
Passionate 4th Year Agricultural Economics scholar at the University of Gondar 
(College of Agriculture and Rural Transformation). Proven track record in farm 
enterprise budgeting, linear programming optimization, rural household survey 
design, and agricultural commodity price analysis.

2. EDUCATION & ACADEMIC PROGRESSION
------------------------------------------------------------------------
* B.Sc. in Agricultural Economics (4-Year Degree Program)
  University of Gondar (UoG), Ethiopia | Expected Graduation: 2027
  Current Standing: 4th Year (Senior Final Division)

  - 1st Year: Foundations of Microeconomics, Macroeconomics, Calculus for Economists, 
    Agricultural Botany, Soil Sciences.
  - 2nd Year: Production Economics & Cost Functions, Farm Financial Accounting, 
    Agricultural Price Analysis, Agricultural Statistics.
  - 3rd Year: Applied Econometric Modeling, Agribusiness Marketing & Supply Chains, 
    Rural Financial Intermediation, Project Planning & Evaluation.
  - 4th Year: Senior Research Thesis, Agricultural Policy Formulation, 
    Practical Farm & Agribusiness Extension Attachment.

3. CORE COMPETENCIES & TECHNICAL SKILLS
------------------------------------------------------------------------
* Quantitative Tools: Econometric Regression, SPSS, Stata, Excel Solver Linear Programming.
* Farm Management: Enterprise Gross Margin Budgeting, Cash Flow Projections, NPV/IRR.
* Fieldwork & Surveying: Rural Household Questionnaire Design, Sampling, Farmer Interviews.
* Agribusiness: Value Chain Margin Analysis, Post-Harvest Loss Mitigation, Co-op Management.
* Communication: Academic Research Presentation & Seminar Defense, Bilingual Reporting.

4. SELECTED RESEARCH & FIELD PROJECTS
------------------------------------------------------------------------
* Smallholder Farmer Market Access & Intermediary Margins:
  Conducted empirical field investigation of grain price differentials across 120+ farmers.
* Linear Programming Model for Mixed Crop Farming:
  Modeled resource constraints yielding simulated +27% net farm margin gain.
* Post-Harvest Loss Economic Valuation:
  Cost-benefit analysis of hermetic storage technologies resulting in 3.2x benefit-cost ratio.
* 5-Year Dairy Enterprise Feasibility Study:
  Constructed pro-forma financial statements with 22.4% projected Internal Rate of Return (IRR).

5. EXTRACURRICULAR & LEADERSHIP
------------------------------------------------------------------------
* Member, University of Gondar Agricultural Economics Student Association.
* Participant, Regional Agribusiness Extension & Farmer Field School Outreach.

========================================================================
`;

  const blob = new Blob([cvText.trim()], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Nitshitey_UoG_AgroEconomics_CV.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('Academic CV downloaded successfully to your computer!', 'circle-check');
};

window.handleViewProjects = function(btnElem) {
  const rowBtns = document.querySelectorAll('.about-btn-row .btn');
  rowBtns.forEach(btn => btn.classList.remove('active'));
  if (btnElem) btnElem.classList.add('active');

  // Highlight all portfolio items with glowing pulse
  const portfolioBoxes = document.querySelectorAll('.portfolio-box');
  portfolioBoxes.forEach(box => {
    box.classList.remove('portfolio-highlight');
    void box.offsetWidth; // trigger reflow
    box.classList.add('portfolio-highlight');
  });

  // Activate portfolio link in navbar
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#portfolio') {
      link.classList.add('active');
    }
  });

  showToast('Navigating to Featured Portfolio & Projects...', 'briefcase');
};
