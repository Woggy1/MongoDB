const EntityModel = require('./models');

// Операція створення
async function createEntity(data) {
    try {
        const newEntity = await EntityModel.create(data);
        return newEntity;
    } catch (error) {
        throw error;
    }
}

// Операція читання
async function readEntity(entityId) {
    try {
        const entity = await EntityModel.findById(entityId);
        return entity;
    } catch (error) {
        throw error;
    }
}

// Операція оновлення
async function updateEntity(entityId, newData) {
    try {
        const updatedEntity = await EntityModel.findByIdAndUpdate(entityId, newData, { new: true });
        return updatedEntity;
    } catch (error) {
        throw error;
    }
}

// Операція видалення
async function deleteEntity(entityId) {
    try {
        await EntityModel.findByIdAndDelete(entityId);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createEntity,
    readEntity,
    updateEntity,
    deleteEntity
};
