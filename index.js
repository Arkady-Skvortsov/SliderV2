let images = document.querySelectorAll('.images');
let main_img = document.querySelector('.main_img');
let right_button = document.querySelector('.right_button');
let left_button = document.querySelector('.left_button');
let name_of_jpg = document.querySelector('.name_of_jpg');
let main_img_prop = main_img.dataset.mainImg;

right_button.addEventListener('click', () => {
   main_img.src = images[main_img_prop].src;

   name_of_jpg.textContent = images[main_img_prop].alt;

   main_img_prop++;

   if(main_img_prop !== 1) {
   	  left_button.classList.add('show_left');
   } 

   if(main_img_prop == 12) {
      right_button.classList.add('hide_right');
   } 
});

left_button.addEventListener('click', () => {
   main_img.src = images[main_img_prop-2].src;

   name_of_jpg.textContent = images[main_img_prop-2].alt;

   main_img_prop--;

   if(main_img_prop !== 12) {
   	 right_button.classList.remove('hide_right');
   }

   if(main_img_prop === 1) {
   	 left_button.classList.remove('show_left');
   }
});
