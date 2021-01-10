//DROPDOWN MENU
var burgerMenu = document.getElementById('burger-icon');
var menu = document.getElementById('dropdown-menu');


burgerMenu.addEventListener('click', dropMenu);

function dropMenu(e){
  e.preventDefault();
  if(menu.style.display === 'block'){
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}
