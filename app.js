(function() {
	console.log("hello");

	let finalMessage = {
		name: "",
		email: "",
		message: ""
	};

	const getDomElements = () => {
		const emailBtn = document.querySelector(".form-submit-btn");
		const name = document.querySelector("#name");
		const email = document.querySelector("#email");
		const message = document.querySelector("#message");
		const confirmMsg = document.querySelector(".confirm-msg");

		return {
			emailBtn,
			name,
			email,
			message,
			confirmMsg
		};
	};

	const handleEvents = () => {
		const { emailBtn, name, email, message, confirmMsg } = getDomElements();

		[ name, email, message ].forEach((input) => {
			input.addEventListener("input", (e) => {
				console.log("input evt: ", e);
				const { target: { name, value } } = e;
				finalMessage[name] = value;
			});
		});

		emailBtn.addEventListener("click", (e) => {
			e.preventDefault();
			// console.log("evt: ", e, name);
			console.log("form data: ", finalMessage);
			// run validation logic and output red errors if empty, etc.
			// if (!isFormValid) {
			// set DOM divs to display block (Apply show class)
			// } else {
			// submit final message to backend
			// req.body = {name, email, message}
			// axios.post("/email", finalMessage).then().catch()

			// }

			// clear form
			finalMessage = {
				name: "",
				email: "",
				message: ""
			};

			// send confirmation popup or failure msg in then block
			confirmMsg.classList.add("show");
			setTimeout(() => {
				confirmMsg.classList.remove("show");
			}, 3000);
		});
	};

	handleEvents();
})();
