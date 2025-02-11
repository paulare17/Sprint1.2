
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


document.addEventListener('DOMContentLoaded', function() {
  const closeBtn = document.querySelector('#closeBtn'); //potser és un punt i no un #
  const navbarToggler = document.querySelector('.navbar-toggler');
  
  navbarToggler.addEventListener('click', function() {
      document.querySelector('.navbar-collapse').classList.toggle('show');
  });
  
  closeBtn.addEventListener('click', function() {
      document.querySelector('.navbar-collapse').classList.remove('show');
  });
});