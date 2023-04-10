document.addEventListener('DOMContentLoaded', function () {
    let countUser = document.querySelector('.count-user');
	let countComp = document.querySelector('.count-comp');
	let userField = document.querySelector('.user-field');
	let compField = document.querySelector('.comp-field');
	let play = document.querySelector('.play');

	let res = document.querySelector('.result');
	let countU = 0;
	let countC = 0;

	function choiceComp(userCh) {
		let random = Math.floor(Math.random() * 3);	
		let fields = compField.querySelectorAll('.field');
		let compCh = fields[random].dataset.field;
		winner(userCh, compCh);
		
	}

	function choiceUser(e) {
		let target = e.target;
		if (target.classList.contains('field')) {
			let userCh = target.dataset.field;
			choiceComp(userCh);
		}
	}

	function winner(userCh, compCh) {
		let combination = userCh + compCh;

		switch (combination) {
			case 'pp':
			case 'ss':
			case 'rr':
			res.innerText = 'Draw!';
			break;
			
			case 'rs':
			case 'sp':
			case 'pr':
			res.innerText = 'You are the Winner!';
			countU++;
			countUser.innerText = countU;
			break;
			
			case 'sr':
			case 'ps':
			case 'rp':
			res.innerText = 'Computer Wins!';
			countC++;
			countComp.innerText = countC;
			break;

			default:
			break;
		}
	}

	play.onclick = function(){
        location.reload();
    }

	userField.addEventListener('click', choiceUser);
	play.addEventListener('click', playGame);
});



