module.exports = (sequelize, DataTypes) => {

    const Preferences = sequelize.define("Preferences", {
        year: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        Major: {
            type: DataTypes.STRING, 
            allowNull: false
        },
    })

    return Preferences; 
}