try { 
	webengage.survey.onSubmit(function (data) {
    if (data.surveyId === "33l10m2") {
      //  var first_name = null;
        var phone_no = null;
        var email = null;
        //var whatsapp = null;
      console.log(data);
        for (var i = 0; i < data.questionResponses.length; i++) {
          if (Object.prototype.toString.call(data.questionResponses[i].value.values) == "[object Array]") {
                    console.log("Object array");
                    for (var j = 0; j < data.questionResponses[i].value.values.length; j++) {
                        var ele = data.questionResponses[i].value.values[j];
                        if (data.questionResponses[i].questionId == "~qj113d") {
                            whatsapp = ele;
                        }
                    }
                } 
            if (
                Object.prototype.toString.call(
                    data.questionResponses[i].value.values
                ) == "[object Object]"
            ) {
                for (var keys in data.questionResponses[i].value.values) {
                 console.log(keys);
                 //   if (keys == "First Name") {
                  //      first_name = data.questionResponses[i].value.values[keys];
                  //  }
                  
                    if (keys == "Enter your mobile number") {
                        phone_no = data.questionResponses[i].value.values[keys];
                    }
                    
                    if (keys == "Enter your email address") {
                        email = data.questionResponses[i].value.values[keys];
                    }
        
                }
            }
        }
      //  console.log("we_first_name", first_name);
       
       console.log("we_email", email);
      
       console.log("we_phone", phone_no);
    //   console.log("we_whatsapp_opt_in", whatsapp);

      
        if (
            webengage &&
            webengage.state &&
            typeof webengage.state.getForever === "function" &&
            (webengage.state.getForever().cuid === null ||
                webengage.state.getForever().cuid === undefined) &&
            phone_no !== null
        ) {
           webengage.user.login(email);
            webengage.user.setAttribute({               
               // "we_first_name": first_name,
                "we_phone": "+91" + phone_no,
               "we_email": email
            });
           webengage.user.setAttribute('we_whatsapp_opt_in', true);
          webengage.track('Survey_submitted', {
            //  "we_first_name":first_name,
              "we_phone": "+91" + phone_no,
              "we_email":email              
               });
        }
      
    
    }
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~a61h76i');
	 }
 }
