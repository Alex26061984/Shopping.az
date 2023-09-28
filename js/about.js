const Texts = [
    {
        title1: 'Who are we?',
        text1: 'The job market is a competitive place, with candidates who are both capable and qualifiedandoften vying for the same position. Therefore, its imperative that you take the stepsnecessary to make your application stand out. You can effectively communicate that you arethe ideal hire by preparing for common interview questions that youre likely to be asked during the hiring process. In this article, we discuss why employers commonly ask the question, What do you know aboutour company? during an interview, tips for preparing your answer to this question andexamples of answers that effectively address it',
        image: '../img/a.jpg',
        title2: 'Our history',
        text2: 'Company history plays a major role in establishing the corevalues and culture of yourorganization. Your company history is also important for:Understanding the challenges the company has overcome. The challenges that the company has overcome likely shape the trajectory of your organization within the market and define the characteristics of successful employees within the business.Creating a roadmap for future success in your organization. Discovering what qualities andvalues have led to success in the past can help shape the decisions and strategy for future success.Increasing pride and enthusiasm in the workplace. Creating a compelling narrative that highlights what sets your company apart from others can help your employees gain a sense ofpride and enthusiasm in being part of a unique team. Leveraging an additional marketing asset. Your company history can be used as a marketing asset to attract candidates in recruiting and promote your brand to consumers.'
    },


]

Texts.map(card => {
    var cardDiv = document.createElement('div');
    cardDiv.innerHTML = `
    <div class="box">
    <div class="dest-content">
        <div class="name">
            <h4>${card.title1}</h4>
            <p style="text-align: justify;">${card.text1} </p>
        </div>
    </div>
    <div class="thum">
        <img src="${card.image}" alt="" class="about-img">
    </div>
    <div class="dest-content">
        <div class="name">
            <h4>${card.title2}</h4>
            <p style="text-align: justify;">${card.text2}</p>
        </div>
    </div>
</div>
</div>
</div>`
    document.getElementsByClassName('card-content')[0].appendChild(cardDiv);
});