chrome.app.runtime.onLaunched.addListener(function() {
    var win = chrome.app.window.create('index.html', {
	  	frame: "none",
      resizable: false,
    	'bounds': {
	        'width': 1240,
	        'height': 700,
      }
    });
  });
