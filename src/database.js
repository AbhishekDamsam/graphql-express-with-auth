
const db = {
    groupCollection: [
        { id: 1, name: 'Volkswagen' },
        { id: 2, name: 'General Motors' },
        { id: 3, name: 'Stellantis' }
    ],
    brandCollection: [
        { id: 1, name: 'Audi', groupId: 1 },
        { id: 2, name: 'Bentley', groupId: 1 },
        { id: 3, name: 'Bugatti', groupId: 1 },
        { id: 4, name: 'Chevrolet', groupId: 2 },
        { id: 5, name: 'Hummer', groupId: 2 },
        { id: 6, name: 'Saturn', groupId: 2 },
        { id: 7, name: 'Chrysler', groupId: 3 },
        { id: 8, name: 'Opel', groupId: 3 }
    ],
    userCollection: [

    ]
}

// In memory Database, new entries via grapql will be vanished on server startup
// Mimicking database connection
export const initDatabase = async function () {
    return Promise.resolve(db);
}