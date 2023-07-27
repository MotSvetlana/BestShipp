// Card rotate

if (document.documentElement.clientWidth > 767){

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            // Находим внутри родительского элемента (карточки) его дочерние элементы - фронтальную и заднюю стороны
            const cardFront = this.querySelector('.card__front');
            const cardBack = this.querySelector('.card__back');

            // Поворачиваем карточку на 180 градусов

            card.classList.add('active');
            cardFront.style.transform = "rotateY(180deg)";
            cardBack.style.transform = "rotateY(0deg)";
            cardBack.style.zindex = "3";
        });

        card.addEventListener('mouseleave', function () {
            // Находим внутри родительского элемента (карточки) его дочерние элементы - фронтальную и заднюю стороны
            const cardFront = this.querySelector('.card__front');
            const cardBack = this.querySelector('.card__back');

            card.classList.remove('active');
            cardFront.style.transform = "rotateY(0deg)";
            cardBack.style.transform = "rotateY(180deg)";
            cardBack.style.zindex = "1";

        });
    });

    } else {
            const cards = document.querySelectorAll('.card');

            cards.forEach((card) => {
                card.addEventListener('click', () => {

                card.classList.add('active');

                    // card.classList.toggle('card_flipped');
                });
            });

            const closeBtns = document.querySelectorAll('.card__close');

            closeBtns.forEach((closeBtn) => {
                closeBtn.addEventListener('click', (event) => {
                    event.stopPropagation();
                    const card = event.target.closest('.card');
                    if (card) {

                        card.classList.remove('active');

                        // card.classList.remove('card_flipped');
                    }
                });
            });



}





