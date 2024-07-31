const express = require("express")
const Form = require("../db")
const router = express()

router.use(express.json())

router.post("/submit-form", async (req, res) => {

    const response = await Form.create({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        DOB: req.body.DOB,
        BirthTime: req.body.BirthTime,
        Height: req.body.Height,
        Complexion: req.body.Complexion,
        Qualification: req.body.Qualification,
        Occupation: req.body.Occupation,
        OccupationalAddress: req.body.OccupationalAddress,
        Income: req.body.Income,
        Picture: req.body.Picture,
        FatherName: req.body.FatherName,
        MotherName: req.body.MotherName,
        Caste: req.body.Caste,
        FamilyOccupation: req.body.FamilyOccupation,
        FamilyIncome: req.body.FamilyIncome,
        Sister: req.body.Sister,
        SisterMarried: req.body.SisterMarried,
        Brother: req.body.Brother,
        BrotherMarried: req.body.BrotherMarried,
        ResidentialAddress: req.body.ResidentialAddress,
        RegistrationFees: req.body.RegistrationFees,
        MarriageBeauroFinalFees: req.body.MarriageBeauroFinalFees,
        MeetingFees: req.body.MeetingFees,
        FormFillerName: req.body.FormFillerName,
        RelationWithCandidate: req.body.RelationWithCandidate,
        TermsAndConditions: req.body.TermsAndConditions,
        Signature: req.body.Signature
    })
    if(!response){
        res.status(501).json({
            response:res
        })

    } else if(response){
        res.status(200).json({
            response: "Form Submitted Succesfully"
        })
    }
})

module.exports = router