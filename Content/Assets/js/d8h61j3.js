try { 
	webengage.survey.onComplete(function (data) {
    if (data.surveyId === "7djke5e") {
        setTimeout(function () {
        var Q1 = data.questionResponses[0].value.values[0];
        var Q2 = data.questionResponses[1].value.values[0];
        var Q3 = data.questionResponses[2].value.values[0];

        console.log(data);
        
        console.log("Q1",Q1);
        console.log("Q2",Q2);
        console.log("Q3", Q3);
       
        if(Q1 !== 'Meesho' || Q2 !== 'Steve Jobs' || Q3 !== 'Google'){
          console.log('not 3/3');
          webengage.state.reset();
		parent.webengage.survey.render({surveyId: '7djke5e',forcedRender: true,skipRules: true});
        }else{
            console.log('yes its 3/3');
        }
       


        },2000);
    }
});



 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', 'd8h61j3');
	 }
 }
