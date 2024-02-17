
document.addEventListener('DOMContentLoaded', function () {
	let fadeCb = (entries, observer) => {
		entries.forEach((entry) => {
			  if (entry.isIntersecting) {
				entry.target.classList.remove("fade-out");
				entry.target.classList.add("fade-in");
			  } else {
				  entry.target.classList.remove("fade-in");
				  entry.target.classList.add("fade-out");
			  }
		});
	};
	let titleCb = (entries, observer) => {
		entries.forEach((entry) => {
			  if (entry.isIntersecting) {
				entry.target.classList.remove("fly-in");
			  } else {
				  entry.target.classList.add("fly-in");
			  }
		});
	};
	
	let fadeOpts = {
		root: null,
		rootMargin: "-25%",
		threshold: 0,
	};
	let titleOpts = {
		root: null,
		rootMargin: "-25%",
		threshold: 0,
	};
	
	let fadeOb = new IntersectionObserver(fadeCb, fadeOpts);
	let titleOb = new IntersectionObserver(titleCb, titleOpts);
	
	document.querySelectorAll(".entry").forEach((i) => {
		if (i) { fadeOb.observe(i) }
	});
	document.querySelectorAll(".date-title").forEach((i) => {
		if (i) { titleOb.observe(i) }
	});
});