'use strict';

window.addEventListener('DOMContentLoaded', () => {
   const navbarUl = document.querySelector('#header-nav__ul');
   const navbarBtns = document.querySelectorAll('.header-button');
   const navbarSubLists = document.querySelectorAll('.header-sublist');

   navbarUl.addEventListener('click', e => {
      let target = e.target;

      // set 'target' to button node if target is the button's icon
      if (target.nodeName === 'IMG') target = target.parentElement;

      if (target && target.nodeName === 'BUTTON') {
         // close sublist if it is open
         if (target.className.search(/header-button--active/) > 0) {
            target.className = 'header-button';
            target.nextElementSibling.className = 'header-sublist';
            return;
         }
         
         // open sublist
         [...navbarBtns].forEach(node => node.className = 'header-button');
         [...navbarSubLists].forEach(node => node.className = 'header-sublist');

         target.className = 'header-button header-button--active';
         target.nextElementSibling.className = 'header-sublist header-sublist--open';
         e.preventDefault();
      }
   });
});