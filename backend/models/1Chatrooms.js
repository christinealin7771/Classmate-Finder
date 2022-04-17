module.exports = (sequelize, DataTypes) => {
    const Chatrooms = sequelize.define("Chatrooms", {
        chatid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }, 
        users: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {timestamps: false})

    //associating a table to another, a user can have multiple posts
    // Users.associate = (models) => {
  //   Users.hasMany(models.Posts, {
  //     onDelete: "cascade",
  //   });
  // };
    return Chatrooms;
}