const ModalController = ({ modal, btnOpen, btnClose }) => {
	const buttonElems = document.querySelectorAll(btnOpen);
	const modalElem = document.querySelector(modal);

	const openModal = (e) => {
		if (modalElem.style.visibility == 'visible') {
			modalElem.style.visibility = 'hidden';
			modalElem.style.opacity = 0;
		} else {
			modalElem.style.visibility = 'visible';
			modalElem.style.opacity = 1;
			console.log('open', e.target);
		}
	};

	buttonElems.forEach(btn => {
		btn.addEventListener('click', openModal);
	});

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