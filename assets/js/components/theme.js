(() => {
  const storageKey = 'cd-dev-theme';
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const root = document.documentElement;
  let selection;

  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') {
      selection = saved;
      root.dataset.theme = saved;
    }
  } catch {
    // O CSS segue a preferência do sistema se o armazenamento estiver bloqueado.
  }

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('[data-theme-toggle]');
    const currentTheme = () => selection ?? (system.matches ? 'dark' : 'light');
    const syncToggle = () => {
      toggle.setAttribute('aria-pressed', String(currentTheme() === 'dark'));
    };

    toggle.addEventListener('click', () => {
      selection = currentTheme() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = selection;
      syncToggle();

      try {
        window.localStorage.setItem(storageKey, selection);
      } catch {
        // A escolha continua valendo nesta página.
      }
    });

    system.addEventListener('change', syncToggle);
    syncToggle();
    toggle.hidden = false;
  }, { once: true });
})();
