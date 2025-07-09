const {UserRepository} = require('../repositories/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_SECRET_KEY} = require('../config/serverConfig');

class UserService{

    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            const token = await this.createToken({email:user.email,password:user.password})
            const userObj = user.toObject()
            userObj.token = token;
            return userObj;   

        } catch (error) {
            console.log("error in user service");
            throw error;
            
            
        }
    }
    async destroy(id){
        try {
            const user = await this.userRepository.destroy(id);

            

            
            
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
            console.log('data',data.email);
            const user = await this.getByEmail(data.email);
            console.log(user);
            const encryptedPassword = user.password;
            const password = data.password;
            const result = await this.validatePassword(password, encryptedPassword)

            if(!result){
                console.log("Password dosent match");
                throw {error: 'Incorrect password'};
            }

            const response = await this.createToken({email:user.email, password:user.password});
            console.log("response after creating token",response);

            const userObj = user.toObject()
            userObj.token = response;

            return userObj;
            
        } catch (error) {
            console.log(error);
            throw error;
            
            
        }
    }

    async validatePassword(password, encryptedPassword){
        return bcrypt.compare(password, encryptedPassword);
    }

    async createToken(user){

        try {
            const response = await jwt.sign(user,JWT_SECRET_KEY,{expiresIn: '24h'});
            return response;
            
        } catch (error) {
            console.log(error);
            throw error;
            
        }

    }

    async verifyToken(token){

        try {

            const response = await jwt.verify(token,JWT_SECRET_KEY);
            return response;
            
        } catch (error) {
            console.log('error in user service');
            throw error;
            
        }
    }

    async isAuthenticated(token){

        try {

            const response = await this.verifyToken(token);
  
            if(!response){
                console.log('invalid token');
                throw({error : 'Invalid token'})
            }
            const user = await this.getByEmail(response.email);
            if(!user){
                console.log("user not found");
                throw({error : "user not found"})
            }

            return response;
            
        } catch (error) {

            console.log('error in user service');
            throw error;
            
        }
    }

    async isOwner(id){
        const response = await this.userRepository.isOwner(id);
        return response;
    }
}

module.exports = UserService;