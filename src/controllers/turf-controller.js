const {TurfService} = require('../services/index')

const turfService = new TurfService()

const create = async (req,res) => {
    try {
        const response = await turfService.create(req.body);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'Successfully created turf',
            err: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            data: {},
            success:false,
            message: 'cannot create turf',
            err: error
        })
        
    }
}


const destroy = async (req,res) => {
    try {
        const response = await turfService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'Successfully deleted turf',
            err: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            data: {},
            success:false,
            message: 'cannot delete turf',
            err: error
        })
        
    }
}


const getAll = async (req,res) => {
    try {
        const response = await turfService.getAll();
        return res.status(200).json({
            data: response,
            success:true,
            message: 'Successfully fetched  all turf',
            err: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            data: {},
            success:false,
            message: 'cannot fetch turf',
            err: error
        })
        
    }
}

const get = async (req,res) => {
    try {
        console.log(req.params.id);
        const response = await turfService.get(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'Successfully fetched turf',
            err: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            data: {},
            success:false,
            message: 'cannot fetch turf',
            err: error
        })
        
    }
}

const update = async (req,res) => {
    try {
        const response = await turfService.update(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'Successfully updated turf',
            err: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            data: {},
            success:false,
            message: 'cannot update turf',
            err: error
        })
        
    }
}



module.exports={
    create,
    destroy,
    get,
    getAll,
    update
    
}

