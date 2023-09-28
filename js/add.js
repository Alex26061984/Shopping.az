const Cards = [
    {
        image: '../img/p1.jpg',
        price: '129',
        title: 'Men Jacket',
        description: 'Jacket'
    },
    {
        image: '../img/p2.jpg',
        price: '55',
        title: 'Women bag ',
        description: 'Bag'
    },
    {
        image: '../img/p3.jpg',
        price: '66',
        title: 'Men Shirt',
        description: 'Shirt'
    },
    {
        image: '../img/p4.jpg',
        price: '105',
        title: 'Women Dress',
        description: 'Dress'
    },
    {
        image: '../img/p6.jpg',
        price: '49',
        title: 'Kids Pants',
        description: 'Pants'
    },
    {
        image: '../img/p7.jpg',
        price: '38',
        title: 'Kids Shoes',
        description: 'Shoes'
    },
    {
        image: '../img/p8.jpg',
        price: '22',
        title: 'Kids Sunglass',
        description: 'Sunglass'
    },
    {
        image: '../img/p5.jpg',
        price: '60',
        title: 'Kids Dress',
        description: 'Dress'
    },

]

Cards.map(card => {
    var cardDiv = document.createElement('div');
    cardDiv.innerHTML = `
    <div class="box">
    <div class="thum">
    <img src="${card.image}" alt="">
    <h3>${card.price} AZN</h3>
</div>
<div class="dest-content">
    <div class="name">
        <h4>${card.title}</h4>
        <p>${card.description}</p>
    </div>
    <div class="stars">
        <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-solid fa-star"></i></a>
        <a href="#"><i class="fa-regular fa-star"></i></a>
    </div>
</div>
</div>`
    document.getElementsByClassName('card-content')[0].appendChild(cardDiv);
});