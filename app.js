// function car(name, model, owner, year, phone, image) {
//   return {
//     name, model, owner, phone, image, year
//   }
// }

const car = (name, model, owner, year, phone, image) =>
  ({name, model, owner, year, phone, image});

// заведем массив машин
const cars = [
  car('Ford', 'Focus', 'Maxim', '2016', '+7 926 666 87 37', 'images/focus.jpg'),
  car('Ford', 'Mondeo', 'Vladimir', '2018', '+7 926 666 47 37', 'images/mondeo.jpg'),
  car('Porshe', 'Panamera', 'Irina', '2015', '+7 926 766 47 37', 'images/panamera.jpg'),
];

// инициализация vue
new Vue({
  el: '#app',
  data: {
    cars: cars
  }
});