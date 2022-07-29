const content = document.querySelector('.content');
const ratingBtn = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.btn1');
const thanks = document.querySelector('.thanku');
const ratingValue = document.querySelector('.points');
for (let i = 0; i < ratingBtn.length; i++) {
  ratingBtn[i].addEventListener('click', function () {
    ratingBtn[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
    console.log(i);
  });
}
submitBtn.addEventListener('click', function () {
  thanks.classList.remove('hidden');
  content.classList.add('hidden');
});

ratingBtn.forEach(rate => {
  rate.addEventListener('click', function () {
    ratingValue.innerHTML = rate.innerHTML;
  });
});
