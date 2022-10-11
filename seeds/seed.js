const sequelize = require('../config/connection');
const { User, Survey} = require('../models');

const userSeedData = require('./userSeedData.json');
const surveySeedData = require('./surveySeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    // returning: true,
  });
  const surveys = await Survey.bulkCreate(surveySeedData);

  process.exit(0);
};

seedDatabase();
