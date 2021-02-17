const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeRef = document.querySelector('#theme-switch-toggle');

const bodyRef = document.querySelector('body');


themeRef.addEventListener("change", changeTheme);

function changeTheme(e) {
    const isChecked = e.target.checked;
    if (isChecked) {
        bodyRef.classList.add(Theme.DARK)
        bodyRef.classList.remove(Theme.LIGHT)
    } else {
        bodyRef.classList.remove(Theme.DARK)
        bodyRef.classList.add(Theme.LIGHT)
    }
    const save = isChecked ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem('theme', save);
}

function getСurrentTheme() {
    const selectedTheme = localStorage.getItem('theme');
    if (selectedTheme) {
        themeRef.checked = selectedTheme === Theme.DARK;
    } 
    return selectedTheme ? selectedTheme: Theme.LIGHT;
  
}

function initTheme() {
    const theme = getСurrentTheme();
    bodyRef.classList.add(theme);
};
initTheme();