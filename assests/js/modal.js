$(document).ready(function () {
	const modal = document.querySelector(".js-modal");
	const buyBtns = document.querySelectorAll(".js-buy-ticket");
	const closeBtn = document.querySelector(".js-close");
	const modalContent = document.querySelector(".js-modal-content");

	//open modal
	buyBtns.forEach(function (btn) {
		btn.addEventListener("click", openModal);
	});

	//close modal
	closeBtn.addEventListener("click", closeModal);

	/* cách 1 */
	// window.onclick = function(e) {
	//     e.preventDefault();
	//     if(e.target.id == 'modal')
	//         modal.classList.remove('open');
	// }

	/* cách 2 */
	modal.addEventListener("click", closeModal); // đóng modal khi click vào modal
	modalContent.addEventListener("click", function (e) {
		// ngăn sự kiện click của cha ảnh hưởng đến con
		e.stopPropagation();
	});

	function openModal() {
		modal.classList.add("open");
	}
	function closeModal() {
		modal.classList.remove("open");
	}
});
