module.exports = (sequelize, DataTypes) => {
    const Preferences = sequelize.define("Preferences", {
      user: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      major: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      studyHabbit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timeStudy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      course1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      course2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      course3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      course4: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      course5: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      course6: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      course7: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    return Preferences;
 };