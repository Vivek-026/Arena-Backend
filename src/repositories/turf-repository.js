const Turf = require('../models/turf');

class TurfRepository{

    async create(data){
        try {
            console.log(data);
            const turf = await Turf.create(data);
            return turf;
            
        } catch (error) {
            console.log(error);
            throw error;
            
            
        }
    }
    async destroy(id){
        try {
            const turf = await Turf.findByIdAndDelete(id);
            return turf;
            
        } catch (error) {
            console.log('error in turf repo');
            throw error;
            
            
        }
    }
    async get(id){
        try {
            const turf = await Turf.findById(id).populate({path:'owner'});
            return turf;
            
        } catch (error) {
            console.log('error in turf repo');
            throw error;
            
            
        }
    }

    async getAll(){
        try {
            const turf = await Turf.find().populate({path:'owner'});
            return turf;
            
        } catch (error) {
            console.log('error in turf repo');
            throw error;
            
            
        }
    }

    async update(id,data){
         try {
            const turf = await Turf.findByIdAndUpdate(id,data);
            return turf;
            
        } catch (error) {
            console.log('error in turf repo');
            throw error;
            
            
        }
    }
    
}

module.exports = TurfRepository;