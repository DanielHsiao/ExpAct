
// 這是單行註解
let cnt = 0;

/* 
	這是多行註解
	通常用來做大篇幅的說明
*/
function sayHello1() {
	
	showMsg(`Hello World ${++cnt}`);  // 這也是單行註解
}

function showMsg(msg) {
	document.getElementById('msg').textContent = msg;
}



// 以下程式碼請在 Console 中執行 ************

// showMsg('Hello World! - Message Box');
// alert('Hello World! - Alert Box');
// console.log('Hello World! - Console log')

