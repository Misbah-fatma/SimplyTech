try { 
		webengage.onReady(function() {
/*	webengage.survey.options('defaultRender', false);
	//	webengage.notification.options('enableCallbacks', true);
	console.log('out');
	webengage.notification.onOpen(function(data) {
		var noButton;
		console.log('in');
		if (data.notificationId === '~558629ca') {
			console.log('if ');
			webengage.util.withWeJquery(function() {
				noButton = $weJQuery("#webklipper-publisher-widget-container-notification-frame").contents().find('button');
				console.log('if ', noButton);
				noButton.bind("click", function(event) {
					webengage.survey.options('defaultRender', true);
					webengage.survey.render({
						surveyId: '~162i53a',
						forcedRender: true,
						skipRules: true
					});
				});
			});
		}
	});

*/
	webengage.survey.onSubmit(function(data) {
		var email, first_name, phone;
		console.log(data);
		for (var i = 0; i < data.questionResponses.length; i++) {
			if (data.questionResponses[i].questionId === '~qj144n') {
				for (var key in data.questionResponses[i].value.values) {
					if (data.questionResponses[i].value.values.hasOwnProperty(key)) {
						//var x = (key === 'Email') ? email = data.questionResponses[i].value.values[key]
						//  : (key === 'Interested in') ? option = data.questionResponses[i].value.values[key] 
						//: (key === 'Name') ? first_name =  data.questionResponses[i].value.values[key] 
						//   : console.log('nothing'); 
						if (key === 'Email') {
							email = data.questionResponses[i].value.values[key];
						} else if (key === 'Phone') {
							phone = data.questionResponses[i].value.values[key];
						} else if (key === 'Name') {
							first_name = data.questionResponses[i].value.values[key];
						} else {
							console.log('nothing');

						}
					}
				}
			}
		}
		var f_name = first_name.split(' ')[0];
		var l_name = first_name.split(' ')[1];
		webengage.user.login(email);
		webengage.user.setAttribute({
			'we_email': email,
			'we_first_name': f_name,
			'we_last_name': l_name,
			'we_phone': phone,
			'Contact Source': 'WebEngage Lead Gen Blog'
		});
		webengage.track('Contact Created', {
			'we_email': email,
			'we_first_name': first_name,
			'we_phone': phone,
			'Contact Source': 'WebEngage Lead Gen Blog'
		});
	});

});
webengage.survey.onOpen(function(data) {
	if (webengage && webengage.state.getForever().cuid) {
		console.log(' ---------open with login-----------');
		webengage.util.withWeJquery(function() {
			var ifrm = document.createElement("iframe");
			ifrm.setAttribute("src", "about:blank");
			ifrm.style.display = "none";
			document.body.appendChild(ifrm);

		});
	}
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~f05d4kf');
	 }
 }
