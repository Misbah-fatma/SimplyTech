try { 
	webengage.onReady(function () {
  webengage.notification.onOpen(function (data) {
    setTimeout(function () {
     // var mediaQuery = window.matchMedia('(min-width: 600px)');
      if (data.notificationId === '1730599b2'||'~25143511c'||'~251435062'||'~251434880') {
          var eleMobile = document.querySelector("#webklipper-publisher-widget-container-notification-frame");
        
          
          var custom_styleMobile = {
            
            left: '-1000px'
           
        };
        
        Object.assign(eleMobile.style, custom_styleMobile);
       }

    }, 10);
  });

});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '3k9e714');
	 }
 }
