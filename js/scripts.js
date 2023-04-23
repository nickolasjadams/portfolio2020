
var slug = window.location.pathname;
var domain = window.location.hostname;

if (slug == "/" || slug.indexOf("index.html") > -1) {
	$("nav a:contains('Home')").addClass('active');
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