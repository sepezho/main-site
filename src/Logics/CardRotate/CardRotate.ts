// const CardRotate = () => {
//   const startRotate = function(event: any) {
//     const cardItem = this.querySelector('.rotateItem');
  
//     const halfHeight = event.layerY - (cardItem.offsetHeight / 2);
//     const halfWidth = event.layerX - (cardItem.offsetWidth / 2);
//     console.log(event.layerX)
//     console.log(event.layerY)
//     cardItem.style.transform = `rotateX(${-halfWidth / 25}deg) rotateY(${-halfHeight / 25}deg)`;
//   };
//   const stopRotate = function() {
//     const cardItem = this.querySelector('.rotateItem');
//     cardItem.style.transform = 'rotate(0)';
//   };

//   const cards = document.querySelectorAll('.rotateContainer');

//   for (let i = 0, {length} = cards; i < length; i++) {
//     cards[i].addEventListener('mousemove', startRotate);
//     cards[i].addEventListener('mouseout', stopRotate);
//   }
// };

// export default CardRotate;


// function Card() {
//   this.cards = document.querySelectorAll('.rotateContainer');
//   this.bindEventsCard = function() {
//           for (let i = 0, length = this.cards.length; i < length; i++) {
//                   this.cards[i].addEventListener('mousemove', this.startRotate);
//                   this.cards[i].addEventListener('mouseout', this.stopRotate);
//           }
//   }
//   this.startRotate = function(event) {
//           let cardItem = this.querySelector('.rotateItem'),
//                   halfHeight = cardItem.offsetHeight / 2,
//                   halfWidth = cardItem.offsetWidth / 2;
//           cardItem.style.transform = 'rotatex(' + -(event.offsetY - halfHeight) / 15 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 15 + 'deg)';
//   }
//   this.stopRotate = function(event) {
//           let cardItem = this.querySelector('.rotateItem');
//           cardItem.style.transform = 'rotate(0)';
//   }
//   this.run = () => {
//           this.bindEventsCard();
//   }
// }

// export default Card
