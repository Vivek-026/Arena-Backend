const {BookingService} = require('../services/index')

const bookingService = new BookingService()

const create = async (req,res) => {
    try {
        const response = await bookingService.create(req.body);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'Successfully created Booking',
            err: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            data: {},
            success:false,
            message: 'cannot create Booking',
            err: error
        })
        
    }
}


const cancel = async (req,res) => {
    try {
        const response = await bookingService.cancel(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'Successfully cancelled Booking',
            err: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            data: {},
            success:false,
            message: 'cannot cancell booking',
            err: error
        })
        
    }
}


const getAllByUser = async (req,res) => {
    try {
        const response = await bookingService.getAllByUser(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'Successfully fetched users booking',
            err: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            data: {},
            success:false,
            message: 'cannot fetch booking',
            err: error
        })
        
    }
}

const get = async (req,res) => {
    try {
        const response = await bookingService.get(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'Successfully fetched bokking',
            err: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            data: {},
            success:false,
            message: 'cannot fetch booking',
            err: error
        })
        
    }
}

const getAllByOwner = async (req,res) => {
    try {
        console.log(req.params.id);
        const response = await bookingService.getAllByOwner(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'Successfully fetched owners booking',
            err: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            data: {},
            success:false,
            message: 'cannot fetch booking',
            err: error
        })
        
    }
}



module.exports={
    create,
    cancel,
    get,
    getAllByUser,
    getAllByOwner
    
}

