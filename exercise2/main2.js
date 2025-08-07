function createStars() {
	const container = document.querySelector("body");

	for (let i = 0; i < 1000; i++) {
		const star = document.createElement("div");
		star.className = "star";
		star.style.width = ".1px";
		star.style.height = ".1px";
		star.style.top = Math.random() * 100 + "%";
		star.style.left = Math.random() * 100 + "%";
		container.appendChild(star);
	}
}


let containerSize = { w: 40, h: 40 };
let planets = [
	{ cn: ".mercury", fn: "./img/1.水星.png", ps: { t: 12.5, l: 12.5, w: 15, h: 15, v: 1 }, bs: { t: 1.5, r: 0.8, w: 2, h: 2 }, },
	{ cn: ".venus", fn: "./img/2.金星.png", ps: { t: 10, l: 10, w: 20, h: 20, v: 2.5 }, bs: { t: 2, r: 2, w: 2, h: 2 }, },
	{ cn: ".earth", fn: "./img/3.地球.png", ps: { t: 6, l: 6, w: 28, h: 28, v: 4 }, bs: { t: 3, r: 0, w: 5, h: 5 }, },
	{ cn: ".moon", fn: "./img/3.1.月球.png", ps: { t: 2, r: -1, w: 7, h: 7, v: 10 }, bs: { t: 0.8, r: 0.2, w: 1.2, h: 1.2 }, },
	{ cn: ".mars", fn: "./img/4.火星.png", ps: { t: 2, l: 2.5, w: 36, h: 36, v: 7.5 }, bs: { t: 5, r: 3, w: 3, h: 3 }, },
	{ cn: ".jupiter", fn: "./img/5.木星.png", ps: { t: -2, l: -2, w: 45, h: 45, v: 12 }, bs: { t: 6, r: 3, w: 5, h: 5 }, },
	{ cn: ".saturn", fn: "./img/6.土星.png", ps: { t: -7, l: -7, w: 55, h: 55, v: 20 }, bs: { t: 7.5, r: 5, w: 4.5, h: 4.5 }, },
	{ cn: ".uranus", fn: "./img/7.天王星.png", ps: { t: -12, l: -12, w: 65, h: 65, v: 30 }, bs: { t: 9, r: 6.5, w: 4, h: 4 }, },
	{ cn: ".neptune", fn: "./img/8.海王星.png", ps: { t: -17, l: -17, w: 75, h: 75, v: 40 }, bs: { t: 10, r: 8, w: 4, h: 4 }, },
	{ cn: ".pluto", fn: "./img/9.冥王星.png", ps: { t: -22, l: -22, w: 85, h: 85, v: 50 }, bs: { t: 11, r: 10, w: 4, h: 4 }, },
];

function genPlanets() {
	let css = document.getElementById('css');
	let c = css.sheet;
	
	planets.forEach(p => {
		let div = document.querySelector(p.cn);
		let ds = div.style;

		ds.position = 'absolute';
		ds.borderStyle = 'solid';
		ds.borderColor = 'white transparent transparent transparent';
		ds.borderWidth = '0.1em 0.1em 0 0';
		ds.borderRadius = '50%';
		ds.top = p.ps.t + 'em';
		if (p.cn == '.moon')
			ds.right = p.ps.r + 'em';
		else
			ds.left = p.ps.l + 'em';
		ds.width = p.ps.w + 'em';
		ds.height = p.ps.h + 'em';
		ds.animation = `orbit ${p.ps.v}s linear infinite`;


		let divb = document.querySelector(`${p.cn} > .img`);
		let dbs = divb.style;

		dbs.position = 'absolute';
		dbs.borderRadius = '50%';
		dbs.animation = 'orbit 30s linear infinite';
		dbs.top = p.bs.t + 'em';
		dbs.right = p.bs.r + 'em';
		dbs.width = p.bs.w + 'em';
		dbs.height = p.bs.h + 'em';
		dbs.backgroundImage = `url(${p.fn})`;
		dbs.backgroundSize = 'cover';
	});
}

// 直接呼叫函數執行
genPlanets();
createStars();
