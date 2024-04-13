try { 
	webengage.onReady(function () {
            webengage.notification.onOpen(function (data) {
                if (data.notificationId === 'b8a6b4b3' || data.notificationId === '22a3573a2' || data.notificationId === '31775582') {
                    webengage.util.withWeJquery(function () {
                        $weJQuery('#webklipper-publisher-widget-container-notification-frame').contents().find('.promoCode').click(function (e) {

                            $weJQuery('#webklipper-publisher-widget-container-notification-frame').contents().find('.promoCode').removeClass('offerCodeDisabled');
                            e.target.classList.add('offerCodeDisabled');
                           e.target.innerText = "COPIED";
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
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', 'i2l1l5j');
	 }
 }
