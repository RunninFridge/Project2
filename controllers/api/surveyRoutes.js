const router = require('express').Router();
const auth = require('../../utils/auth');
const { User, Survey } = require('../../models');
require('dotenv').config();

//GET route to print dashboard page and pass in zip code
router.get('/dashboard/:zip', auth, async (req, res) => {
  try {
    let zip = 98122;
    console.log(zip);
    if (req.params.zip) {
      zip = req.params.zip;
    }; 
    // console.log(req.params.zip);
    const userSurveysData = await Survey.findAll({
      include: { 
        model: User, 
        attributes: { exclude: ['password'] }
      },
      where: { user_id: req.session.user_id}
    })
    const userSurveys = userSurveysData.map((content) => content.get({ plain: true }));
    // res.json(userSurveys);
    res.render('dashboard', {
      userSurveys,
      logged_in: req.session.logged_in,
      api_key1: process.env.API_KEY1,
      zip_code: zip
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

// router.post('/dashboard/:zip', auth, async (req, res) => {
//   try {
//     res.render('dashboard', {
//       zip_code: req.params.zip
//     });console.log(req.params.zip);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// })


router.get('/:surveyId', async (req, res) => {
  try {
    const surveyData = await Survey.findByPk(req.params.surveyId);
    const surveys = surveyData.map((content) => content.get({ plain: true }));
    res.render('survey', {
      surveys,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST route to save survey resuls to charger_db
router.post('/saveSurvey', async (req, res) => {
  try {
    const surveyData = await Survey.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id
    });
    res.json(surveyData);

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router