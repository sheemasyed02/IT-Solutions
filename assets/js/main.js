/**
* Template Name: Gp
* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
* Updated: Aug 15 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

// Hero Section
document.addEventListener('DOMContentLoaded', function() {
  const text = "(Company Name.)";
  const typingText = document.getElementById('typing-text');
  let index = 0;

  // Add initial delay before starting
  setTimeout(() => {
      type();
  }, 1000); // Waits 1s before starting

  function type() {
      if (index < text.length) {
          typingText.textContent += text.charAt(index);
          index++;
          setTimeout(type, 150); // Typing speed
      }
      // Uncomment below to make it loop
      
      else {
          setTimeout(() => {
              typingText.textContent = '';
              index = 0;
              type();
          }, 2200); // Wait 2 seconds before restarting
      }
      
  }
});

// About
document.addEventListener('DOMContentLoaded', function() {
  // Initialize animation indices for list items
  document.querySelectorAll('.about .content ul li').forEach((item, index) => {
    item.style.setProperty('--item-index', index + 1);
  });
  
  // Initialize animation indices for feature items
  document.querySelectorAll('.features .features-item').forEach((item, index) => {
    item.style.setProperty('--item-index', index + 1);
  });
  
  // Intersection Observer for triggering animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.visibility = 'visible';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Observe elements for animation
  document.querySelectorAll('.about .content, .features .features-item').forEach((el) => {
    el.style.visibility = 'hidden';
    observer.observe(el);
  });
  
  // Enhanced Swiper configuration
  new Swiper('.init-swiper', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 60
      }
    },
    on: {
      init: function () {
        animateSlides(this);
      },
      slideChange: function () {
        animateSlides(this);
      }
    }
  });
});

function animateSlides(swiper) {
  const slides = swiper.slides;
  slides.forEach((slide, index) => {
    const img = slide.querySelector('img');
    if (img) {
      img.style.transitionDelay = `${index * 0.1}s`;
    }
  });
}


document.addEventListener('DOMContentLoaded', function() {
  // Existing filter functionality
  const filters = document.querySelectorAll('.service-filters li');
  const categories = document.querySelectorAll('.service-category');

  function activateService(categoryId) {
    // Remove active class from all filters
    filters.forEach(f => f.classList.remove('filter-active'));
    
    // Add active class to corresponding filter
    const correspondingFilter = document.querySelector(`[data-filter="${categoryId}"]`);
    if (correspondingFilter) {
      correspondingFilter.classList.add('filter-active');
    }

    // Hide all categories
    categories.forEach(category => category.classList.remove('active'));
    
    // Show selected category
    const targetCategory = document.getElementById(categoryId);
    if (targetCategory) {
      targetCategory.classList.add('active');
    }

    // Scroll to services section
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  }

  // Setup hero section click handlers
  const heroServiceLinks = {
    'Managed IT Services': 'IT',
    'Web and App Development': 'Web',
    'Digital Marketing': 'Digital',
    'Software Sales and Services': 'Sales',
    'Other Services': 'IT' // Defaulting to IT services for "Other Services"
  };

  // Add click handlers to hero section service boxes
  document.querySelectorAll('.icon-box').forEach(box => {
    box.addEventListener('click', function(e) {
      const serviceName = this.querySelector('h3 a').textContent;
      const categoryId = heroServiceLinks[serviceName];
      if (categoryId) {
        e.preventDefault();
        activateService(categoryId);
      }
    });
  });

  // Setup existing filter click handlers
  filters.forEach(filter => {
    filter.addEventListener('click', function() {
      const categoryId = this.getAttribute('data-filter');
      activateService(categoryId);
    });
  });
});

// Footer
document.addEventListener('DOMContentLoaded', function() {
  // Footer service links functionality similar to hero section
  const footerServiceLinks = {
    'Managed IT Services': 'IT',
    'Web and App Development': 'Web', 
    'Digital Marketing': 'Digital',
    'Software Sales and Services': 'Sales',
    'Other Services': 'IT'
  };

  document.querySelectorAll('.footer-links ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
      const serviceName = this.textContent.trim();
      const categoryId = footerServiceLinks[serviceName];
      
      if (categoryId) {
        e.preventDefault();
        
        // Remove active class from all filters
        document.querySelectorAll('.service-filters li').forEach(f => 
          f.classList.remove('filter-active')
        );
        
        // Activate corresponding filter
        const correspondingFilter = document.querySelector(`[data-filter="${categoryId}"]`);
        if (correspondingFilter) {
          correspondingFilter.classList.add('filter-active');
        }

        // Hide all categories
        document.querySelectorAll('.service-category').forEach(category => 
          category.classList.remove('active')
        );
        
        // Show selected category
        const targetCategory = document.getElementById(categoryId);
        if (targetCategory) {
          targetCategory.classList.add('active');
        }

        // Scroll to services section
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});