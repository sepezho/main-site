const CardRotate = () => {
  const startRotate = function(this: any, event: any) {
    const cardItem = this.querySelector('.rotateItem');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotatex(' + -(event.offsetY - halfHeight) / 200 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 200 + 'deg)';
  };
  const stopRotate = function(this: any) {
    const cardItem = this.querySelector('.rotateItem');
    cardItem.style.transform = 'rotate(0)';
  };

  const cards = document.querySelectorAll('.rotateContainer');

  for (let i = 0, {length} = cards; i < length; i++) {
    cards[i].addEventListener('mousemove', startRotate);
    cards[i].addEventListener('mouseout', stopRotate);
  }
};

export default CardRotate;
