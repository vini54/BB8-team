let html = document.getElementsByTagName('html')[0]
let nav = document.getElementsByTagName('nav')[0]
let btn = document.getElementById('dark')

btn.addEventListener('click', darkToogle)

function darkToogle(){
   html.classList.toggle('dark-mode')
   nav.classList.toggle('navbar-light')
   nav.classList.toggle('navbar-dark')

   if(html.classList.contains('dark-mode')){
      btn.innerHTML = '<i class="bi bi-sun-fill m-2"></i> Light mode'
   } else {
      btn.innerHTML = '<i class="bi bi-moon-stars-fill m-2"></i>Dark mode'
   }
}