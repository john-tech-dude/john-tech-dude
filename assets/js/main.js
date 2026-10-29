// NAZUMI RONIN V6 - Enhanced Performance & Splash Screen
document.addEventListener('DOMContentLoaded', function() {
  // Splash screen simulation
  const splashScreen = document.getElementById('splashScreen');
  const loadingBar = document.getElementById('loadingBar');
  const body = document.body;
  // Simulate loading progress
  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += 2;
    loadingBar.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(progressInterval);
      // Hide splash screen with fade effect
      setTimeout(() => {
        splashScreen.style.opacity = 0;
        setTimeout(() => {
          splashScreen.style.display = 'none';
          document.body.style.overflow = 'auto'; // Enable scrolling after splash screen is gone
        }, 500);
      }, 500);
    }
  }, 40);
  // Lock body scroll during splash screen
  document.body.style.overflow = 'hidden';
  // Main functionality
  const buyButton = document.getElementById('buyButton');
  const buyButtonPanel = document.getElementById('buyButtonPanel');
  const floatingBuyBtn = document.getElementById('floatingBuyBtn');
  const overlay = document.getElementById('overlay');
  const buyPanel = document.getElementById('buyPanel');
  const closeBuyPanel = document.getElementById('closeBuyPanel');
  const copyAddress = document.getElementById('copyAddress');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  // Toggle mobile menu
  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    menuToggle.innerHTML = navMenu.classList.contains('active') ?
      '<i class="fas fa-times"></i>' :
      '<i class="fas fa-bars"></i>';
  });
  // Close mobile menu when a nav item is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
  // Dark Mode Toggle
  darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    // Save preference to localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });
  // Check for saved dark mode preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  // Ink splash effect
  document.addEventListener('click', function(e) {
    // Create a new ink splash element
    const splash = document.createElement('div');
    splash.className = 'ink-splash';
    // Set its position to the click coordinates
    splash.style.width = '10px';
    splash.style.height = '10px';
    splash.style.left = (e.pageX - 5) + 'px';
    splash.style.top = (e.pageY - 5) + 'px';
    // Add it to the body
    document.body.appendChild(splash);
    // Remove it after the animation completes
    setTimeout(() => {
      splash.remove();
    }, 800);
  });
  // Animate elements when they come into view
  const animateOnScroll = function() {
    const sections = document.querySelectorAll('.section-title, .panel, .arc-header, .speech-bubble, .village-scene, .character-evolution, .timeline, .tokenomics-container, .zen-temple, .allies-gathering, .btn, .japanese-stamp, .footer, .title-image-container, .journey-reflection, .roadmap, .roadmap-node, .community-card, .community-intro, .community-join');
    sections.forEach(section => {
      // Calculate position of each element
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;
      // Add animate class when section is in view
      if (sectionTop < triggerPoint) {
        section.classList.add('animate');
      }
    });
  };
  // Listen for scroll to trigger animations
  window.addEventListener('scroll', animateOnScroll);
  // Initial call to animate elements in view on page load
  window.addEventListener('load', function() {
    animateOnScroll();
    // Animate AOS elements
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false,
      offset: 120, // Trigger animations a bit earlier for smoother appearance
      delay: 100, // Small delay to ensure proper initialization
      mirror: false // No animation on scroll up
    });
    // Mark as V5 in console
    console.log('NAZUMI RONIN V5 - Enhanced with splash screen and floating action button');
  });
  // Open Buy Panel functions
  const openBuyPanel = function() {
    overlay.style.display = 'block';
    buyPanel.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    // Add fade-in classes after a brief delay
    setTimeout(() => {
      overlay.classList.add('fade-in');
      buyPanel.classList.add('fade-in');
    }, 10);
  };
  // Open Buy Panel from various buttons
  buyButton.addEventListener('click', function(e) {
    e.preventDefault();
    openBuyPanel();
  });
  if (buyButtonPanel) {
    buyButtonPanel.addEventListener('click', function(e) {
      e.preventDefault();
      openBuyPanel();
    });
  }
  if (floatingBuyBtn) {
    floatingBuyBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openBuyPanel();
    });
  }
  // Close Buy Panel
  closeBuyPanel.addEventListener('click', function() {
    overlay.classList.remove('fade-in');
    buyPanel.classList.remove('fade-in');
    // Delay hiding to allow animation to complete
    setTimeout(() => {
      overlay.style.display = 'none';
      buyPanel.style.display = 'none';
      document.body.style.overflow = ''; // Re-enable scrolling
    }, 300);
  });
  // Close Buy Panel when clicking outside
  overlay.addEventListener('click', function() {
    overlay.classList.remove('fade-in');
    buyPanel.classList.remove('fade-in');
    // Delay hiding to allow animation to complete
    setTimeout(() => {
      overlay.style.display = 'none';
      buyPanel.style.display = 'none';
      document.body.style.overflow = ''; // Re-enable scrolling
    }, 300);
  });
  // Copy Contract Address
  copyAddress.addEventListener('click', function() {
    const addressText = '0xNazu4528...mi7892Ron';
    navigator.clipboard.writeText(addressText).then(function() {
      const originalHtml = copyAddress.innerHTML;
      copyAddress.innerHTML = '<i class="fas fa-check"></i>';
      setTimeout(() => {
        copyAddress.innerHTML = originalHtml;
      }, 2000);
    });
  });
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') return;
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  // Add smooth scrolling for all elements
  document.querySelectorAll('.zen-temple.animate .circular-panel').forEach(panel => {
    panel.style.transform = 'translate(-50%, -50%) scale(1)';
  });
  // Toggle floating buy button visibility based on scroll position
  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      floatingBuyBtn.classList.add('pulse');
    } else {
      floatingBuyBtn.classList.remove('pulse');
    }
  });
});
// Preload critical images for better performance
const preloadImages = () => {
  const criticalImages = [
    'https://i.imgur.com/6rxfmNY.jpg',
    'https://i.imgur.com/nD9J9A7.jpg',
    'https://i.imgur.com/VsnU0Lb.jpg',
    'https://i.imgur.com/p49CxJb.jpg',
    'https://i.imgur.com/go2g6R9.jpg',
    'https://i.imgur.com/wmY44Ld.jpg'
  ];
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};
// Run preload
preloadImages();

