const baseDAO = require('./baseDAO')
const Category = require('../models/mongo.model/entities/category')

class CategoryDAO extends baseDAO {
    constructor(){
        super()

    }

    create = (category) => {
        const category = new Category(category)
        category.save( (err, data) => {
            if(err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
    
            return data
        })
    }

    read = (id) => {
        Category.findById(id).exec((err, category) => {
            if(err || ! category){
                return res.status(400).json({
                    error: 'Category does not exist'
                })
            }
            return category
        })
    }

    update = (category) => {
        category.save((err,data) => {
            if(err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
    
            return data
        })
    }

    delete = (category) => {
        category.remove((err,data) => {
            if(err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
    
            return 'Category deleted'
            
        })
    }
}

export default CategoryDAO