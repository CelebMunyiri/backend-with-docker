const {Profession } = require('../models')

const createProfession = async(body)=>{
    try{
        const profession = await Profession.create(body)
        return profession;

    }catch(err){
       
        throw new Error('Error creating profession')
    }
}

const getAllProfessions = async()=>{
    
        const professions = await Profession.find({is_deleted:false})
        return professions;
    
}

module.exports = { getAllProfessions, createProfession}