// Real Solana Wallet Connection System
const walletConnection = {
    wallet: null,
    publicKey: null,
    connected: false,

    // Initialize wallet connection
    async init() {
        // Add wallet connect button handlers
        document.querySelectorAll('.wallet-connect-btn').forEach(button => {
            button.addEventListener('click', async (e) => {
                const walletType = e.currentTarget.dataset.wallet;
                await this.connectWallet(walletType);
            });
        });

        // Auto-connect if previously connected
        const lastWallet = localStorage.getItem('lastConnectedWallet');
        if (lastWallet) {
            await this.connectWallet(lastWallet);
        }
    },

    // Connect to wallet
    async connectWallet(walletType) {
        try {
            let response;

            switch (walletType) {
                case 'phantom':
                    if (window.solana && window.solana.isPhantom) {
                        response = await window.solana.connect();
                        this.wallet = window.solana;
                    } else {
                        window.open('https://phantom.app/', '_blank');
                        this.showError('Please install Phantom wallet');
                        return;
                    }
                    break;

                case 'solflare':
                    if (window.solflare && window.solflare.isSolflare) {
                        response = await window.solflare.connect();
                        this.wallet = window.solflare;
                    } else {
                        window.open('https://solflare.com/', '_blank');
                        this.showError('Please install Solflare wallet');
                        return;
                    }
                    break;

                case 'backpack':
                    // Backpack uses a different API
                    if (window.backpack) {
                        try {
                            response = await window.backpack.connect();
                            this.wallet = window.backpack;
                        } catch (err) {
                            // Try alternative Backpack connection method
                            if (window.solana && window.solana.isBackpack) {
                                response = await window.solana.connect();
                                this.wallet = window.solana;
                            } else {
                                throw new Error('Backpack connection failed');
                            }
                        }
                    } else if (window.solana && window.solana.isBackpack) {
                        response = await window.solana.connect();
                        this.wallet = window.solana;
                    } else {
                        window.open('https://backpack.app/', '_blank');
                        this.showError('Please install Backpack wallet');
                        return;
                    }
                    break;

                default:
                    throw new Error('Unsupported wallet type');
            }

            if (response && response.publicKey) {
                this.publicKey = response.publicKey.toString();
                this.connected = true;
                this.updateUI(walletType, this.publicKey);
                localStorage.setItem('lastConnectedWallet', walletType);
                this.showSuccess('Wallet connected successfully!');
            }
        } catch (error) {
            console.error('Wallet connection error:', error);
            this.showError('Failed to connect wallet. Please try again.');
        }
    },

    // Disconnect wallet
    async disconnect() {
        try {
            if (this.wallet) {
                await this.wallet.disconnect();
            }
            this.wallet = null;
            this.publicKey = null;
            this.connected = false;
            localStorage.removeItem('lastConnectedWallet');
            this.updateUI(null, null);
            this.showSuccess('Wallet disconnected');
        } catch (error) {
            console.error('Wallet disconnect error:', error);
        }
    },

    // Update UI after successful connection
    updateUI(walletType, publicKey) {
        const connectButton = document.getElementById('connectWalletBtn');
        if (!connectButton) return;

        const shortAddress = publicKey ? `${publicKey.slice(0, 4)}...${publicKey.slice(-4)}` : 'Connect Wallet';

        if (this.connected) {
            connectButton.innerHTML = `
                <i class="fas fa-wallet" style="margin-right: 8px;"></i>
                ${shortAddress}
            `;
            connectButton.classList.add('connected');
            connectButton.onclick = () => this.disconnect();
        } else {
            connectButton.innerHTML = 'Connect Wallet';
            connectButton.classList.remove('connected');
            connectButton.onclick = () => {
                const walletOptions = document.getElementById('walletOptions');
                if (walletOptions) {
                    walletOptions.classList.toggle('show');
                }
            };
        }

        // Hide wallet options
        const walletOptions = document.getElementById('walletOptions');
        if (walletOptions) {
            walletOptions.classList.remove('show');
        }
    },

    // Show success message
    showSuccess(message) {
        const toast = document.createElement('div');
        toast.className = 'success-toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #10B981;
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    },

    // Show error message
    showError(message) {
        const toast = document.createElement('div');
        toast.className = 'error-toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #EF4444;
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
};

// Initialize wallet connection system
document.addEventListener('DOMContentLoaded', () => {
    walletConnection.init();
});

// Parallax scrolling effect - Training section
document.addEventListener('DOMContentLoaded', function() {
  const parallaxBg = document.querySelector('.parallax-bg');
  if (!parallaxBg) return;

  function updateParallax() {
    const scrollPosition = window.pageYOffset;
    const element = parallaxBg.parentElement;
    const rect = element.getBoundingClientRect();
    // Only apply parallax when element is in viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const offset = scrollPosition * 0.3 - (element.offsetTop * 0.3);
      // Use transform for better performance
      parallaxBg.style.transform = `translateY(${offset}px)`;
    }
  }
  // Initial update
  updateParallax();
  // Update on scroll
  window.addEventListener('scroll', updateParallax);
  // Update on resize (important for mobile)
  window.addEventListener('resize', updateParallax);
});

