try { 
	function copy_to_clipboard(text) {
    var el = document.createElement('input');
    el.type="text";
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    el.setAttribute('value',text);
    el.setAttribute('readonly', '');
   
    document.body.appendChild(el);
    el.select();
    var success = document.execCommand('copy');
    document.body.removeChild(el);
    return success;
  }
  var dom = webengage.require("webengage/dom");
  webengage.onReady(function() {
    webengage.notification.onOpen(function() {
   
      var iframe = dom.queryOne("#webklipper-publisher-widget-container-notification-frame");
      var frameDoc = dom.iframe.getDoc(iframe);
      var iframeDom = dom.doc(frameDoc);
      var copy = iframeDom.queryOne('#copy-code');
      if (copy) {
        var events = webengage.require('webengage/events');
        var animate = webengage.require('webengage/animate');
        var copyText = copy.getAttribute("data-copy-value");
        events.bind(copy, 'click', function(event) {
          copy_to_clipboard(copyText);
          copy.innerHTML = "CODE COPIED";
        });
      }
    });
  });
  
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '3k9e6hb');
	 }
 }
