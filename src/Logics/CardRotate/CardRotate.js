const CardRotate = () => {
    const startRotate = function (event) {
        let cardItem = this.querySelector('.rotateItem'), halfHeight = cardItem.offsetHeight / 2, halfWidth = cardItem.offsetWidth / 2;
        cardItem.style.transform = 'rotatex(' + -(event.offsetY - halfHeight) / 200 + 'deg) rotatey(' + (event.offsetX - halfWidth) / 200 + 'deg)';
    };
    const stopRotate = function () {
        let cardItem = this.querySelector('.rotateItem');
        cardItem.style.transform = 'rotate(0)';
    };
    let cards = document.querySelectorAll('.rotateContainer');
    for (let i = 0, length = cards.length; i < length; i++) {
        cards[i].addEventListener('mousemove', startRotate);
        cards[i].addEventListener('mouseout', stopRotate);
    }
};
export default CardRotate;
//# sourceMappingURL=CardRotate.js.map