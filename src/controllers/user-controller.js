const {UserService} = require('../services/index')

const userService = new UserService()

const create = async (req,res) => {
    try {
        const response = await userService.create(req.body);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'Successfully created User',
            err: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            data: {},
            success:false,
            message: 'cannot create User',
            err: error
        })
        
    }
}


const destroy = async (req,res) => {
    try {
        const response = await userService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'Successfully deleted User',
            err: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            data: {},
            success:false,
            message: 'cannot delete User',
            err: error
        })
        
    }
}


const get = async (req,res) => {
    try {
        const response = await userService.get(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'Successfully fetched User',
            err: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            data: {},
            success:false,
            message: 'cannot fetch User',
            err: error
        })
        
    }
}

const signin = async (req,res) => {
    try {
        const response = await userService.signin(req.body);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'Successfully sign in User',
            err: {}
        })
        
    } catch (error) {
        return res.status(500).json({
            data: {},
            success:false,
            message: 'cannot sign in User',
            err: error
        })
        
    }
}


const isAuthenticated=async(req,res)=>{

    try {

        const response = await userService.isAuthenticated(req.headers['x-access-token']);

        return res.status(200).json({
            data : response,
            success : true,
            message : 'user is authenticated',
            err : {}
        })
        
    } catch (error) {

        return res.status(500).json({
            data : {},
            success : false,
            message : 'error  in user authentication',
            err : error
        })

        
    }
}

module.exports={
    create,
    destroy,
    get,
    signin,
    isAuthenticated
}

