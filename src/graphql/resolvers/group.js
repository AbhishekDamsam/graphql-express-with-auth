

export const getGroupById = async ({ id }, db) => {
    return db.groupCollection.find(group => group.id == id)
}

export const getGroupByBrandId = async ({ groupId }, db) => {
    return db.groupCollection.filter((group) => group.id == groupId);
}

export const getAllGroups = async ({ }, db) => db.groupCollection;

export const addGroup = async ({ name }, db) => {
    const { groupCollection } = db;
    const group = { id: groupCollection.length + 1, name };
    groupCollection.push(group);
    return group;
}

export const editGroup = async ({ id, name }, db) => {
    const { groupCollection } = db;
    const index = groupCollection.findIndex(group => group.id == id);
    if(groupCollection[index]) {
        groupCollection[index].name = name;
    }
    return groupCollection[index];
}