// --- THEME SWITCHING LOGIC ---
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  localStorage.setItem('cnhs_theme', newTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');
  
  if (themeIcon && themeText) {
    if (theme === 'light') {
      themeIcon.textContent = '☀️';
      themeText.textContent = 'Light Theme';
    } else {
      themeIcon.textContent = '🌙';
      themeText.textContent = 'Dark Theme';
    }
  }
}

// Auto-apply saved theme when any page loads
(function() {
  const savedTheme = localStorage.getItem('cnhs_theme') || 'dark';
  applyTheme(savedTheme);
})();


// --- AUTOMATED BOTTOM STICKY IN-FEED AD INJECTION FOR SIMULATION MODULES ---
document.addEventListener("DOMContentLoaded", () => {
  // Get current page filename
  const currentPage = window.location.pathname.split("/").pop();

  // Exclude index.html and root path
  if (currentPage !== "" && currentPage !== "index.html") {
    
    // 1. Dynamically Load Google AdSense Script Tag
    if (!document.getElementById("adsense-script")) {
      const adScript = document.createElement("script");
      adScript.id = "adsense-script";
      adScript.async = true;
      adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7612819391368136";
      adScript.crossOrigin = "anonymous";
      document.head.appendChild(adScript);

      // Enable COPPA non-personalized ads
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.requestNonPersonalizedAds = 1;
    }

    // 2. Inject Sticky Bottom Ad Container
    const adContainer = document.createElement("div");
    adContainer.className = "fixed bottom-0 left-0 right-0 z-40 p-2 md:p-3 bg-[var(--card-bg)] border-t border-[var(--card-border)] shadow-2xl flex flex-col items-center justify-center";
    adContainer.id = "stickyBottomAdBox";
    
    adContainer.innerHTML = `
      <div class="max-w-6xl w-full flex justify-between items-center mb-1 px-2">
        <span class="text-[10px] font-mono text-[var(--accent)] uppercase font-bold tracking-wider">
          ⚡ Educational Hardware Sponsor
        </span>
        <button onclick="document.getElementById('stickyBottomAdBox').remove()" class="text-[10px] font-mono text-[var(--text-sub)] hover:text-white px-2 py-0.5 rounded border border-[var(--card-border)] bg-[var(--inner-box)] cursor-pointer">
          ✕ Dismiss
        </button>
      </div>

      <div class="w-full max-w-4xl overflow-hidden min-h-[60px] flex items-center justify-center">
        <ins class="adsbygoogle"
             style="display:block; width:100%; height:60px;"
             data-ad-client="ca-pub-7612819391368136"
             data-ad-slot="7135124606"
             data-ad-format="horizontal"
             data-full-width-responsive="true"></ins>
      </div>
    `;

    document.body.appendChild(adContainer);

    // Add extra bottom padding to body so the sticky ad doesn't overlap content/footers
    document.body.style.paddingBottom = "90px";

    // Trigger AdSense Render
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("AdSense load skipped (offline mode).");
    }
  }
});
