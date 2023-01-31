var btnSearch = document.querySelector('.search-box__button')

btnSearch.addEventListener('click', function() {
    this.parentElement.classList.toggle('open')
    console.log(this.previousElementSibling);
    this.previousElementSibling.focus();
    //cach lay cac element tiep theo
})