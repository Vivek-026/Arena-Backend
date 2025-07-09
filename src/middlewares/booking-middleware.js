

const verifyOwner=async (req,res,next)=>{

    if(req.body.role!='Owner'){
        return res.status(500).json({
            data :{},
            status:false,
            message : 'User must be owner',
            err : {error: 'User must be owner'}
        })
    }
    next();
}

module.exports = verifyOwner;