'use strict';


class ViewComponent {
	constructor() {
		if (new.target === ViewComponent) {
			throw new Error('Abstract Class');
		}
	}
	getElement() {
		return this._element;
	}
}

class GameCell extends ViewComponent {
	constructor() {
		super();
		this._state = 'unknown';
		this._element = document.createElement('td');
		const self = this;
		this._element.addEventListener('click', function() {
			self.setState('miss');
		});
	}

	setState(state) {
		if (state !== 'unknown' && state !== 'miss' && state !== 'hit') {
			throw new Error('Invalid state');
		}
		this._state = state;
		this._element.className = 'cell_' + state;
	}	
}

class GameBoard extends ViewComponent {
	constructor() {
		super();
		this._element = document.createElement('table');
		const rowCount = 10;
		const columnCount = 10;
		for (let i = 0; i < rowCount; i++) {
			const row = document.createElement('tr');
			for (let i = 0; i < columnCount; i++) {
				const cell = new GameCell();
				row.appendChild(cell.getElement());
			}
		this._element.appendChild(row);
		}
	}
}

const gameElement = document.getElementById('game');
const board = new GameBoard();
gameElement.appendChild(board.getElement());



