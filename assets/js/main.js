// NAZUMI RONIN V1.2
document.addEventListener('DOMContentLoaded', function() {
  // Splash screen plays a short loading animation, then opens the site
  const splashScreen = document.getElementById('splashScreen');
  const body = document.body;
  document.body.style.overflow = 'hidden';

  function dismissSplash() {
    splashScreen.classList.add('is-leaving');
    setTimeout(() => {
      splashScreen.style.display = 'none';
      splashScreen.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = 'auto';
    }, 650);
  }

  setTimeout(dismissSplash, 2500);
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
    console.log('NAZUMI RONIN V1.2');
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
      e.stopPropagation();
      console.log('Floating buy button clicked');
      openBuyPanel();
    });
    // Also add touch event for mobile
    floatingBuyBtn.addEventListener('touchstart', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Floating buy button touched');
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
// Solana wallet connection for the buy-panel buttons.
// Providers are injected by the Phantom, Solflare, and Backpack extensions.
const WALLET_PROVIDERS = {
    phantom: {
        name: 'Phantom',
        installUrl: 'https://phantom.app/download',
        getProvider() {
            // Check window.phantom.solana first (newer Phantom versions)
            let provider = window.phantom?.solana;
            if (provider && typeof provider.connect === 'function') return provider;

            // Check window.solana (older Phantom, shared object)
            provider = window.solana;
            if (provider && typeof provider.connect === 'function') {
                // Try to identify if it's Phantom by checking isPhantom flag
                if (provider.isPhantom === true) return provider;
                // If no isPhantom flag, assume it might be Phantom if window.phantom exists
                if (window.phantom) return provider;
            }

            return null;
        }
    },
    solflare: {
        name: 'Solflare',
        installUrl: 'https://solflare.com/download',
        getProvider() {
            const provider = window.solflare;
            if (provider && typeof provider.connect === 'function') return provider;
            return null;
        }
    },
    backpack: {
        name: 'Backpack',
        installUrl: 'https://www.backpack.app/download',
        getProvider() {
            // Check window.backpack first
            let provider = window.backpack;
            if (provider && typeof provider.connect === 'function') return provider;

            // Check window.backpack.solana
            provider = window.backpack?.solana;
            if (provider && typeof provider.connect === 'function') return provider;

            return null;
        }
    },
    exodus: {
        name: 'Exodus',
        installUrl: 'https://www.exodus.com/download',
        getProvider() {
            // Exodus injects as window.exodus or window.exodusWallet
            const provider = window.exodus || window.exodusWallet;
            if (provider && typeof provider.connect === 'function') return provider;
            return null;
        }
    },
    ledger: {
        name: 'Ledger',
        installUrl: 'https://www.ledger.com/',
        getProvider() {
            // Ledger Live injects as window.ledger or window.ledgerWallet
            const provider = window.ledger || window.ledgerWallet;
            if (provider && typeof provider.connect === 'function') return provider;
            return null;
        }
    },
    trezor: {
        name: 'Trezor',
        installUrl: 'https://trezor.io/',
        getProvider() {
            // Trezor injects as window.trezor or window.trezorWallet
            const provider = window.trezor || window.trezorWallet;
            if (provider && typeof provider.connect === 'function') return provider;
            return null;
        }
    },
    'trust-wallet': {
        name: 'Trust Wallet',
        installUrl: 'https://trustwallet.com/download',
        getProvider() {
            // Trust Wallet injects as window.trustWallet or window.trustwallet
            const provider = window.trustWallet || window.trustwallet;
            if (provider && typeof provider.connect === 'function') return provider;
            return null;
        }
    },
    tiplink: {
        name: 'TipLink',
        installUrl: 'https://tiplink.io',
        getProvider() {
            // TipLink injects as window.tiplink or window.tiplinkWallet
            const provider = window.tiplink || window.tiplinkWallet;
            if (provider && typeof provider.connect === 'function') return provider;
            return null;
        }
    },
    'jupiter-wallet': {
        name: 'Jupiter Wallet',
        installUrl: 'https://jup.ag',
        getProvider() {
            // Jupiter Wallet injects as window.jupiterWallet or window.jupiter
            const provider = window.jupiterWallet || window.jupiter;
            if (provider && typeof provider.connect === 'function') return provider;
            return null;
        }
    },
    coin98: {
        name: 'Coin98',
        installUrl: 'https://coin98.com/wallet',
        getProvider() {
            // Coin98 injects as window.coin98Wallet or window.coin98
            const provider = window.coin98Wallet || window.coin98;
            if (provider && typeof provider.connect === 'function') return provider;
            return null;
        }
    }
};

const ADDRESS_PATTERN = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

const walletConnection = {
    wallet: null,
    walletType: null,
    publicKey: null,
    connected: false,
    busy: false,
    pendingType: null,
    suppressEvents: false,
    boundProvider: null,
    onDisconnect: null,
    onAccountChanged: null,

    async init() {
        this.bindButtons();
        this.renderButtons();
        this.watchForProviders();
        await this.restoreSession();
    },

    bindButtons() {
        document.querySelectorAll('.wallet-action-btn').forEach((button) => {
            button.addEventListener('click', () => {
                this.onButtonClick(button);
            });
        });
    },

    async onButtonClick(button) {
        const walletType = button.dataset.wallet;
        const config = WALLET_PROVIDERS[walletType];
        if (!config || this.busy) return;

        if (this.connected && this.walletType === walletType) {
            await this.disconnect();
            return;
        }

        if (!config.getProvider()) {
            const url = button.dataset.installUrl || config.installUrl;
            window.open(url, '_blank', 'noopener,noreferrer');
            return;
        }

        await this.connectWallet(walletType);
    },

    watchForProviders() {
        const refresh = () => {
            if (!this.busy) this.renderButtons();
        };
        window.addEventListener('load', refresh);
        window.addEventListener('focus', refresh);
        window.addEventListener('solana#initialized', refresh);
        window.addEventListener('phantom#initialized', refresh);
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') refresh();
        });

        let tries = 0;
        const timer = setInterval(() => {
            tries += 1;
            refresh();
            const allFound = Object.keys(WALLET_PROVIDERS).every((type) => WALLET_PROVIDERS[type].getProvider());
            if (allFound || tries >= 20) clearInterval(timer);
        }, 200);
    },

    async restoreSession() {
        const lastWallet = localStorage.getItem('lastConnectedWallet');
        if (!WALLET_PROVIDERS[lastWallet]) return;

        const provider = await this.waitForProvider(lastWallet, 2500);
        if (!provider) {
            localStorage.removeItem('lastConnectedWallet');
            this.renderButtons();
            return;
        }
        if (this.connected || this.busy) return;

        // onlyIfTrusted reconnects without a popup. A rejection means this site is not trusted.
        await this.connectWallet(lastWallet, { onlyIfTrusted: true, announce: false });
    },

    waitForProvider(walletType, timeout) {
        const existing = WALLET_PROVIDERS[walletType]?.getProvider();
        if (existing) return Promise.resolve(existing);

        return new Promise((resolve) => {
            const started = Date.now();
            const timer = setInterval(() => {
                const provider = WALLET_PROVIDERS[walletType]?.getProvider() || null;
                if (provider || Date.now() - started >= timeout) {
                    clearInterval(timer);
                    resolve(provider);
                }
            }, 100);
        });
    },

    async connectWallet(walletType, { onlyIfTrusted = false, announce = true } = {}) {
        const config = WALLET_PROVIDERS[walletType];
        if (!config || this.busy) return;

        const provider = config.getProvider();
        if (!provider) {
            if (!onlyIfTrusted) {
                window.open(config.installUrl, '_blank', 'noopener,noreferrer');
                this.showError(`Install ${config.name} to connect`);
            }
            return;
        }

        this.pendingType = walletType;
        this.busy = true;
        this.renderButtons();
        try {
            if (this.connected && this.walletType && this.walletType !== walletType) {
                await this.disconnect({ announce: false, keepBusy: true });
            }

            const publicKey = await this.requestPublicKey(provider, { onlyIfTrusted });
            if (!publicKey) throw new Error('Wallet did not return an address');

            this.wallet = provider;
            this.walletType = walletType;
            this.publicKey = publicKey;
            this.connected = true;
            localStorage.setItem('lastConnectedWallet', walletType);
            this.bindProvider(provider);
            this.renderButtons();
            if (announce) this.showSuccess(`${config.name} connected`);

            // Dispatch custom event for other components
            window.dispatchEvent(new CustomEvent('walletConnected', { detail: { publicKey } }));
        } catch (error) {
            if (onlyIfTrusted) {
                if (!this.connected) localStorage.removeItem('lastConnectedWallet');
            } else if (this.isRejection(error)) {
                this.showError('Connection cancelled');
            } else {
                console.error('Wallet connection error:', error);
                this.showError(this.messageFor(error, config.name));
            }
            this.renderButtons();
        } finally {
            this.busy = false;
            this.pendingType = null;
            this.renderButtons();
        }
    },

    async requestPublicKey(provider, { onlyIfTrusted }) {
        const response = onlyIfTrusted
            ? await provider.connect({ onlyIfTrusted: true })
            : await provider.connect();

        const immediate = this.readPublicKey(provider, response);
        if (immediate) return immediate;

        return new Promise((resolve) => {
            let settled = false;
            const finish = () => {
                if (settled) return;
                settled = true;
                resolve(this.readPublicKey(provider, response));
            };
            const timer = setTimeout(() => {
                provider.removeListener?.('connect', onConnect);
                provider.off?.('connect', onConnect);
                finish();
            }, 400);
            const onConnect = () => {
                clearTimeout(timer);
                provider.removeListener?.('connect', onConnect);
                provider.off?.('connect', onConnect);
                finish();
            };
            if (typeof provider.once === 'function') provider.once('connect', onConnect);
            else if (typeof provider.on === 'function') provider.on('connect', onConnect);
            else finish();
        });
    },

    readPublicKey(provider, response) {
        return this.toAddress(response?.publicKey)
            || this.toAddress(provider?.publicKey)
            || this.toAddress(response);
    },

    toAddress(value) {
        if (!value) return null;
        let encoded = null;
        if (typeof value === 'string') encoded = value;
        else if (typeof value.toBase58 === 'function') encoded = value.toBase58();
        else if (typeof value.toString === 'function' && value.toString !== Object.prototype.toString) {
            encoded = value.toString();
        }
        if (!encoded || !ADDRESS_PATTERN.test(encoded)) return null;
        return encoded;
    },

    bindProvider(provider) {
        this.unbindProvider();
        this.boundProvider = provider;
        this.onDisconnect = () => {
            if (this.suppressEvents) return;
            this.clearSession({ announce: true });
            window.dispatchEvent(new CustomEvent('walletDisconnected'));
        };
        this.onAccountChanged = (nextKey) => {
            if (this.suppressEvents) return;
            const nextAddress = this.toAddress(nextKey);
            if (!nextAddress) {
                this.clearSession({ announce: true });
                window.dispatchEvent(new CustomEvent('walletDisconnected'));
                return;
            }
            if (nextAddress === this.publicKey) return;
            this.publicKey = nextAddress;
            this.renderButtons();
            window.dispatchEvent(new CustomEvent('walletConnected', { detail: { publicKey: nextAddress } }));
        };
        provider.on?.('disconnect', this.onDisconnect);
        provider.on?.('accountChanged', this.onAccountChanged);
    },

    unbindProvider() {
        const provider = this.boundProvider;
        if (provider) {
            if (this.onDisconnect) {
                provider.removeListener?.('disconnect', this.onDisconnect);
                provider.off?.('disconnect', this.onDisconnect);
            }
            if (this.onAccountChanged) {
                provider.removeListener?.('accountChanged', this.onAccountChanged);
                provider.off?.('accountChanged', this.onAccountChanged);
            }
        }
        this.boundProvider = null;
        this.onDisconnect = null;
        this.onAccountChanged = null;
    },

    async disconnect({ announce = true, keepBusy = false } = {}) {
        if (!keepBusy) {
            if (this.busy) return;
            this.pendingType = null;
            this.busy = true;
            this.renderButtons();
        }
        const provider = this.wallet;
        this.suppressEvents = true;
        try {
            if (typeof provider?.disconnect === 'function') await provider.disconnect();
        } catch (error) {
            console.error('Wallet disconnect error:', error);
        } finally {
            this.suppressEvents = false;
            if (!keepBusy) this.busy = false;
        }
        this.clearSession({ announce });
    },

    clearSession({ announce = false } = {}) {
        const wasConnected = this.connected;
        this.unbindProvider();
        this.wallet = null;
        this.walletType = null;
        this.publicKey = null;
        this.connected = false;
        localStorage.removeItem('lastConnectedWallet');
        this.renderButtons();
        if (announce && wasConnected) this.showSuccess('Wallet disconnected');

        // Dispatch custom event for other components
        if (wasConnected) {
            window.dispatchEvent(new CustomEvent('walletDisconnected'));
        }
    },

    renderButtons() {
        Object.keys(WALLET_PROVIDERS).forEach((walletType) => {
            const button = document.getElementById(`wallet-btn-${walletType}`);
            if (!button) return;

            const config = WALLET_PROVIDERS[walletType];
            const installed = Boolean(config.getProvider());
            const isConnectedWallet = this.connected && this.walletType === walletType;

            button.classList.remove('connected');
            button.disabled = this.busy;
            button.removeAttribute('title');
            button.removeAttribute('aria-label');

            if (this.busy && this.pendingType === walletType && !isConnectedWallet) {
                button.textContent = 'Connecting…';
                button.dataset.state = 'connecting';
                return;
            }

            if (isConnectedWallet && this.publicKey) {
                const shortAddress = `${this.publicKey.slice(0, 4)}…${this.publicKey.slice(-4)}`;
                button.textContent = shortAddress;
                button.classList.add('connected');
                button.dataset.state = 'connected';
                button.title = `Disconnect ${config.name}`;
                button.setAttribute('aria-label', `Disconnect ${config.name}, ${shortAddress}`);
                return;
            }

            button.removeAttribute('aria-label');
            if (installed) {
                button.textContent = 'Connect';
                button.dataset.state = 'ready';
            } else {
                button.textContent = 'Install';
                button.dataset.state = 'missing';
            }
        });
    },

    isRejection(error) {
        const code = error?.code;
        const message = String(error?.message || '');
        return code === 4001 || /reject|cancel|denied/i.test(message);
    },

    messageFor(error, walletName) {
        const code = error?.code;
        const message = String(error?.message || '');
        if (code === -32002 || /already pending|already processing/i.test(message)) {
            return 'A connection request is already open in your wallet';
        }
        return `Couldn't connect ${walletName}. Try again.`;
    },

    showSuccess(message) {
        this.showToast(message, 'success-toast');
    },

    showError(message) {
        this.showToast(message, 'error-toast');
    },

    showToast(message, className) {
        const toast = document.createElement('div');
        toast.className = className;
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
};

