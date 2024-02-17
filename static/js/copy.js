document.addEventListener('DOMContentLoaded', function () {
	const permalink = document.getElementById('permalink');
	
	if (permalink) {
		permalink.addEventListener('click', function (e) {
			navigator.clipboard.writeText(window.location.href);
			var oldText = permalink.innerHTML;
			permalink.innerHTML = "copied!";
	
			setTimeout(function () {
				permalink.innerHTML = oldText;
			}, 3000);
		});
	}
	
	const conversations = document.querySelector("div.microblog_conversation");
	
	if(conversations) {
		const repliesHeader = document.querySelector("div.replies-header");
		if(repliesHeader) {
			repliesHeader.style.display = "block";
		}
	}
});