const sequelize = require('../config/connection');
const seedChampions = require('./championSeeds');

const seedAll = async () => {
  try {
      await sequelize.sync({ force: true });
      console.log('\n ===== DATABASE SYNCED =====\n');

      await seedChampions();
      console.log('\n ===== CHAMPIONS SEEDED =====\n');

      process.exit(0);
  } catch (error) {
      console.error(error);
      process.exit(1);
      }
};
seedAll();