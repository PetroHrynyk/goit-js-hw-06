// function getRandomHexColor() {
// 	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку
// Створити, після чого рендериться колекція.Натисненням на кнопку
// Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Створи функцію createBoxes(amount), яка приймає один параметр
//   - число.Функція створює стільки < div >, скільки вказано в
//   amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від
//  попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//  Використовуй готову функцію getRandomHexColor для отримання кольору.

// function getRandomHexColor() {
// 	return `#${Math.floor(Math.random() * 16777215)
// 		.toString(16)
// 		.padStart(6, 0)}`;
// }
// const refs = {
// 	create: document.querySelector("button[data-create]"),
// 	destroy: document.querySelector("button[data-destroy]"),
// 	div: document.querySelector("#boxes"),
// 	// input:
// };
// let amount = 5;
// function createBoxes(amount) {
// 	let size = 30;
// 	const boxesToPush = [];
// 	for (let i = 0; i < amount; i++) {
// 		const box = document.createElement("div");
// 		box.style.height = `${size}px`;
// 		box.style.width = `${size}px`;
// 		box.style.background = getRandomHexColor();
// 		size += 10;
// 		boxesToPush.push(box);
// 	}
// 	refs.div.insertAdjacentHTML("beforeend", ...boxesToPush);
// }
// console.log(createBoxes(5));
// not ready yet...................................
