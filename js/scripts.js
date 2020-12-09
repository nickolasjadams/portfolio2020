var body = document.body;
var bodyClasses = body.classList;

if (localStorage.getItem("darkMode")) {
	bodyClasses.add("dark");
}

document.querySelector(".dark-mode").addEventListener("click", function() {
	if (bodyClasses.toString().indexOf("dark") > -1) {
		bodyClasses.remove("dark");
		localStorage.clear();
	} else {
		bodyClasses.add("dark");
		localStorage.setItem("darkMode", true);
	}
});