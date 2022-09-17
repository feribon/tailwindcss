// @ts-nocheck
function darkMode() {
  let darkMode = document.querySelector("html");
  darkMode.setAttribute("class", "dark");
  console.log('dark mode ativado')
}
function removeDarkMode(){
  let darkMode = document.querySelector("html");
  darkMode.classList.remove('dark')
  console.log('dark mode desativado')
}