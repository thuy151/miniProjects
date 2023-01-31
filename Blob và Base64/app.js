// Blob
var mypicture = document.querySelector('#mypicture');
var preview = document.querySelector('.preview');
var error = document.querySelector('.error');

mypicture.addEventListener('change', function(e) {
    var file = mypicture.files[0];
    if (!file)
        return;

    if (!file.name.endsWith('.jpg')) {
        error.innerHTML = `Hinh anh phai thuoc dinh dang`;
        return;
    } else {
        error.innerHTML = ``;
    }

    if (!file.size / (1024 * 1024) > 5) {
        error.innerHTML = `Chi duoc upload anh < 5MB`;
        return;
    } else {
        error.innerHTML = ``;
    }

    var img = document.createElement('img');
    img.src = URL.createObjectURL(mypicture.files[0]);
    preview.appendChild(img);
})