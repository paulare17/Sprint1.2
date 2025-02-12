
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

document.querySelectorAll('[data-feature]').forEach(element => {
  element.addEventListener('click', function () {
      document.querySelectorAll('.feature-item').forEach(item => item.classList.add('d-none'));
      document.getElementById(this.getAttribute('data-feature')).classList.remove('d-none');
      
      document.querySelectorAll('.nav-link, .accordion-button').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
  });
});