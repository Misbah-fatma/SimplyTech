
        function downloadGaAtOnload() {
            //GTM init
            var delay = window.CUSTOM_DELAY || window.pageLoadDelay || 0;
            if (!delay) {
                delay = (typeof PAGE_DELAY_CONFIG === "object" && !isNaN(PAGE_DELAY_CONFIG.gtm)) ? PAGE_DELAY_CONFIG.gtm : 0;
            }
            setTimeout(function () {
                gtmLoadScript();
            }, delay)
        }

        if (window.addEventListener)
            window.addEventListener("load", downloadGaAtOnload, false);
        else if (window.attachEvent)
            window.attachEvent("onload", downloadGaAtOnload);
        else window.onload = downloadGaAtOnload;

        function gtmLoadScript() {
            // set user_params.utm_params. This should run before gtm trigger
            //fetchUTMSource();
            (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'user_params' ? '&l=' + l : '';
                j.defer = true;
                j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-WTL3CF');
        }