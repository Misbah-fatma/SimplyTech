try { 
	webengage.onReady(function () {
  webengage.notification.onOpen(function (data) {
    setTimeout(function () {
     // var mediaQuery = window.matchMedia('(min-width: 600px)');
      if (data.notificationId === '~10cb47608'||'~55853059'||'~10cb49097') {
          var eleMobile = document.querySelector("#webklipper-publisher-widget-container-notification-frame");
          
          var custom_styleMobile = {
            
            left: '-1017px'
           
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
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~a61h74j');
	 }
 }
