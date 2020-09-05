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

// Emulates my personal Japanese IME
const conversionTable = { 
	'`':'ろ', 1:'ぬ', 2:'ふ', 3:'あ', 4:'う', 5:'え', 6:'お', 7:'や', 8:'ゆ',9:'よ', 0:'わ', ')':'を', '-':'ほ', '_':'ー', '=':'へ',
	q:'た', w:'て', e:'い', r:'す', t:'か', y:'ん', u:'な', i:'に', o:'ら', p:'せ', '\\':'む',
	a:'ち', s:'と', d:'し', f:'は', g:'き', h:'く', j:'ま', k:'の', l:'り', ';':'れ', '\'':'け',
	z:'つ', x:'さ', c:'そ', v:'ひ', b:'こ', n:'み', m:'も', ',':'ね', '.':'る', '/':'め' };

let display = document.getElementById('display');

document.addEventListener('keydown', function(event) {
	display.textContent=conversionTable[event.key];
})