const arr=[]



Survey.StylesManager.applyTheme("defaultV2");
var json = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "ranking",
          "name": "app-features",
          "title": "Please rank the following app features in order of importance:",
          "isRequired": true,
          "choices": [
            "availability",
            "ability to reserve time",
            "price",
            "payment methods",
            "charging location reviews",
            "charging speed",
            "paid reservation",
            "make ya dance"
          ]
        }
      ]
    }, {
      "name": "page2",
      "elements": [
        {
          "type": "radiogroup",
          "name": "experience",
          "isRequired": true,
          "title": "What is your driving experience level with EVs?",
          "colCount": 4,
          "choicesOrder": "asc",
          "choices": [
            "0-1 year",
            "1-2 years",
            "2-5 years",
            "5+ years"
          ]
        }
      ]
    }, {
            "name": "page3",
            "elements": [
              {
                "type": "radiogroup",
                "name": "car",
                "isRequired": true,
                "title": "What is your favorite EV brand?",
                "colCount": 3,
                "choicesOrder": "asc",
                "choices": [
                  "Ford",
                  "Hyundai",
                  "Volkswagen",
                  "Nissan",
                  "Audi",
                  "Mercedes-Benz",
                  "BMW",
                  "Lucid Motors",
                  "honda",
                  "Toyota",
                  "BYD",
                  "Tesla",
                  "Kia",
                  "Chevrolet",
                  "other"
                ]
              }
             // {
        //   "type": "ranking",
        //   "name": "bestcar",
        //   "isRequired": true,
        //   "visibleIf": "{car.length} > 1",
        //   "title": "What car did you enjoy the most?",
        //   "choicesFromQuestion": "car",
        //   "choicesFromQuestionMode": "selected"
        // }
      ]
    }
  ]
};
 window.survey = new Survey.Model(json);
 survey.onComplete.add(async function (sender) {
  
//   //document.querySelector('#surveyResult').textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
//   localStorage.setItem('session',JSON.stringify(sender.data,null, 3));
  
//   const string = JSON.stringify(sender.data);
//   const myObject = JSON.parse(string);
//   console.log();
  
//   //var session = localStorage.getItem('session');
//   //console.log('session: JSON.parse(session));')

//   //const out = JSON.parse(localStorage.getItem(sender.data));
//   //console.log(out);
console.log(sender.data);
if (sender.data) {
  const response = await fetch('/api/surveys/saveSurvey', {
    method: 'POST',
        body:{
        title: "",
        //content: JSON.stringify(sender.data,null, 3),
        content:sender.data,
        //user_id: req.body.user_idß
        },
    
        headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log in');
  }
}
});
$("#surveyElement").Survey({model: survey});