// Initialize wallet connection system
document.addEventListener('DOMContentLoaded', () => {
    walletConnection.init();
});

// Jupiter Swap API V2 (Meta-Aggregator path): GET /order returns a routed
// quote plus a ready-to-sign transaction; POST /execute lands it with managed
// execution. Docs: https://developers.jup.ag/docs/swap
const jupiterSwap = {
    // Token registry: mint address + decimals (amounts are sent in base units)
    tokens: {
        SOL: { mint: 'So11111111111111111111111111111111111111112', decimals: 9 },
        USDC: { mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', decimals: 6 },
        USDT: { mint: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB', decimals: 6 },
        JUP: { mint: 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN', decimals: 6 },
        ORCA: { mint: 'orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE', decimals: 6 },
        RENDER: { mint: 'rndrizKT3MK1iimdxRdWabcF7ZG7X841ZDYduhS1us', decimals: 8 },
        NAZUMI: { mint: 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN', decimals: 6 } // TEST: Using JUP for testing - replace with actual NAZUMI mint after launch
    },

    API_BASE: 'https://api.jup.ag/swap/v2',
    SLIPPAGE_BPS: 100, // 1%

    elements: {
        inputAmount: null,
        outputAmount: null,
        inputToken: null,
        outputToken: null,
        swapButton: null,
        swapButtonText: null,
        quoteInfo: null,
        quotePrice: null,
        quotePriceImpact: null,
        quoteMinReceived: null,
        swapStatus: null,
        swapDirectionBtn: null
    },

    currentQuote: null,
    debounceTimer: null,

    init() {
        // Get DOM elements
        this.elements.inputAmount = document.getElementById('swapInputAmount');
        this.elements.outputAmount = document.getElementById('swapOutputAmount');
        this.elements.inputToken = document.getElementById('swapInputToken');
        this.elements.outputToken = document.getElementById('swapOutputToken');
        this.elements.swapButton = document.getElementById('swapButton');
        this.elements.swapButtonText = document.getElementById('swapButtonText');
        this.elements.quoteInfo = document.getElementById('swapQuoteInfo');
        this.elements.quotePrice = document.getElementById('quotePrice');
        this.elements.quotePriceImpact = document.getElementById('quotePriceImpact');
        this.elements.quoteMinReceived = document.getElementById('quoteMinReceived');
        this.elements.swapStatus = document.getElementById('swapStatus');
        this.elements.swapDirectionBtn = document.getElementById('swapDirectionBtn');

        if (!this.elements.inputAmount || !this.elements.swapButton) return;

        // Bind events
        this.elements.inputAmount.addEventListener('input', (e) => this.onInputChange(e));
        this.elements.swapButton.addEventListener('click', () => this.executeSwap());
        this.elements.swapDirectionBtn.addEventListener('click', () => this.toggleSwapDirection());
        this.elements.inputToken.addEventListener('change', () => this.onTokenChange());
        this.elements.outputToken.addEventListener('change', () => this.onTokenChange());

        // Update button state based on wallet connection
        this.updateButtonState();

        // Listen for wallet connection changes
        window.addEventListener('walletConnected', () => {
            this.updateButtonState();
            // Re-quote with a taker so the response includes a transaction
            if (this.elements.inputAmount.value) {
                const amount = parseFloat(this.elements.inputAmount.value);
                if (amount > 0) this.getQuote(amount);
            }
        });
        window.addEventListener('walletDisconnected', () => this.updateButtonState());
    },

    toggleSwapDirection() {
        // Clear current quote
        this.currentQuote = null;
        this.elements.inputAmount.value = '';
        this.elements.outputAmount.value = '';
        this.elements.quoteInfo.style.display = 'none';

        // Swap token selections
        const tempToken = this.elements.inputToken.value;
        this.elements.inputToken.value = this.elements.outputToken.value;
        this.elements.outputToken.value = tempToken;

        this.updateButtonState();
    },

    onTokenChange() {
        // Clear current quote when tokens change
        this.currentQuote = null;
        this.elements.inputAmount.value = '';
        this.elements.outputAmount.value = '';
        this.elements.quoteInfo.style.display = 'none';
        this.updateButtonState();
    },

    updateButtonState() {
        if (!walletConnection.connected) {
            this.elements.swapButton.disabled = true;
            this.elements.swapButtonText.textContent = 'Connect Wallet to Swap';
        } else {
            const hasAmount = parseFloat(this.elements.inputAmount.value) > 0;
            const executable = this.currentQuote && this.currentQuote.transaction;
            this.elements.swapButton.disabled = !(hasAmount && executable);
            const inputToken = this.elements.inputToken.value;
            const outputToken = this.elements.outputToken.value;
            this.elements.swapButtonText.textContent = executable
                ? `Swap ${inputToken} for ${outputToken}`
                : hasAmount
                    ? 'Fetching quote…'
                    : 'Enter Amount to Swap';
        }
    },

    onInputChange(e) {
        const amount = parseFloat(e.target.value);

        // Clear previous quote
        this.currentQuote = null;
        this.elements.outputAmount.value = '';
        this.elements.quoteInfo.style.display = 'none';

        // Update button state
        this.updateButtonState();

        if (!amount || amount <= 0) return;

        // Debounce quote request
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => this.getQuote(amount), 500);
    },

    base64ToBytes(base64) {
        const binary = atob(base64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        return bytes;
    },

    bytesToBase64(bytes) {
        let binary = '';
        for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
        return btoa(binary);
    },

    formatAmount(baseUnits, decimals, maxFrac = 6) {
        const value = Number(baseUnits) / 10 ** decimals;
        if (!isFinite(value)) return '0';
        // Avoid noisy long decimals but keep small amounts readable
        return value.toLocaleString('en-US', { maximumFractionDigits: maxFrac });
    },

    async getQuote(amount) {
        try {
            this.showStatus('loading', 'Fetching quote...');

            const inputToken = this.elements.inputToken.value;
            const outputToken = this.elements.outputToken.value;

            const input = this.tokens[inputToken];
            const output = this.tokens[outputToken];

            if (!input || !output) {
                throw new Error('Invalid token selection');
            }
            if (inputToken === outputToken) {
                throw new Error('Input and output tokens must differ');
            }
            if (input.mint === output.mint) {
                throw new Error('Input and output tokens must differ');
            }

            // ExactIn mode: `amount` is the input amount in base units
            const amountBaseUnits = Math.floor(amount * 10 ** input.decimals);
            if (amountBaseUnits <= 0) return;

            const params = new URLSearchParams({
                inputMint: input.mint,
                outputMint: output.mint,
                amount: amountBaseUnits.toString(),
                swapMode: 'ExactIn',
                slippageBps: this.SLIPPAGE_BPS.toString(),
                // web3.js 1.x can only deserialize/sign v0 transactions
                maxSupportedTransactionVersion: '0'
            });
            // taker is optional: without it Jupiter returns a quote only,
            // no transaction. Include it when a wallet is connected.
            if (walletConnection.connected && walletConnection.publicKey) {
                params.set('taker', walletConnection.publicKey);
            }

            console.log('Jupiter API Request:', {
                url: `${this.API_BASE}/order?${params}`,
                inputMint: input.mint,
                outputMint: output.mint,
                amount: amountBaseUnits.toString()
            });

            const response = await fetch(`${this.API_BASE}/order?${params}`);
            
            console.log('Jupiter API Response Status:', response.status, response.statusText);
            
            const quote = await response.json().catch(() => ({}));
            
            console.log('Jupiter API Response:', quote);

            if (!response.ok) {
                throw new Error(quote.error || `Quote request failed (${response.status}): ${JSON.stringify(quote)}`);
            }

            this.currentQuote = quote;
            this.displayQuote(quote, amount, inputToken, outputToken, input, output);

            // Transaction is only present when taker was sent and could be built
            if (!walletConnection.connected) {
                this.showStatus('info', 'Connect a wallet to execute this swap');
                return;
            }
            if (!quote.transaction) {
                this.showStatus('error', quote.errorMessage || quote.error || 'Quote found but no transaction could be built');
                return;
            }
            this.hideStatus();

        } catch (error) {
            console.error('Quote error:', error);
            console.error('Error details:', {
                message: error.message,
                stack: error.stack,
                name: error.name
            });
            this.showStatus('error', error.message || 'Failed to fetch quote. Please try again.');
        }
    },

    displayQuote(quote, inputAmount, inputToken, outputToken, input, output) {
        const outAmount = this.formatAmount(quote.outAmount, output.decimals);
        this.elements.outputAmount.value = outAmount;

        this.elements.quoteInfo.style.display = 'block';

        const price = Number(quote.inUsdValue) > 0 && Number(quote.outUsdValue) > 0
            ? (Number(quote.inUsdValue) / Number(quote.outUsdValue))
            : inputAmount / (Number(quote.outAmount) / 10 ** output.decimals);
        this.elements.quotePrice.textContent = `${price.toFixed(6)} ${inputToken}/${outputToken}`;

        // priceImpact is in percentage points (e.g. -0.1 = -0.1%)
        const impact = Number(quote.priceImpact);
        this.elements.quotePriceImpact.textContent = isFinite(impact)
            ? `${impact.toFixed(2)}%`
            : '-';

        // Minimum output after slippage
        const minReceived = this.formatAmount(quote.otherAmountThreshold, output.decimals);
        this.elements.quoteMinReceived.textContent = `${minReceived} ${outputToken}`;

        this.updateButtonState();
    },

    async executeSwap() {
        if (!walletConnection.connected || !walletConnection.wallet) {
            this.showStatus('error', 'Connect a wallet first');
            return;
        }
        if (!this.currentQuote || !this.currentQuote.transaction) {
            this.showStatus('error', 'No executable quote. Enter an amount and wait for a quote.');
            return;
        }

        try {
            this.showStatus('loading', 'Preparing transaction...');

            const { VersionedTransaction } = window.solanaWeb3;
            if (!VersionedTransaction) {
                throw new Error('Solana web3.js not loaded');
            }
            if (Number(this.currentQuote.transactionVersion) !== 0) {
                throw new Error('This quote returned an unsupported transaction version. Try again.');
            }

            const transaction = VersionedTransaction.deserialize(
                this.base64ToBytes(this.currentQuote.transaction)
            );

            this.showStatus('loading', 'Confirm in your wallet...');
            const signedTransaction = await walletConnection.wallet.signTransaction(transaction);
            const signedTxBase64 = this.bytesToBase64(signedTransaction.serialize());

            this.showStatus('loading', 'Executing swap...');

            const executeResponse = await fetch(`${this.API_BASE}/execute`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    signedTransaction: signedTxBase64,
                    requestId: this.currentQuote.requestId,
                    lastValidBlockHeight: this.currentQuote.lastValidBlockHeight
                })
            });

            const result = await executeResponse.json().catch(() => ({}));

            if (!executeResponse.ok) {
                throw new Error(result.error || `Execution failed (${executeResponse.status})`);
            }

            if (result.status === 'Success') {
                const inputToken = this.elements.inputToken.value;
                const outputToken = this.elements.outputToken.value;
                const sig = result.signature ? ` Tx: ${result.signature.slice(0, 8)}...` : '';
                this.showStatus('success', `Swap successful!${sig}`);
                window.open(`https://solscan.io/tx/${result.signature}`, '_blank', 'noopener,noreferrer');
                this.elements.inputAmount.value = '';
                this.elements.outputAmount.value = '';
                this.elements.quoteInfo.style.display = 'none';
                this.currentQuote = null;
                this.updateButtonState();
            } else {
                throw new Error(result.error || `Swap failed (code ${result.code ?? 'unknown'})`);
            }

        } catch (error) {
            console.error('Swap error:', error);
            this.showStatus('error', `Swap failed: ${error.message}`);
        }
    },

    showStatus(type, message) {
        this.elements.swapStatus.className = `swap-status ${type}`;
        this.elements.swapStatus.textContent = message;
        this.elements.swapStatus.style.display = 'block';
    },

    hideStatus() {
        this.elements.swapStatus.className = 'swap-status';
        this.elements.swapStatus.style.display = 'none';
    }
};

// Initialize Jupiter swap
document.addEventListener('DOMContentLoaded', () => {
    jupiterSwap.init();
});

// Nazumi Ronin Staking
// Requires a deployed staking program. Set STAKING_PROGRAM_ID (and STAKING_VAULT
// if the program uses one) once the contract is live — the UI activates itself.
const nazumiStaking = {
    STAKING_PROGRAM_ID: '',   // e.g. 'Stake111...' — TODO: deployed program
    STAKING_VAULT: '',        // TODO: program vault/stake authority if required
    APY_PERCENT: 12.5,        // displayed APY until on-chain params exist

    RPC_URL: 'https://api.mainnet-beta.solana.com',

    elements: {},

    stakedBalance: 0,
    pendingRewards: 0,

    init() {
        this.elements.inputAmount = document.getElementById('stakeInputAmount');
        this.elements.stakeButton = document.getElementById('stakeButton');
        this.elements.stakeButtonText = document.getElementById('stakeButtonText');
        this.elements.unstakeButton = document.getElementById('unstakeButton');
        this.elements.unstakeButtonText = document.getElementById('unstakeButtonText');
        this.elements.status = document.getElementById('stakeStatus');
        this.elements.apy = document.getElementById('stakeApy');
        this.elements.balance = document.getElementById('stakeBalance');
        this.elements.rewards = document.getElementById('stakeRewards');
        this.elements.tabStake = document.getElementById('tabStakeMode');
        this.elements.tabUnstake = document.getElementById('tabUnstakeMode');
        this.elements.boxLabel = document.getElementById('stakeBoxLabel');

        if (!this.elements.inputAmount || !this.elements.stakeButton) return;

        // Mode tabs
        if (this.elements.tabStake && this.elements.tabUnstake) {
            this.elements.tabStake.addEventListener('click', () => this.setMode('stake'));
            this.elements.tabUnstake.addEventListener('click', () => this.setMode('unstake'));
        }

        // Percentage preset buttons
        document.querySelectorAll('.stake-preset-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const pct = parseInt(e.currentTarget.dataset.pct, 10);
                this.applyPreset(pct);
            });
        });

        // Slippage selector buttons for swap
        document.querySelectorAll('.jup-slippage-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.jup-slippage-btn').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                const bps = parseInt(e.currentTarget.dataset.slippage, 10);
                jupiterSwap.SLIPPAGE_BPS = bps;
                if (jupiterSwap.elements.inputAmount && jupiterSwap.elements.inputAmount.value) {
                    const amount = parseFloat(jupiterSwap.elements.inputAmount.value);
                    if (amount > 0) jupiterSwap.getQuote(amount);
                }
            });
        });

        // Half / Max for swap
        const swapHalfBtn = document.getElementById('swapHalfBtn');
        const swapMaxBtn = document.getElementById('swapMaxBtn');
        if (swapHalfBtn) {
            swapHalfBtn.addEventListener('click', () => {
                if (jupiterSwap.elements.inputAmount) {
                    jupiterSwap.elements.inputAmount.value = '0.5';
                    jupiterSwap.onInputChange({ target: jupiterSwap.elements.inputAmount });
                }
            });
        }
        if (swapMaxBtn) {
            swapMaxBtn.addEventListener('click', () => {
                if (jupiterSwap.elements.inputAmount) {
                    jupiterSwap.elements.inputAmount.value = '1.0';
                    jupiterSwap.onInputChange({ target: jupiterSwap.elements.inputAmount });
                }
            });
        }

        this.elements.stakeButton.addEventListener('click', () => this.stake());
        this.elements.unstakeButton.addEventListener('click', () => this.unstake());
        this.elements.inputAmount.addEventListener('input', () => this.updateButtonState());

        this.elements.apy.textContent = `${this.APY_PERCENT}%`;

        this.updateButtonState();
        window.addEventListener('walletConnected', () => {
            this.updateButtonState();
            this.refreshState();
        });
        window.addEventListener('walletDisconnected', () => {
            this.stakedBalance = 0;
            this.pendingRewards = 0;
            this.renderState();
            this.updateButtonState();
        });
    },

    get configured() {
        return Boolean(this.STAKING_PROGRAM_ID) &&
               jupiterSwap.tokens.NAZUMI.mint &&
               !jupiterSwap.tokens.NAZUMI.mint.includes('PLACEHOLDER');
    },

    setMode(mode) {
        if (mode === 'stake') {
            this.elements.tabStake.classList.add('active');
            this.elements.tabUnstake.classList.remove('active');
            this.elements.boxLabel.textContent = 'Amount to Stake';
            this.elements.stakeButton.style.display = 'block';
            this.elements.unstakeButton.style.display = 'none';
        } else {
            this.elements.tabStake.classList.remove('active');
            this.elements.tabUnstake.classList.add('active');
            this.elements.boxLabel.textContent = 'Amount to Unstake';
            this.elements.stakeButton.style.display = 'none';
            this.elements.unstakeButton.style.display = 'block';
        }
        this.updateButtonState();
    },

    applyPreset(pct) {
        // If user has balance / staked balance, fill percentage; default mock to 1000 for preview
        const base = this.stakedBalance > 0 ? this.stakedBalance : 1000;
        const val = ((base * pct) / 100).toFixed(2);
        this.elements.inputAmount.value = val;
        this.updateButtonState();
    },

    updateButtonState() {
        const connected = walletConnection.connected;
        const amount = parseFloat(this.elements.inputAmount.value) || 0;
        const hasAmount = amount > 0;

        if (!this.configured) {
            this.elements.stakeButton.disabled = true;
            this.elements.stakeButtonText.textContent = 'Staking Soon';
            this.elements.unstakeButton.disabled = true;
            this.elements.unstakeButtonText.textContent = 'Unstake';
            return;
        }

        this.elements.stakeButton.disabled = !(connected && hasAmount);
        this.elements.stakeButtonText.textContent = !connected
            ? 'Connect Wallet to Stake'
            : hasAmount ? `Stake ${amount} NAZUMI` : 'Enter Amount to Stake';

        this.elements.unstakeButton.disabled = !(connected && this.stakedBalance > 0);
        this.elements.unstakeButtonText.textContent = this.stakedBalance > 0
            ? `Unstake ${this.formatAmount(this.stakedBalance)}`
            : 'Nothing Staked';
    },

    async refreshState() {
        // TODO: once STAKING_PROGRAM_ID is set, query the stake account for
        // this wallet (program-specific — e.g. getAccountInfo / getTokenAccountsByOwner)
        // and populate stakedBalance / pendingRewards, then call renderState().
        if (!this.configured || !walletConnection.connected) return;
        this.renderState();
        this.updateButtonState();
    },

    renderState() {
        const decimals = jupiterSwap.tokens.NAZUMI.decimals;
        this.elements.balance.textContent = this.stakedBalance > 0
            ? this.formatAmount(this.stakedBalance)
            : '0';
        this.elements.rewards.textContent = this.pendingRewards > 0
            ? this.formatAmount(this.pendingRewards)
            : '0';
    },

    formatAmount(baseUnits) {
        const decimals = jupiterSwap.tokens.NAZUMI.decimals;
        const value = Number(baseUnits) / 10 ** decimals;
        return isFinite(value)
            ? value.toLocaleString('en-US', { maximumFractionDigits: 6 })
            : '0';
    },

    async stake() {
        if (!this.configured) {
            this.showStatus('info', 'Staking opens when the NAZUMI contract is deployed.');
            return;
        }
        try {
            const amount = parseFloat(this.elements.inputAmount.value);
            if (!walletConnection.connected || !amount || amount <= 0) return;

            // TODO: build the stake instruction(s) for the deployed program,
            // wrap in a VersionedTransaction, sign via walletConnection.wallet,
            // and send through the wallet's sendTransaction or an RPC endpoint.
            throw new Error('Stake instructions pending — set STAKING_PROGRAM_ID and wire the program.');
        } catch (error) {
            this.showStatus('error', `Stake failed: ${error.message}`);
        }
    },

    async unstake() {
        if (!this.configured) {
            this.showStatus('info', 'Staking opens when the NAZUMI contract is deployed.');
            return;
        }
        try {
            if (!walletConnection.connected || this.stakedBalance <= 0) return;

            // TODO: build the unstake/claim instruction(s) — see stake().
            throw new Error('Unstake instructions pending — set STAKING_PROGRAM_ID and wire the program.');
        } catch (error) {
            this.showStatus('error', `Unstake failed: ${error.message}`);
        }
    },

    showStatus(type, message) {
        this.elements.status.className = `swap-status ${type}`;
        this.elements.status.textContent = message;
        this.elements.status.style.display = 'block';
    }
};

// Nazumi Ronin Staking - Disabled in favor of StakePoint integration
// Custom staking UI replaced with link to staking.html
// document.addEventListener('DOMContentLoaded', () => {
//     nazumiStaking.init();
// });

// More Wallets Dropdown Toggle
document.addEventListener('DOMContentLoaded', () => {
    const moreWalletsToggle = document.getElementById('moreWalletsToggle');
    const moreWalletsDropdown = document.getElementById('moreWalletsDropdown');
    const moreWalletsIcon = document.getElementById('moreWalletsIcon');

    if (moreWalletsToggle && moreWalletsDropdown) {
        moreWalletsToggle.addEventListener('click', () => {
            moreWalletsDropdown.classList.toggle('active');
            moreWalletsToggle.classList.toggle('active');
        });
    }
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

// FAQ accordion
function toggleFaq(element) {
  const faqItem = element.parentElement;
  const isOpen = faqItem.classList.contains('open');

  // Close all FAQ items
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('open');
  });

  // Open clicked item if it was closed
  if (!isOpen) {
    faqItem.classList.add('open');
  }
}
