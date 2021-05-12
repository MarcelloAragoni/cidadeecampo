(function() {
	function performSearch(event) {
	event.preventDefault();
	var searchInput = document.getElementById('search-input');
		if (searchInput.value) {
		  window.location = "/" + searchInput.value;
		}
	}
	function performSearchResponsive(event) {
	event.preventDefault();
	var searchInputResponsive = document.getElementById('search-input-responsive');
		if (searchInputResponsive.value) {
		  window.location = "/" + searchInputResponsive.value;
		}
	}
	var searchForm = document.getElementById('search-form');
	searchForm.onsubmit = performSearch;
	var searchFormResponsive = document.getElementById('search-form-responsive');
	searchFormResponsive.onsubmit = performSearchResponsive;
})()