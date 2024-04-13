try { 
	webengage.onReady(function () {
            webengage.notification.onOpen(function (data) {
                if (data.notificationId === '31770702'||'b8a65154') {
                    webengage.util.withWeJquery(function () {
                        $weJQuery('#webklipper-publisher-widget-container-notification-frame').contents().find('#webklipper-publisher-widget-container-notification-container > div.description > div.main1 > div > a').click(function (e) {

                            $weJQuery('#webklipper-publisher-widget-container-notification-frame').contents().find('#webklipper-publisher-widget-container-notification-container > div.description > div.main1 > div > a').removeClass('offerCodeDisabled');
                            e.target.classList.add('offerCodeDisabled');
                          e.target.innerText = "COPIED";
                            var data = e.target.parentElement;
                            var el = data.getElementsByClassName('deal');
                            var dealText = el[0].textContent;
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
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~hg3ca4');
	 }
 }
