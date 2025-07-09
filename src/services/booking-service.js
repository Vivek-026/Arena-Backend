const { EMAIL_ID } = require('../config/serverConfig');
const {BookingRepository, UserRepository} = require('../repositories/index');
const sendBasicMail = require('./sendMail');


class BookingService{

    constructor(){
        this.bookingRepository = new BookingRepository();
        this.userRepository = new UserRepository();
    }

    async create(data) {
    try {
        const booking = await this.bookingRepository.create(data);
        const user = data.user;
        
        const response = await this.userRepository.get(user);
        console.log(booking);
        console.log(response);

        const mailBody = `
Hi ${response.name},

Thank you for booking a venue with us!

Here are your booking details:
- 📅 Date: ${booking.date}
- 🕒 Start Time: ${booking.startTime}
- ⏱ Duration: ${booking.duration} hour(s)
- 🏅 Sport: ${booking.sport}

We look forward to seeing you on the turf. Enjoy your game!

Best regards,  
Arena Team
        `.trim();

        const mailResponse = await sendBasicMail(
            EMAIL_ID,
            response.email,
            "Booking Confirmation – Your Turf is Reserved!",
            mailBody
        );

        console.log(mailResponse);
        return booking;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

    async cancel(id){
        try {
            const booking = await this.bookingRepository.cancel(id);
            return booking;
            
        } catch (error) {
            console.log("error in booking service");
            throw error;
            
            
        }
    }
    async get(id){
        try {
            const booking = await this.bookingRepository.get(id);
            return booking;
            
        } catch (error) {
            console.log("error in booking service");
            throw error;
            
            
        }
    }
    async getAllByUser(id){
        try {
            const booking = await this.bookingRepository.getAllByUser(id);
            return booking;
            
        } catch (error) {
            console.log("error in booking service");
            throw error;
            
            
        }
    }

    async getAllByOwner(id){
        try {
            const booking = await this.bookingRepository.getAllByOwner(id);
            return booking;
            
        } catch (error) {
            console.log("error in booking service", error);
            throw error;
            
            
        }
    }
}

module.exports = BookingService;