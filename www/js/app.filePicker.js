
var filePicker = (function ($, app) {
    "use strict";

   

    app.handleFiles = function(elm) {
            event.stopPropagation();
	    var currentField = $(elm);
	    

	    window.plugins.filePicker.show(function(returnURL) {
	        if(returnURL !== "") {
                    
	            currentField.attr("fileURL",returnURL);
	            currentField.val(returnURL.lastIndexOf('/')+1);
	            
                    
	        }
	       
                
	    });
    };

    return app;
}(jQuery, filePicker || {}));

