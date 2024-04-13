
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-CG9EYRX7VL', { "site_speed_sample_rate": 20, "transport_type": "beacon" });
        window.addEventListener('load', () => {
            var transport_type = 'xhr';
            if (typeof window.SLFunctions !== "undefined") {
                if (!window.SLFunctions.browser().isIE) {
                    transport_type = 'beacon';
                }
            }
            var showGA4Logs = window.Config && window.Config.app && window.Config.app.printGaInConsole;

            if (showGA4Logs) {
                console.group('GA4 Configure');
                console.log('GA4 Transport Type', transport_type);
            }

            gtag('config', {
                'transport_type': "" + transport_type + "",
            });

            gtag('consent', 'default', {
                'ad_storage': "granted",
                'analytics_storage': "granted",
            });

            gtag('consent', 'default', {
                'ad_storage': "denied",
                'analytics_storage': "denied",
                'wait_for_update': 500,
                'region': ["GB", "CH", "AT", "BE", "BG", "BQ", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "MF", "SK", "SI", "ES", "SE"]
            });

            var commonEventData = {
                'page_type': window?.PAGE_TYPE ?? 'not set',
                'user_id': window?.user_params?.user_id ?? '',
                'country': 'IN',
            };
            var pageLevelData = {};
            pageLevelData = JSON.parse(JSON.stringify(pageLevelData));
            if (pageLevelData) {
                commonEventData = Object.assign(commonEventData, pageLevelData);
            }

            gtag('set', commonEventData);
            window.commonEventData = commonEventData;
            window.pageLevelData = pageLevelData;

            if (showGA4Logs) {
                console.groupEnd();
            }
        });
