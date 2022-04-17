module.exports = (sequelize, DataTypes) => {
    const Preferences = sequelize.define("Preferences", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      major: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      personality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      studyHabit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timeStudy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Preferences;
 };