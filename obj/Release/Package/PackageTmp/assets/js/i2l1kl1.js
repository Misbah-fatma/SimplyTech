try { 
	webengage.onReady(function() {

    webengage.survey.onSubmit(function(data) {
        var email, first_name, phone, many;
        console.log("data.surveyId : ", data.surveyId + "data :" + data);
        for (var i = 0; i < data.questionResponses.length; i++) {
            if (data.questionResponses[i].questionId === '1kkn7b2') {
                for (var key in data.questionResponses[i].value.values) {
                    if (data.questionResponses[i].value.values.hasOwnProperty(key)) {
                        if (key === 'Email') {
                            email = data.questionResponses[i].value.values[key];
                        } else if (key === 'Phone') {
                            phone = data.questionResponses[i].value.values[key];
                        } else if (key === 'Name') {
                            first_name = data.questionResponses[i].value.values[key];
                        }
                    }
                }
            } else if (data.questionResponses[i].questionId === '1ndimn6') {
                many = data.questionResponses[i].value.values[0];
            }
        }
        console.log("surveyId : " + data.surveyId + " email :" + email + " phone :" + phone + " Name :" + first_name + "many : " + many);
        webengage.user.login(email);
        webengage.user.setAttribute({
            'we_email': email,
            'we_first_name': first_name,
            'we_phone': phone,
          'SL_Purdue_TotalWorkExp' : many,
            'Contact Source': 'WebEngage Lead Gen Blog'
        });
        webengage.track('Contact Created', {
            'we_email': email,
            'we_first_name': first_name,
            'we_phone': phone,
            'Contact Source': 'WebEngage Lead Gen Blog',
            'surveyId': data.surveyId
        });
    });

});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', 'i2l1kl1');
	 }
 }
