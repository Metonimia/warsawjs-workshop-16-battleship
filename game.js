const gameElement = document.getElementById('game');
const row = document.createElement('tr');
gameElement.appendChild(row);
const col1 = document.createElement('td');
const col2 = document.createElement('td');

row.appendChild(col1);
row.appendChild(col2);

const cells = [col1, col2];

for (let i = 0; i < cells.length; i++) {
	const currentCell = cells[i];
	currentCell.addEventListener('click', function(event) {
		event.target.classList.add('clicked');
	});
}

