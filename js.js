const ModalController = ({ modal, btnOpen, btnClose }) => {
	const buttonElems = document.querySelectorAll(btnOpen);
	const modalElem = document.querySelector(modal);
	const buttonCloseElem = document.querySelector(btnClose);

	const openModal = () => {
		modalElem.style.visibility = 'visible';
		modalElem.style.opacity = 1;
	};

	const closeModal = event => {
		const target = event.target;

		if (target === buttonCloseElem) {
			modalElem.style.visibility = 'hidden';
			modalElem.style.opacity = 0;
		}
	};

	buttonElems.forEach(btn => {
		btn.addEventListener('click', openModal);
	});

	buttonCloseElem.addEventListener('click', closeModal);
};

ModalController(
	{
		modal: '.open__nole',
		btnOpen: '.clickclick',
		btnClose: '.button0'
	}
);
ModalController(
	{
		modal: '.open1',
		btnOpen: '.click1',
		btnClose: '.button1'
	}
);
ModalController(
	{
		modal: '.open2',
		btnOpen: '.click2',
		btnClose: '.button2'
	}
);

ModalController(
	{
		modal: '.open3',
		btnOpen: '.click3',
		btnClose: '.button3'
	}
);

ModalController(
	{
		modal: '.open4',
		btnOpen: '.click4',
		btnClose: '.button4'
	}
);

ModalController(
	{
		modal: '.open5',
		btnOpen: '.click5',
		btnClose: '.button5'
	}
);

ModalController(
	{
		modal: '.open6',
		btnOpen: '.click6',
		btnClose: '.button6'
	}
);

ModalController(
	{
		modal: '.open7',
		btnOpen: '.click7',
		btnClose: '.button7'
	}
);

ModalController(
	{
		modal: '.open8',
		btnOpen: '.click8',
		btnClose: '.button8'
	}
);

ModalController(
	{
		modal: '.open9',
		btnOpen: '.click9',
		btnClose: '.button9'
	}
);