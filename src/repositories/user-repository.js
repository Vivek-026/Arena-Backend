const User = require('../models/user');

class UserRepository{

    async create(data){
        try {
            console.log("data," ,data)
            
            const user = await User.create(data);
            console.log("user," ,user)
            return user;
            
        } catch (error) {
            console.log('error in user repo');
            throw error;
            
            
        }
    }
    async destroy(id){
        try {
            const user = await User.findByIdAndDelete(id);
            return user;
            
        } catch (error) {
            console.log('error in user repo');
            throw error;
            
            
        }
    }
    async get(id){
        try {
            const user = await User.findById(id);
            return user;
            
        } catch (error) {
            console.log('error in user repo');
            throw error;
            
            
        }
    }
    async getByEmail(userEmail){
        try {
            const user = await User.findOne({
                email:userEmail
            });
            return user;
            
        } catch (error) {
            console.log('error in user repo');
            throw error;
            
            
        }
    }

    async isOwner(id){
        const response = await this.get(id);
        console.log(response);
        return response;
        

    }
}

module.exports = UserRepository;