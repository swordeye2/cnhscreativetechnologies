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
