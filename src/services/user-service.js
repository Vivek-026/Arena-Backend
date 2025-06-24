const {UserRepository} = require('../repositories/index');
const bcrypt = require('bcrypt')

class UserService{

    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
            
        } catch (error) {
            console.log("error in user service");
            throw error;
            
            
        }
    }
    async destroy(id){
        try {
            const user = await this.userRepository.destroy(id);
            return user;
            
        } catch (error) {
            console.log("error in user service");
            throw error;
            
            
        }
    }
    async get(id){
        try {
            const user = await this.userRepository.get(id);
            return user;
            
        } catch (error) {
            console.log("error in user service");
            throw error;
            
            
        }
    }
    async getByEmail(email){
        try {
            const user = await this.userRepository.getByEmail(email);
            return user;
            
        } catch (error) {
            console.log("error in user service");
            throw error;
            
            
        }
    }

    async signin(data){
        try {
            const user = await this.getByEmail(data.email);
            const encryptedPassword = user.password;
            const password = data.password;
            const result = await this.validatePassword(password, encryptedPassword)

            if(!result){
                console.log("Password dosent match");
                throw {error: 'Incorrect password'};
            }

            return user;
            
        } catch (error) {
            console.log("error in user service");
            throw error;
            
            
        }
    }

    async validatePassword(password, encryptedPassword){
        return bcrypt.compare(password, encryptedPassword);
    }
}

module.exports = UserService;