function createArticle() {
	
	let article = document.createElement("article");
	let h3  = document.createElement("h3");
	let p = document.createElement("p");

	let input = document.getElementById("createTitle");
	let textArea = document.getElementById("createContent");
	let articles = document.getElementById("articles");

	if (input === null || textArea === null || articles === null) {
		throw new Error("Something is wrong!!!");
	}
	h3.innerHTML = input.value;
	p.innerHTML = textArea.value;

	articles.appendChild(h3);
	articles.appendChild(p);
	articles.appendChild(article);

	input.value = "";
	textArea.value = "";	
}

const keyMap = {
	13: () => console.log("Eha!!!")
}

document.addEventListener("DOMContentLoaded", x => {
	document.getElementById("Btn").addEventListener("click",  createArticle);
	document.addEventListener("keypress", function (evt) {
		
		if (typeof keyMap[evt.keyCode] === "function") {
			keyMap[evt.keyCode]();
		}
	} );

});
