//your JS code here. If required.
function removeColor(){
	const value = document.querySelector('#colorSelect');
const selectedOption = value.options[value.selectedIndex];
value.removeChild(selectedOption);
}
const btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
	removeColor();
})
