// Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      once: true
    });



// Mobile menu toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      hamburgerBtn.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburgerBtn.textContent = '☰';
      });
    });

    // Form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset errors
        document.querySelectorAll('.error-message').forEach(el => {
          el.style.display = 'none';
        });
        
        // Validate name
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
          document.getElementById('name-error').textContent = 'Name is required';
          document.getElementById('name-error').style.display = 'block';
          return;
        }
        
        // Validate email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
          document.getElementById('email-error').textContent = 'Please enter a valid email';
          document.getElementById('email-error').style.display = 'block';
          return;
        }
        
        // Validate message
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
          document.getElementById('message-error').textContent = 'Message is required';
          document.getElementById('message-error').style.display = 'block';
          return;
        }
        
        // If all validations pass
        const successMessage = document.getElementById('form-success');
        successMessage.textContent = 'Message sent successfully!';
        successMessage.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });