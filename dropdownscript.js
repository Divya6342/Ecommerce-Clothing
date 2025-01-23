const categoryDropdown = document.querySelector('.category-dropdown');
const categoryList = document.querySelector('.category-list');
const categoryBtn = document.querySelector('.category-btn');

categoryBtn.addEventListener('click', () => {
  categoryList.classList.toggle('show');
});