const  { createApp } = Vue;

const app = createApp({
	data() {
		return {
			students: [
				{ id: 1, name: "Alice", age: 18, level: 2, score: 88 },
				{ id: 2, name: "Bob", age: 21, level: 1, score: 96 },
				{ id: 3, name: "Cindy", age: 15, level: 1, score: 95 },
				{ id: 4, name: "Deryl", age: 23, level: 3, score: 70 },
				{ id: 5, name: "Emma", age: 27, level: 3, score: 56 },
				{ id: 6, name: "Fillip", age: 39, level: 1, score: 72 },
				{ id: 7, name: "George", age: 18, level: 2, score: 80 },
				{ id: 8, name: "Harry", age: 19, level: 3, score: 90 },
				{ id: 9, name: "IU", age: 20, level: 3, score: 99 },
			],
			status: 0, // 0: 無, 1: 新增, 2: 修改, 3: 詳細, 4: 刪除
			statusStr: ["無", "新增", "修改", "詳細", "刪除"],
			statusClass: ["", "btn-green", "btn-yellow", "", "btn-red"],
			student: {}, // for Dialog
		};
	},
	methods: {
		addData: function () {
			let data = { id: 0, name: "", age: 20, level: 1, score: 10 };
			this.openDialog(data, 1);
		},
		editData: function (id) {
			let data0 = this.students.find((p) => p.id === id);
			let data = Object.assign({}, data0);
			this.openDialog(data, 2);
		},
		detData: function (id) {
			let data = this.students.find((p) => p.id === id);
			this.openDialog(data, 3);
		},
		delData: function (id) {
			let data = this.students.find((p) => p.id === id);
			this.openDialog(data, 4);
		},

		confirmDialog: function () {
			let data = this.student;

			if (this.status == 1) {  // 1: 新增
				let item = this.student;
				let item0 = this.students.reduce((p1, p2) => p1.id > p2.id ? p1 : p2 );  // 取得最大的 ID
				item.id = !!item0 ? item0.id + 1 : 1;   // 計算下一個 ID

				this.students.push(item);  // insert into student (...) values (...);
			} else if (this.status == 2) {  // 2: 修改
				let item = this.student;
				let item0 = this.students.find(p => p.id === item.id);  // sql select * from student where id == item.id;

				if (item0) {
					Object.assign(item0, item); // update from student set name = name, .... where id == item.id;
				}
			} else if (this.status == 4) {  // 4: 刪除
				let id = this.student.id;
				let item0 = this.students.find(p => p.id === id);    // sql select * from student where id == item.id;
				
				if (item0) {
					this.students.splice(this.students.indexOf(item0), 1);  // delete from student where id == id;
				}
			}

			this.closeDialog();
		},
		openDialog: function (data, status) {
			this.student = data;
			this.status = status;
			document.querySelector(".dialog").showModal();
		},
		closeDialog: function () {
			document.querySelector(".dialog").close();
			this.student = {};
			this.status = 0;
		},
	},
	computed: {},
});

app.mount("#app");
