document.addEventListener('DOMContentLoaded', function () {
	// Add click listener for images on timeline.
	var images = document.getElementsByTagName('img'); 
	
	for(var i = 0; i < images.length; i++) {
		var image = images[i];
		image.onclick = (function(e) {
			return function(element) {
				window.open(element.src, '_blank').focus();
			}(e.srcElement)
		});
	}
});