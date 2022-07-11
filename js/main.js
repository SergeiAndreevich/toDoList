const unlinkedList = document.querySelector('main-content__notes');
const btn = document.querySelector('btn');
const note = document.querySelector('list-item');
btn.addEventListener('click', function (e) {
	console.log('click');
	const newNote = note.cloneNode();
	unlinkedList.imsertAdjacentHTML('afterend', newNote);
});
