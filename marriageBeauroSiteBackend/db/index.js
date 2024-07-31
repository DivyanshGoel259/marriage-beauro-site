const mongoose = require("mongoose")
require('dotenv').config();

async function main() {
    
    const uri = process.env.MONGODB_URI;
  
    try {
      await mongoose.connect(uri);
      console.log("Connected to MongoDB with Mongoose");
      // Your Mongoose schema and model code goes here
    } catch (e) {
      console.error(e);
    }
  }

  main()


  const FormSchema = mongoose.Schema({
    FirstName:String,
    LastName:String,
    DOB:String,
    BirthTime:String,
    Height:String,
    Complexion:String,
    Qualification:String,
    Occupation:String,
    OccupationalAddress:String,
    Income:String,
    Picture:String,
    FatherName:String,
    MotherName:String,
    Caste:String,
    FamilyOccupation:String,
    FamilyIncome:String,
    Sister:String,
    SisterMarried:String,
    Brother:String,
    BrotherMarried:String,
    ResidentialAddress:String,
    RegistrationFees:String,
    MarriageBeauroFinalFees:String,
    MeetingFees:String,
    FormFillerName:String,
    RelationWithCandidate:String,
    TermsAndConditions:String,
    Signature:String

  })

  const Form = mongoose.model("Form",FormSchema)

  module.exports = Form