// Simple parallax effect - Awakening section
document.addEventListener('DOMContentLoaded', function() {
  const bg = document.querySelector('.warrior-bg');
  if (!bg) return;

  function moveParallax() {
    const scrolled = window.pageYOffset;
    const panel = bg.closest('.panel');
    const panelTop = panel.getBoundingClientRect().top + window.pageYOffset;
    const panelHeight = panel.offsetHeight;
    // Only apply when in viewport
    if (scrolled > panelTop - window.innerHeight && scrolled < panelTop + panelHeight) {
      const yPos = (scrolled - panelTop) * 0.3;
      bg.style.transform = `translateY(${yPos}px)`;
    }
  }
  window.addEventListener('scroll', moveParallax);
  moveParallax(); // Initial position
});

// Parallax scrolling effect for awakening background
document.addEventListener('DOMContentLoaded', function() {
  const awakeningBg = document.querySelector('.awakening-bg');
  if (!awakeningBg) return;

  function updateAwakeningParallax() {
    const scrollPosition = window.pageYOffset;
    const section = document.getElementById('awakening');
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    // Only apply when in viewport
    if (scrollPosition > sectionTop - window.innerHeight &&
      scrollPosition < sectionTop + sectionHeight) {
      const yPos = (scrollPosition - sectionTop) * 0.3;
      awakeningBg.style.transform = `translateY(${yPos}px)`;
    }
  }
  // Initial update
  updateAwakeningParallax();
  // Update on scroll
  window.addEventListener('scroll', updateAwakeningParallax);
  // Update on resize
  window.addEventListener('resize', updateAwakeningParallax);
});

// Parallax scrolling effect for the temple background
document.addEventListener('DOMContentLoaded', function() {
  const parallaxBg = document.querySelector('.parallax-bg');
  if (!parallaxBg) return;
  
  function updateParallax() {
    const scrollPosition = window.pageYOffset;
    const element = parallaxBg.parentElement;
    const rect = element.getBoundingClientRect();
    // Only apply parallax when element is in viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const offset = (scrollPosition - (rect.top + window.pageYOffset)) * 0.3;
      // Use transform for better performance
      parallaxBg.style.transform = `translateY(${offset}px)`;
    }
  }
  
  // Initial update
  updateParallax();
  // Update on scroll
  window.addEventListener('scroll', updateParallax);
  // Update on resize
  window.addEventListener('resize', updateParallax);
});
