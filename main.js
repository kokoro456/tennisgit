document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Load theme preference from localStorage or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        htmlElement.classList.add('dark');
        themeToggleBtn.innerHTML = '☀️'; // Sun icon for light mode
        themeToggleBtn.classList.remove('bg-yellow-400', 'border-yellow-500');
        themeToggleBtn.classList.add('bg-slate-700', 'text-white', 'border-slate-600');
    } else {
        htmlElement.classList.remove('dark');
        themeToggleBtn.innerHTML = '🌙'; // Moon icon for dark mode
        themeToggleBtn.classList.remove('bg-slate-700', 'text-white', 'border-slate-600');
        themeToggleBtn.classList.add('bg-yellow-400', 'text-slate-800', 'border-yellow-500');
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.innerHTML = '🌙'; // Moon icon for dark mode
            themeToggleBtn.classList.remove('bg-slate-700', 'text-white', 'border-slate-600');
            themeToggleBtn.classList.add('bg-yellow-400', 'text-slate-800', 'border-yellow-500');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerHTML = '☀️'; // Sun icon for light mode
            themeToggleBtn.classList.remove('bg-yellow-400', 'border-yellow-500');
            themeToggleBtn.classList.add('bg-slate-700', 'text-white', 'border-slate-600');
        }
    });
});