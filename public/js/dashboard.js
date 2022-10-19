//Launch survey
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
            "Availability",
            "Ability to reserve time",
            "Price",
            "Payment methods",
            "Charging location reviews",
            "Charging speed",
            "Paid reservation",
            "Make ya dance"
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
            "1-3 years",
            "3-5 years",
            "> 5 years"
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
                  "Honda",
                  "Toyota",
                  "BYD",
                  "Tesla",
                  "Kia",
                  "Chevrolet",
                  "Other"
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

//saving survey results to survey_db
console.log(sender.data);
if (sender.data) {
  const response = await fetch('/api/surveys/saveSurvey', {
    method: 'POST',
    body: JSON.stringify({
      title: "Survey result",
      content: JSON.stringify(sender.data),
      //user_id: req.body.user_id
    }),    
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Survey saved successfully');
  } else {
    alert('Failed to save survey');
  }
}
});
$("#surveyElement").Survey({model: survey});
