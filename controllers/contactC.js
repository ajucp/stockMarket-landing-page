const {handleContactForm}=require('../services/contactS');

exports.submitContactForm=(req,res,next)=>{

    const {name,email,message}=req.body;

    if(!name|| !email||!message){
        return res.status(400).send({message:"All fields are required."});
    }
    
    try {
        handleContactForm({name,email,message});
        res.status(200).send({message:'Form submitted successfully!'});
    } catch (error) {
        console.error('Error handling contact form:',error);
        res.status(500).send({message:'Internal server error.'});
    }
}