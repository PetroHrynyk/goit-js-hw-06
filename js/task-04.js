// Лічильник складається зі спану і кнопок, які по кліку повинні
// збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
//     Створи змінну counterValue, в якій буде зберігатися поточне значення
//  лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або
// зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValue = document.querySelector("#value");
let count = 0;
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtnRef);
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
// console.log(incrementBtnRef);

const onDecrementButtonClick = () => {
	count -= 1;
	counterValue.textContent = count;
};
const onIncrementButtonClick = () => {
	count += 1;
	counterValue.textContent = count;
};

decrementBtnRef.addEventListener("click", onDecrementButtonClick);
incrementBtnRef.addEventListener("click", onIncrementButtonClick);
