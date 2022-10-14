const router = require('express').Router();
const auth = require('../../utils/auth');
const { User, Survey } = require('../../models');
require('dotenv').config();

router.get('/dashboard', auth, async (req, res) => {
  try {
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
      //NEED TO BUILD OUT ZIPCODE PATH
      zip_code: '98008'
    });
  } catch (err) {
    res.status(500).json(err);
  }
})


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

module.exports = router