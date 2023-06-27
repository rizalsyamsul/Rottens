"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Movies", "userMongoId", Sequelize.STRING);
    /**
     * Add altering commands here.
     *
     * Example:
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Movies", "userMongoId");
    /**
     * Add reverting commands here.
     *
     * Example:
     */
  },
};
