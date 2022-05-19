const Report=require('../../../models/report');//requiring  the report schema

//get all reports using status
module.exports.getReports=async function(req,res){
    try{
        let reportStatus=await Report.find({status:req.params.status}).sort("createdAt").populate('doctor').populate('patient');//finding all reports with status as param and populating the patient and doctor
        return res.json(200,{
            data:{
                reportStatus //returning the report with passed param to the server
            },
            message:'Got all reports of this status!'
        })

    }catch(err){
        return res.json(500,{
            message:'Internal Server Error!'
        });
    }
}