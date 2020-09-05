const kana = [
	'あ', 'い', 'う', 'え', 'お',
	'か', 'き', 'く', 'け', 'こ',
	'さ', 'し', 'す', 'せ', 'そ',
	'た', 'ち', 'つ', 'て', 'と',
	'な', 'に', 'ぬ', 'ね', 'の',
	'は', 'ひ', 'ふ', 'へ', 'ほ',
	'や', 'ゆ', 'よ',
	'ら', 'り', 'る', 'れ', 'ろ',
	'わ', 'を', 'ん'];

// Emulates the Japanese IME I use
const conversionTable = { 
	'`':'ろ', 1:'ぬ', 2:'ふ', 3:'あ', 4:'う', 5:'え', 6:'お', 7:'や', 8:'ゆ',9:'よ', 0:'わ', ')':'を', '-':'ほ', '_':'ー', '=':'へ',
	q:'た', w:'て', e:'い', r:'す', t:'か', y:'ん', u:'な', i:'に', o:'ら', p:'せ', '[':'゛', ']':'゜', '\\':'む',
	a:'ち', s:'と', d:'し', f:'は', g:'き', h:'く', j:'ま', k:'の', l:'り', ';':'れ', '\'':'け',
	z:'つ', x:'さ', c:'そ', v:'ひ', b:'こ', n:'み', m:'も', ',':'ね', '.':'る', '/':'め' };

const green = 'LightGreen';
const red = 'LightCoral';

let targetKanaDisplay = document.getElementById('targetKanaDisplay');

document.addEventListener('keydown', (event) => {
	let convertedKey = conversionTable[event.key];
	
	if(convertedKey == targetKanaDisplay.textContent)
		pass();
	else if (event.key == 'Shift')
		;// nothing(); because shift is required for some kana
	else
		fail();
})

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

function randomKana() { //todo: ability to limit potential kana
	return kana[Math.floor(Math.random() * kana.length)];
}