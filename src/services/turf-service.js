const {TurfRepository} = require('../repositories/index');


class TurfService{

    constructor(){
        this.turfRepository = new TurfRepository();
    }

    async create(data){
        try {
            const turf = await this.turfRepository.create(data);
            return turf;
            
        } catch (error) {
            console.log("error in turf service");
            throw error;
            
            
        }
    }
    async destroy(id){
        try {
            const turf = await this.turfRepository.destroy(id);
            return turf;
            
        } catch (error) {
            console.log("error in turf service");
            throw error;
            
            
        }
    }
    async get(id){
        try {
            const turf = await this.turfRepository.get(id);
            return turf;
            
        } catch (error) {
            console.log("error in turf service");
            throw error;
            
            
        }
    }
    async getAll(){
        try {
            const turf = await this.turfRepository.getAll();
            return turf;
            
        } catch (error) {
            console.log("error in turf service");
            throw error;
            
            
        }
    }

    async update(id,data){
        try {
            const turf = await this.turfRepository.update(id,data);
            return turf;
            
        } catch (error) {
            console.log("error in turf service");
            throw error;
            
            
        }
    }
}

module.exports = TurfService;