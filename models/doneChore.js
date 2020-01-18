module.exports = (sequelize, DataTypes) => {
  const donechore = sequelize.define('Donechore', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  });

  donechore.associate = (models) => {
    // We're saying that a donechore should belong to a Child and to a Chore
    donechore.belongsTo(models.Child, {
      foreignKey: {
        allowNull: false,
      },
    });
    donechore.belongsTo(models.Chore, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return donechore;
};
