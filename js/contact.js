const Texts = [
    {
        title1: 'Contact Info',
        text1: '1. Bestselling products specific tothe country you are purchasing from 2. New-In products3. Styles of strategic importance to Shopping.az. This includes products that have just come back into stock orthose which have strong availability in core sizes.The remaining products are ranked depending on product sales in the country you arepurchasing from,core size availability, product newness, and products which we hold more inventory for. Wealsoprioritise the ranking placement of our Shopping.az Full Price products over Shopping.azOutlet products.Strap yourself in, this is going to be a long (but enjoyable) ride.',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6827.367636118668!2d49.8320520525691!3d40.38378476244489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d9e5203ea73%3A0x9947a9c32e454dab!2z0J_QsNGA0Log0L7RhNC40YbQtdGA0L7Qsg!5e1!3m2!1sru!2saz!4v1694522223496!5m2!1sru!2saz',
    }
]

Texts.map(card => {
    var cardDiv = document.createElement('div');
    cardDiv.innerHTML = `
<div class="box">
    <div class="dest-content">
        <div class="name">
            <h4>${card.title1}</h4>
            <p class="text_contact">${card.text1}</p>
        </div>
    </div>
    <br>
    <br>
    <div style="width: 90%; float: left;  margin-right: 60px;margin-left: 10px;">

        <fieldset style="background-color: white;">
            <h2 style="margin-left: 10px;">Send Message</h2>
            <form action="">
                <input type="text" placeholder="User Name"><br>
                <input type="tel" placeholder="Phone Number"><br>
                <input type="email" placeholder="Email Address"><br>
                <textarea placeholder="Message" cols="30" rows="4"></textarea><br>
                <button>Send</button>
            </form>
        </fieldset>
    </div>
    <br>
    <div style="width: 90%; float: left;  margin-right: 60px;margin-left: 10px; margin-top:50px;">

    <iframe
    src="${card.map}"
     style="width: 100%; height:400px; border:0;" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
</div>
<br><br>

`
    document.getElementsByClassName('card-content')[0].appendChild(cardDiv);
});