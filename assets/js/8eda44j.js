try { 
	_weq['webengage.enableCallbacks'] = true;
_weq['webengage.notification.onOpen'] = function (data) {

webengage.util.withWeJquery(function () {

  // Code for Timer

  var span = $weJQuery("#webklipper-publisher-widget-container-notification-frame").contents().find('#webklipper-publisher-widget-container-notification-container > div > div > div#header_cntdwn')[0];

  if(span){
    var notifications = webengage_fs_configurationMap.notificationRuleList;
    var _ls;
    for(var i in notifications){
      if(notifications[i].notificationEncId === data.notificationId){
        _ls = notifications[i].endTimestamp;
        break;
      }
    }
    if(typeof _ls != 'undefined'){
       setInterval(function(){
           var _cs = (new Date()).getTime();

        if(!span) return;
        _cs += 1000;
        var delta      = Math.floor((_ls - _cs)/1000);
        var days       = Math.floor(delta/24/60/60);
        delta          = delta - days*86400;
        var hours      = Math.floor(delta/3600)%24;
        delta          = delta - hours*3600;
        var minutes    = Math.floor(delta/60)%60;
        delta          = delta - minutes*60;
        var remainingSeconds = delta % 60;
        if (remainingSeconds < 10) {
          remainingSeconds = "0" + remainingSeconds;
        }
      var daylabel = " day";
     if(days > 1){
       daylabel = " days";
     }

     var hourLabel     = hours > 1 ? " hours" : " hour";
     var minuteLabel   = minutes > 1 ? " minutes" : " minute";
     var secondLabel   = remainingSeconds > 1 ? " seconds" : " second";

        $weJQuery(".we-day").html(days+daylabel);
        $weJQuery(".we-day-0", span).html(Math.floor(days / 10)+"");
        $weJQuery(".we-day-1", span).html((days % 10)+"");
        $weJQuery(".we-hr-0", span).html(Math.floor(hours / 10)+"");
        $weJQuery(".we-hr-1", span).html((hours % 10)+"");
        $weJQuery(".we-min-0", span).html(Math.floor(minutes / 10)+"");
        $weJQuery(".we-min-1", span).html((minutes % 10)+"");
        $weJQuery(".we-sec-0", span).html(Math.floor(remainingSeconds / 10)+"");
        $weJQuery(".we-sec-1", span).html((remainingSeconds % 10)+"");
      },1000);
    }


  }
});
};
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '8eda44j');
	 }
 }
