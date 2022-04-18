module.exports = (sequelize, DataTypes) => {
    const Messages = sequelize.define("Messages", {
        msgid: {
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
        chatroom_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Chatrooms',
                key: 'chatid' 
            }
        }, 
        createdAt: {
            type: "TIMESTAMP",
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP()')
        },
        updatedAt: {
            type: "TIMESTAMP",
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP()')
        } 
    }, {timestamps: false})

    //associating a table to another, a user can have multiple posts
    // Users.associate = (models) => {
  //   Users.hasMany(models.Posts, {
  //     onDelete: "cascade",
  //   });
  // };
    return Messages;
}