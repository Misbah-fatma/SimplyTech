
        var webengage;
        var webEngageId = "311c5642";
        window.weScript = document.createElement('script');
        window.weScript.id = "_webengage_script_tag";
        window.weScript.type = 'text/javascript';
        window.weScript.rel = "preconnect";
        window.weScript.rel = "dns-prefetch";
        window.isWeScriptLoaded = false;

        window.webengageOnLoad = function (callback, scriptLoadCallback) {
            if (window.isWeScriptLoaded) {
                if (typeof scriptLoadCallback === "function") scriptLoadCallback();
                webengage.onReady(callback);
                return;
            }
            window.weScript.addEventListener("load", function () {
                window.isWeScriptLoaded = true;
                if (typeof scriptLoadCallback === "function") scriptLoadCallback();
                (function () {
                    webengage.onReady(callback);
                })();
            });
        }
        window.addEventListener("load", function () {
            var weDelay = window.CUSTOM_DELAY || window.pageLoadDelay || 0;
            if (!weDelay) {
                weDelay = (typeof PAGE_DELAY_CONFIG === "object" && !isNaN(PAGE_DELAY_CONFIG.we)) ? PAGE_DELAY_CONFIG.we : window.pageLoadDelay;
            }
            setTimeout(function () {
                // window.weScript.src = window.Config.app.APP_STATIC_URL + '/js/webengage-init.nfxm91n1p1.js';
                window.weScript.innerHTML = 'var webengage;!function(w,e,b,n,g){function o(e,t){e[t[t.length-1]]=function(){r.__queue.push([t.join("."),arguments])}}var i,s,r=w[b],z=" ",l="init options track screen onReady".split(z),a="feedback survey notification".split(z),c="options render clear abort".split(z),p="Open Close Submit Complete View Click".split(z),u="identify login logout setAttribute".split(z);if(!r||!r.__v){for(w[b]=r={__queue:[],__v:"6.0",user:{}},i=0;i < l.length;i++)o(r,[l[i]]);for(i=0;i < a.length;i++){for(r[a[i]]={},s=0;s < c.length;s++)o(r[a[i]],[a[i],c[s]]);for(s=0;s < p.length;s++)o(r[a[i]],[a[i],"on"+p[s]])}for(i=0;i < u.length;i++)o(r.user,["user",u[i]]);setTimeout(function(){var f=e.createElement("script"),d=e.getElementById("_webengage_script_tag");f.type="text/javascript",f.rel="dns-prefetch",f.async=!0,f.src=("https:"==e.location.protocol?"https://ssl.widgets.webengage.com":"http://cdn.widgets.webengage.com")+"/js/webengage-min-v-6.0.js",d.parentNode.insertBefore(f,d)})}}(window,document,"webengage");webengage.init(webEngageId);'
                document.getElementsByTagName('head')[0].appendChild(weScript);
                window.weScript.dispatchEvent(new Event('load'));
            }, weDelay);
        });
        window.weScript.addEventListener("load", function () {
            window.isWeScriptLoaded = true;
        });
    
