module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("Post", {
        postid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }, 
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        timecreated: {
            type: "TIMESTAMP",
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP()')
        },
        scheduledtime: {
            type: "TIMESTAMP",
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP()')
        }
    })

    //associating a table to another, a user can have multiple posts
    // Users.associate = (models) => {
  //   Users.hasMany(models.Posts, {
  //     onDelete: "cascade",
  //   });
  // };
    return Post;
}