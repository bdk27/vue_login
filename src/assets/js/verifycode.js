export default function() {
	//全域變數 紀錄驗證碼
	let code = '';
	let checkCode = document.getElementById("code");

	//顏色組
	const fontColor = ['red', 'orange', 'yellow', 'green'];
	const bgColor = [ 'blue', 'indigo', 'purple', 'gold'];
	const ls = ['2px', '6px', '-2px', '4px'];
	let iColor = 0;

	//隨機設定顏色組合
	function randColor() {
		iColor = Math.floor(Math.random() * (fontColor.length));
		return iColor;
	}
	function createCode() {
		let ci = randColor()
		checkCode.style.color = fontColor[ci];
		checkCode.style.backgroundColor = bgColor[ci];
		checkCode.style.letterSpacing = ls[ci];

		code = '';
		let codeLength = 6;//驗證碼的長度	
		const random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//隨機數 
		for(let i=0; i<codeLength; i++) {
			let index = Math.floor(Math.random() * 36);//取得隨機數的索引（0~35） 
			code  += random[index];//根據索引取得隨機數加到code上 
		} 
		checkCode.innerText = code;//把code值賦給驗證碼
	}
	//更新驗證碼
	let recode = document.getElementById('recode');
	recode.addEventListener("click",function(){
		createCode();
	});
	
	createCode();
}

