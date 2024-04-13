try { 
	 webengage.onReady(function () {
    webengage.notification.onOpen(function (data) {
        if (data.notificationId === '1730621ac' || data.notificationId === '1730621ab' || data.notificationId === '~10cb42900' || data.notificationId === '22a3567a3' || data.notificationId === '1730621aa') {
            webengage.util.withWeJquery(function () {
                $weJQuery('#webklipper-publisher-widget-container-notification-frame').contents().find('a.promoCode').click(function (e) {

                    $weJQuery('#webklipper-publisher-widget-container-notification-frame').contents().find('a.promoCode').removeClass('offerCodeDisabled');
                    e.target.classList.add('offerCodeDisabled');
                    e.target.innerText = "CODE COPIED";
                    var data = e.target.parentElement;
                    var el = data.getElementsByClassName('dealName');
                    var dealText = el[0].innerText;
                    navigator.clipboard.writeText(dealText);

                });
            });
        }

    });
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '3k9e744');
	 }
 }
