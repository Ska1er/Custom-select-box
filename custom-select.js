const btn = document.getElementById("selectButton");

btn.addEventListener("click", function (event) {
	const div = document.getElementById("listBlock");
	div.classList.toggle("visible");
	event.target.classList.toggle("down-list-active");
});


const ul = document.getElementById("selectList");

ul.addEventListener("click", function (event) {
	const target = event.target;
	if(target.classList.contains("list-block__list-item") && !target.classList.contains("selected"))
	{
		console.log(target.innerHTML);	
		const btn = document.getElementById("selectButton");
		btn.innerHTML = event.target.innerHTML;
		const ul = document.getElementById('selectList');
		for(let i =0; i < ul.children.length; i++)
			ul.children[i].classList.remove("selected");

		target.classList.add("selected");		
	}

	const div = document.getElementById("listBlock");
	div.classList.remove("visible");
	btn.classList.remove("down-list-active");

});
