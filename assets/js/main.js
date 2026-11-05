// NAZUMI RONIN V6 - Enhanced Performance & Splash Screen
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

// Jupiter Swap Integration
const jupiterSwap = {
    // Placeholder mint addresses - replace with actual NAZUMI mint address
    SOL_MINT: 'So11111111111111111111111111111111111111112',
    NAZUMI_MINT: 'NAZUMI_PLACEHOLDER_MINT_ADDRESS', // Replace with actual mint
    API_BASE: 'https://api.jup.ag/swap/v2',

    elements: {
        inputAmount: null,
        outputAmount: null,
        swapButton: null,
        swapButtonText: null,
        quoteInfo: null,
        quotePrice: null,
        quotePriceImpact: null,
        quoteMinReceived: null,
        swapStatus: null
    },

    currentQuote: null,
    debounceTimer: null,

    init() {
        // Get DOM elements
        this.elements.inputAmount = document.getElementById('swapInputAmount');
        this.elements.outputAmount = document.getElementById('swapOutputAmount');
        this.elements.swapButton = document.getElementById('swapButton');
        this.elements.swapButtonText = document.getElementById('swapButtonText');
        this.elements.quoteInfo = document.getElementById('swapQuoteInfo');
        this.elements.quotePrice = document.getElementById('quotePrice');
        this.elements.quotePriceImpact = document.getElementById('quotePriceImpact');
        this.elements.quoteMinReceived = document.getElementById('quoteMinReceived');
        this.elements.swapStatus = document.getElementById('swapStatus');

        if (!this.elements.inputAmount || !this.elements.swapButton) return;

        // Bind events
        this.elements.inputAmount.addEventListener('input', (e) => this.onInputChange(e));
        this.elements.swapButton.addEventListener('click', () => this.executeSwap());

        // Update button state based on wallet connection
        this.updateButtonState();

        // Listen for wallet connection changes
        window.addEventListener('walletConnected', () => this.updateButtonState());
        window.addEventListener('walletDisconnected', () => this.updateButtonState());
    },

    updateButtonState() {
        if (!walletConnection.connected) {
            this.elements.swapButton.disabled = true;
            this.elements.swapButtonText.textContent = 'Connect Wallet to Swap';
        } else {
            this.elements.swapButton.disabled = !this.elements.inputAmount.value;
            this.elements.swapButtonText.textContent = this.elements.inputAmount.value ? 'Swap SOL for NAZUMI' : 'Enter Amount to Swap';
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

    async getQuote(amount) {
        if (!walletConnection.connected) return;

        try {
            this.showStatus('loading', 'Fetching quote...');

            // Convert SOL amount to lamports (1 SOL = 1,000,000,000 lamports)
            const amountLamports = Math.floor(amount * 1e9);

            const params = new URLSearchParams({
                inputMint: this.SOL_MINT,
                outputMint: this.NAZUMI_MINT,
                amount: amountLamports.toString(),
                taker: walletConnection.publicKey,
                slippageBps: '100' // 1% slippage
            });

            const response = await fetch(`${this.API_BASE}/order?${params}`);

            if (!response.ok) {
                throw new Error('Failed to fetch quote');
            }

            const quote = await response.json();
            this.currentQuote = quote;

            // Update UI with quote
            this.displayQuote(quote, amount);
            this.hideStatus();

        } catch (error) {
            console.error('Quote error:', error);
            this.showStatus('error', 'Failed to fetch quote. Please try again.');
        }
    },

    displayQuote(quote, inputAmount) {
        // Calculate output amount in human-readable format
        const outputAmount = parseInt(quote.outAmount) / 1e9; // Assuming 9 decimals
        this.elements.outputAmount.value = outputAmount.toFixed(6);

        // Show quote info
        this.elements.quoteInfo.style.display = 'block';

        // Calculate price (SOL per NAZUMI)
        const price = inputAmount / outputAmount;
        this.elements.quotePrice.textContent = `${price.toFixed(6)} SOL/NAZUMI`;

        // Price impact (placeholder - Jupiter doesn't always return this)
        this.elements.quotePriceImpact.textContent = '< 1%';

        // Min received (accounting for slippage)
        const minReceived = outputAmount * 0.99; // 1% slippage
        this.elements.quoteMinReceived.textContent = `${minReceived.toFixed(6)} NAZUMI`;

        // Enable swap button
        this.elements.swapButton.disabled = false;
        this.elements.swapButtonText.textContent = 'Swap SOL for NAZUMI';
    },

    async executeSwap() {
        if (!this.currentQuote || !walletConnection.connected) return;

        try {
            this.showStatus('loading', 'Preparing transaction...');

            // Get the transaction from the quote
            if (!this.currentQuote.transaction) {
                throw new Error('No transaction in quote');
            }

            // Deserialize and sign the transaction
            const transactionBytes = Buffer.from(this.currentQuote.transaction, 'base64');
            const { VersionedTransaction } = window.solanaWeb3;

            if (!VersionedTransaction) {
                throw new Error('Solana web3.js not loaded');
            }

            const transaction = VersionedTransaction.deserialize(transactionBytes);

            // Sign with the connected wallet
            const provider = walletConnection.wallet;
            if (!provider) {
                throw new Error('Wallet not connected');
            }

            // Sign transaction
            const signedTransaction = await provider.signTransaction(transaction);
            const signedTxBytes = Buffer.from(signedTransaction.serialize()).toString('base64');

            this.showStatus('loading', 'Executing swap...');

            // Execute the swap
            const executeResponse = await fetch(`${this.API_BASE}/execute`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    signedTransaction: signedTxBytes,
                    requestId: this.currentQuote.requestId
                })
            });

            if (!executeResponse.ok) {
                const errorText = await executeResponse.text();
                throw new Error(`Execution failed: ${errorText}`);
            }

            const result = await executeResponse.json();

            if (result.status === 'Success') {
                this.showStatus('success', `Swap successful! Tx: ${result.signature.slice(0, 8)}...`);
                // Clear inputs
                this.elements.inputAmount.value = '';
                this.elements.outputAmount.value = '';
                this.elements.quoteInfo.style.display = 'none';
                this.currentQuote = null;
                this.updateButtonState();
            } else {
                throw new Error(result.error || 'Swap failed');
            }

        } catch (error) {
            console.error('Swap error:', error);
            this.showStatus('error', `Swap failed: ${error.message}`);
        }
    },

    showStatus(type, message) {
        this.elements.swapStatus.className = `swap-status ${type}`;
        this.elements.swapStatus.textContent = message;
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
