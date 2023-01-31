var btnsuccess = document.querySelector('.control .success')
var btnwarning = document.querySelector('.control .warning')
var btnerror = document.querySelector('.control .error')

btnsuccess.addEventListener('click', function() {
    createToast('success')
})
btnwarning.addEventListener('click', function() {
    createToast('warning')
})
btnerror.addEventListener('click', function() {
    createToast('error')
})


function createToast(status) {
    let templateInner = `<i class="fa-solid fa-circle-check"></i>
                   <span class="message">This is a success message</span>
    `
    switch (status) {
        case 'success':
            templateInner = `<i class="fa-solid fa-circle-check"></i>
                            <span class="message">This is a success message</span>
            `
            break;
        case 'warning':
            templateInner = `<i class="fa-solid fa-triangle-exclamation"></i>
                            <span class="message">This is a warning message</span>
            `
            break;
        case 'error':
            templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
                            <span class="message">This is a error message</span>
            `
            break;
    }


    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML = `${templateInner}
                    <span class="countdown"></span>
                
    `

    var toastList = document.getElementById('toasts')
    toastList.appendChild(toast)

    setTimeout(function() {
        toast.style.animation = 'slideHide 2s ease forwards;'
    }, 4000)

    setTimeout(function() {
        toast.remove()
    }, 6000)
}

// var a = true;
// var b = false;
// var c = a || b;
// var d = b && c;

// console.log(c, d);

var orders = [{
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

const getTotal = function(orders) {
    let price = 0;
    let ordersLength = orders.length;
    for (var i = 0; i < ordersLength; i++) {
        price += orders[i].price
    };
    return price;
}
console.log(getTotal(orders));

// Expected results:
getTotal(orders) // Output: 8700000