function updateSVG(theme) {
  const themeLogo = document.querySelector('.theme-logo');
  const logo = document.querySelector('.logo');
  if (themeLogo) {
    if (theme === 'dark') {
      themeLogo.src = './assets/images/icon-sun.svg';
      logo.src = './assets/images/logo-light.svg';
    } else {
      themeLogo.src = './assets/images/icon-moon.svg';
      logo.src = './assets/images/logo.svg';
    }
  }
}

function toggleTheme() {
  const themeButton = document.querySelector('.toggle-theme');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateSVG(savedTheme);
  } else {
    updateSVG('light');
  }

  if (themeButton) {
    themeButton.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateSVG(newTheme);
    });
  }
}

export { toggleTheme };
