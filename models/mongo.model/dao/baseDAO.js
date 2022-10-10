class BaseDAO {

    constructor() { }

    create = async (objectToCreate) => { throw new Error('Method not implemented') }
    read = async (_id) => { throw new Error('Method not implemented') }
    update = async (objectToUpdate) => { throw new Error('Method not implemented') }
    delete =  async (objectToUpdate) => { throw new Error('Method not implemented') }
}

export default BaseDAO