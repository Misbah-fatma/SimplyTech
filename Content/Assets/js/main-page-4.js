
        window.addEventListener('load', function () {
            if (typeof window._taq === "undefined") {
                window._taq = { "id": "a6ac3e6e-c86b-4536-aedd-105a3df85b16", "events": [], "handlers": [] };
            }
            var ta = document.createElement('script');
            ta.type = 'text/javascript';
            ta.async = true;
            ta.id = "__ta";
            ta.src = '//cdn-jp.gsecondscreen.com/static/tac.min.js';
            var fs = document.getElementsByTagName('script')[0];
            var delay = window.CUSTOM_DELAY || 0;
            if (!delay) {
                delay = (typeof PAGE_DELAY_CONFIG === "object" && !isNaN(PAGE_DELAY_CONFIG.gamooga)) ? PAGE_DELAY_CONFIG.gamooga : 0;
            }
            setTimeout(function () {
                fs.parentNode.insertBefore(ta, fs);
            }, delay);
            ta.onload = function () {
                var gamoogaChatSpan = document.getElementsByClassName("gamooga_chat_span");
                var gamoogaChatLoading = document.getElementsByClassName("gamooga_chat_loading");
                var gamoogaChatLink = document.getElementsByClassName("ive_chat_right")[0];
                if (gamoogaChatSpan.length == 0) {
                    return;
                }
                gamoogaChatLoading[0].className = gamoogaChatLoading[0].className + " hidden_class";
                gamoogaChatSpan[0].className = gamoogaChatSpan[0].className.replace("hidden_class", " ");
                gamoogaChatLink.style.cursor = "pointer";
            };
        });
