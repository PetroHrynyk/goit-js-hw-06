// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.Обов'язково використовуй метод
// document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li > за одну операцію у
// список ul#ingredients.

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsListEl = document.querySelector("#ingredients");
// console.log(ingredientsListEl);

const ingredientsListItemsEl = ingredients.map(el => {
	const ingredientsListItemEl = document.createElement("li");
	ingredientsListItemEl.classList.add("item");
	ingredientsListItemEl.textContent = el;
	return ingredientsListItemEl;
});
// console.log(ingredientsListItemsEl);

ingredientsListEl.append(...ingredientsListItemsEl);
