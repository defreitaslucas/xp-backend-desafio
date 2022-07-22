/* eslint-disable import/no-dynamic-require */
const { sequelize, dataTypes } = require('sequelize-jest-helpers');
const each = require('jest-each').default;

const checkPropertyExists = (modelPath) => (properties) => {
  each(properties)
    .it('Será validado que o modelo possui a propriedade \'%s\'', (propName) => {
      // eslint-disable-next-line global-require
      const EntityModel = require(modelPath);
      const Entity = EntityModel(sequelize, dataTypes);

      const entity = new Entity();

      expect(entity).toHaveProperty(propName);
    });
};

module.exports = checkPropertyExists;
