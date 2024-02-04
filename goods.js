const cart = {
    "p1": {
        "name": "Мужские часы Москва (СССР)",
        "url": "#",
        "image": "./images/1.jpg",
        "price": 1650.00
    },
    "p2": {
        "name": "Мужские часы Москва (СССР)",
        "url": "#",
        "image": "./images/2.jpg",
        "price": 850.00
    },
    "p3": {
        "name": "Мужские часы Москва (СССР)",
        "url": "#",
        "image": "./images/3.jpg",
        "price": 400.00
    },
    "p4": {
        "name": "Мужские часы Москва (СССР)",
        "url": "#",
        "image": "./images/4.jpg",
        "price": 2010.00
    },
    "p5": {
        "name": "Мужские часы Москва (СССР)",
        "url": "#",
        "image": "./images/5.jpg",
        "price": 4000.00
    },
    "p6": {
        "name": "Мужские часы Москва (СССР)",
        "url": "#",
        "image": "./images/6.jpg",
        "price": 2400.00
    },
}

const goods = document.querySelector('.goods');

let out = '<div class="pricing-table row">'

for(let key in cart) {
    out += `<div class="col col-md-6 col-lg-4">`;
    out += `<div class="package featured text-center">`;
    out += `<h2>${cart[key]['name']}</h2>`;
    out += `<img src="${cart[key]['image']}">`;
    out += `<p class="price">${cart[key]['price']} RU</p>`;
    out += `<button class="to-cart button-primary" data-articul="${key}">В корзину</button>`;
    out += `</div>`;
    out += `</div>`;
}

out += '</div>';
goods.innerHTML = out;

const data = {};
goods.addEventListener('click', (e) => {
    let target = e.target;
    if(target.classList.contains('to-cart')){
        let articul = target.dataset['articul'];
        if (data[articul] !== undefined) {
            data[articul]['count']++;
        } else {
            data[articul] = cart[articul];
            data[articul]['count'] = 1;
        }
        localStorage.setItem('cart', JSON.stringify(data));
    }
})



