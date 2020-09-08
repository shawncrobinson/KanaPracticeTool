const green = 'LightGreen';
const red = 'LightCoral';

// Emulates the Japanese IME I use
const conversionTable = { 
	'`':'ろ', 1:'ぬ', 2:'ふ', 3:'あ', 4:'う', 5:'え', 6:'お', 7:'や', 8:'ゆ',9:'よ', 0:'わ', ')':'を', '-':'ほ', '_':'ー', '=':'へ',
	q:'た', w:'て', e:'い', r:'す', t:'か', y:'ん', u:'な', i:'に', o:'ら', p:'せ', '[':'゛', ']':'゜', '\\':'む',
	a:'ち', s:'と', d:'し', f:'は', g:'き', h:'く', j:'ま', k:'の', l:'り', ';':'れ', '\'':'け',
	z:'つ', x:'さ', c:'そ', v:'ひ', b:'こ', n:'み', m:'も', ',':'ね', '.':'る', '/':'め' };

let possibleKana = [];

let targetKanaDisplay = document.getElementById('targetKanaDisplay');

let  aColumnKana = new KanaColumn(['あ', 'い', 'う', 'え', 'お'], "aButton")
let kaColumnKana = new KanaColumn(['か', 'き', 'く', 'け', 'こ'], "kaButton")
let saColumnKana = new KanaColumn(['さ', 'し', 'す', 'せ', 'そ'], "saButton")
let taColumnKana = new KanaColumn(['た', 'ち', 'つ', 'て', 'と'], "taButton")
let naColumnKana = new KanaColumn(['な', 'に', 'ぬ', 'ね', 'の'], "naButton")
let haColumnKana = new KanaColumn(['は', 'ひ', 'ふ', 'へ', 'ほ'], "haButton")
let maColumnKana = new KanaColumn(['ま', 'み', 'む', 'め', 'も'], "maButton")
let yaColumnKana = new KanaColumn(['や', 'ゆ', 'よ'], "yaButton")
let raColumnKana = new KanaColumn(['ら', 'り', 'る', 'れ', 'ろ'], "raButton")
let waColumnKana = new KanaColumn(['わ', 'を', 'ん'], "waButton")

aColumnKana.checkbox.checked = true;
possibleKana = aColumnKana.kana;

document.addEventListener('keydown', (event) => {
	let convertedKey = conversionTable[event.key];
	
	if(convertedKey == targetKanaDisplay.textContent)
		pass();
	else if (event.key == 'Shift')
		;// nothing(); because shift is required for some kana
	else
		fail();
})

function KanaColumn(inputKana, checkboxID) {
	this.kana = inputKana;
	this.checkbox = document.getElementById(checkboxID)
		
	this.checkbox.addEventListener('change', () => {
		if (this.checkbox.checked) { // Add to possible kana
			possibleKana=possibleKana.concat(this.kana)
		} else if (possibleKana.length > 5) { // If allowed, remove from possible kana
			let index = possibleKana.indexOf(this.kana[0])
			possibleKana.splice(index,this.kana.length)
		} else { // If not allowed, undo check
			this.checkbox.checked = true; 
		}
	})
}

function pass() {
	console.log('pass');
	targetKanaDisplay.style.color = green;
	//animations? wait?
	targetKanaDisplay.textContent = randomKana();
	//targetKanaDisplay.style.color = 'Black';
}

function fail() {
	console.log('fail');
	targetKanaDisplay.style.color = red;
}

function randomKana() {
	return possibleKana[Math.floor(Math.random() * possibleKana.length)];
}