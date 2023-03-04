const modalBtn = $(".present__btn");
const modalClose = $(".modal-order__close");
const modalOrder = $(".modal-order");

//modal
modalBtn.on("click", function () {
	modalOrder.show(500);
});
modalClose.on("click", function () {
	modalOrder.hide(500);
});

//form
const modalOrderInput = $(".modal-order__input");
const modalOrderTitle = $(".modal-order__title");

modalOrderInput.focus(function () {
	modalOrderTitle.text(`Введите ${$(this).attr("placeholder").toLowerCase()}`);
});

modalOrderInput.blur(function () {
	modalOrderTitle.text("Заполните форму");
});

//send form
const modalOrderWrapper = $(".modal-order__wrapper");
const modalOrderForm = $(".modal-order__form");

modalOrderForm.submit(function (event) {
	event.preventDefault();
	$.ajax({
		url: "https://jsonplaceholder.typicode.com/todos",
		type: "POST",
		data: $(this).serialize(),
		success(data) {
			modalOrderTitle.text("Спасибо, ваша заявка принята, номер заявки: " + data.id);
			$(".modal-order__form").slideUp();
		},
		error() {
			modalOrderTitle.text("Что-то пошло не так, попробуйте позже!");
		},
	});
});

//open burger menu
const burgerCloseBtn = $(".navigation__close");
const burgerNavigation = $(".navigation");

$(".header__burger").on("click", function () {
	burgerNavigation.animate(
		{
			left: 0,
		},
		500,
		function () {
			burgerCloseBtn.animate(
				{
					opacity: 1,
				},
				300,
				"swing"
			);
		}
	);
});

//close burger by btn
burgerNavigation.on("click", function (e) {
	if (e.target.closest(".navigation__close")) {
		burgerNavigation.animate(
			{
				left: -400,
			},
			500,
			function () {
				burgerCloseBtn.animate(
					{
						opacity: 0,
					},
					300,
					"swing"
				);
			}
		);
	}
});

//close burger on click outside
$(document).click(function (e) {
	if (!$(e.target).closest(".navigation").length && !$(e.target).is(".header__burger")) {
		burgerNavigation.animate(
			{
				left: -400,
			},
			500,
			function () {
				burgerCloseBtn.animate(
					{
						opacity: 0,
					},
					300,
					"swing"
				);
			}
		);
	}
});
