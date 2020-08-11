// Grab some DOM contents

const input = document.querySelector('input');
const visibility = document.querySelector('.visibility');
const icon = document.querySelector('.fa');

visibility.addEventListener('click', () => {
	if(input.value !== '') {
		if(visibility.getAttribute('class') === 'visibility show') {
			visibility.setAttribute('class', 'visibility hide');
			icon.setAttribute('class', 'fa fa-eye-slash');
			input.setAttribute('type', 'text');
		} else if (visibility.getAttribute('class') === 'visibility hide') {
			visibility.setAttribute('class', 'visibility show');
			icon.setAttribute('class', 'fa fa-eye');
			input.setAttribute('type', 'password');
		}
	};
});
