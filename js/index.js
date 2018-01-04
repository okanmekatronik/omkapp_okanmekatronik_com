
$(function () {
	$("[data-role='navbar']").navbar();
	$("[data-role='header'], [data-role='footer']").toolbar();
});
// Update the contents of the toolbars
$(document).on("pagecontainerchange", function () {
	// Each of the four pages in this demo has a data-title attribute
	// which value is equal to the text of the nav button
	// For example, on first page: <div data-role="page" data-title="Info">
	var current = $(".ui-page-active").jqmData("title");
	// Change the heading
	$("[data-role='header'] h1").text(current);
	// Remove active class from nav buttons
	$("[data-role='navbar'] a.ui-btn-active").removeClass("ui-btn-active");
	// Add active class to current nav button
	$("[data-role='navbar'] a").each(function () {
		if ($(this).text() === current) {
			$(this).addClass("ui-btn-active");
		}
	});
});

var app = {
	// Application Constructor
	initialize: function () {
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
	},

	// deviceready Event Handler
	//
	// Bind any cordova events here. Common events are:
	// 'pause', 'resume', etc.
	onDeviceReady: function () {
		this.receivedEvent('deviceready');
	},

	// Update DOM on a Received Event
	receivedEvent: function (id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	}
};

app.initialize();