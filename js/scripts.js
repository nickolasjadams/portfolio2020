var body = document.body;
var bodyClasses = body.classList;

if (localStorage.getItem("darkMode")) {
	bodyClasses.add("dark");
}

document.querySelector(".dark-mode").addEventListener("click", function() {
	$(".toast").removeClass("d-none");
	if (bodyClasses.toString().indexOf("dark") > -1) {
		bodyClasses.remove("dark");
		localStorage.clear();
		$(".toast-body").html("Woah! The lighter is my favorite too!<br>I'll remember that for you.");
	} else {
		bodyClasses.add("dark");
		localStorage.setItem("darkMode", true);
		$(".toast-body").html("That's much easier on the eyes. I like dark much more.<br>I'll remember that for you.");
	}
	var d = new Date();
	var hour = (d.getHours() > 12) ? d.getHours() % 12 : d.getHours();
	var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
	$('.toast .timestamp').html(hour + ":" + minutes);
	$('.toast').toast('show');
});

var slug = window.location.pathname;
var domain = window.location.hostname;

if (slug == "/" || slug.indexOf("index.html") > -1) {
	$("nav a:contains('Posts')").addClass('active');
} else {
	document.querySelectorAll('nav a').forEach(function(a) {
		// must contain domain
		if (a.href.indexOf(domain) > -1) {
			// and slug
			if (a.href.indexOf(slug) > -1) {
				a.classList.add('active');
			}
		}
	});
}