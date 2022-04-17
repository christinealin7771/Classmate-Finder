module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
        commentid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }, 
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        timestamp: {
            type: "TIMESTAMP",
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP()')
        },
        postid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: models.Post,
                key: 'postid' 
            }
        }, 
    })

    //associating a table to another, a user can have multiple posts
    // Users.associate = (models) => {
  //   Users.hasMany(models.Posts, {
  //     onDelete: "cascade",
  //   });
  // };
    return Comments;
}