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
                "type": "checkbox",
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
              },
              {
          "type": "ranking",
          "name": "bestcar",
          "isRequired": true,
          "visibleIf": "{car.length} > 1",
          "title": "What car did you enjoy the most?",
          "choicesFromQuestion": "car",
          "choicesFromQuestionMode": "selected"
        }
      ]
    }
  ]
};
window.survey = new Survey.Model(json);
survey.onComplete.add(function (sender) {
  document.querySelector('#surveyResult').textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
});
$("#surveyElement").Survey({model: survey});