const plantes = [
    {
        name: 'Barbeton Daisy',
        price: 119,
        imgage: 'img/planets/image 1 (1).svg'
    },
    {
        name: 'Angel Wing Begonia',
        price: 169,
        imgage: 'img/planets/product-21-320x320 1.svg'
    },
    {
        name: 'African Violet',
        price: 199,
        imgage: 'img/planets/image 2.svg'
    },
    {
        name: 'Beach Spider Lily',
        price: 129,
        imgage: 'img/planets/image 2.svg'
    },
    {
        name: 'Blushing Bromeliad',
        price: 130,
        imgage: 'img/planets/image 7 (1).svg'
    },
    {
        name: 'Aluminum Plant',
        price: 179,
        imgage: 'img/planets/image 8.svg'
    },
    {
        name: 'Birds Nest Fern',
        price: 99,
        imgage: 'img/planets/image 9.svg'
    },
    {
        name: 'Broadleaf Lady Palm',
        price: 59,
        imgage: 'img/planets/product-20-320x320 1.svg'
    },
    {
        name: 'Chinese Evergreen',
        price: 30,
        imgage: 'img/planets/image 10.svg'
    }
]
const start = (num = 0, str = '') => {
    planets_row.innerHTML = ''
    for (let i = 0; i < plantes.length; i++) {
        if (plantes[i].price > num) {
            if (plantes[i].name.includes(str)) {
                planets_row.innerHTML += `
            <div class="planets_item">
                    <div class="planets_img">
                        <img class="planets_img1" src="${plantes[i].imgage}" alt="">
                        <div class="planets_emoji">
                            <img src="img/nav/Vector (5).svg" alt="">
                            <img src="img/planets/heart 1.svg" alt="">
                            <img src="img/nav/Vector (4).svg" alt="">
                        </div>
                    </div>
                    <div class="planets_title">${plantes[i].name}</div>
                <div class="plantes_title1">$${plantes[i].price}.00</div>
            </div>
        `
            }
        }

    }
}
filterBtn.onclick = function () {
    start(rangeInp.value * 2)
}
rangeInp.onchange = function () {
    priceFilter.innerHTML = '$' + rangeInp.value * 2 + ' - $199'
}
start()
loginBtn.onclick = function () {
    modal.classList = 'modal'
    modalBlur.classList = 'blur'
}
closeModal.onclick = function () {
    modal.classList = 'modal none'
    modalBlur.classList = 'blur none'
}
modalBlur.onclick = function () {
    modal.classList = 'modal none'
    modalBlur.classList = 'blur none'
}
up.onclick = function () {
    if (window.innerWidth <= 1045) {
        nav_col3_block.classList = 'nav_input'
        up.classList = 'none'
        nav_col2.classList = 'none'
    } else {
        nav_col3_block.classList = 'nav_input'
        up.classList = 'none'
    }
}
down.onclick = function () {
    if (window.innerWidth <= 1045) {
        nav_col3_block.classList = 'nav_input none'
        up.classList = ''
        nav_col2.classList = 'nav_col2'
    } else {
        nav_col3_block.classList = 'nav_input none'
        up.classList = ''
    }
}
inp1.onchange = function () {
    start(rangeInp.value * 2, inp1.value)
}
inp2.onchange = function () {
    start(rangeInp.value * 2, inp2.value)
}
let swiper = new Swiper(".mySwiper", {
    spaceBeetwen: 30,
    pagination: {
        el: ".swiper-pagination"
    },
    mousewhell: true,
    keyboard: true
})