// const adminCookie = require("../src/models/sessionIDauthmodel");
const adminCookie = require("../models/sessionIDauthmodel");

const userLoginrestriction = async (req, res, next) => {
        console.log('check');
        const { auth_datas } = req.body;
        console.log("auth_datass:", auth_datas);
         
        const uuid = auth_datas;
        console.log("uuid:",uuid);
        
        const CookieData = await adminCookie.findOne({uuid});
        console.log("CookieData:",CookieData);
        
        if(CookieData){
             next();
        } else {
             return res.json({ message:"Please Log-In" })
        }
};

const handleGetworkerDatarestriction = async (req, res, next) => {
        console.log("Worker Data check");
        const { auth_datas } = req.body
     //    const uuid = req.cookies.Uid;
        const uuid = auth_datas;
        console.log("cookie",uuid);
        
        const CookieData = await adminCookie.findOne({uuid});
        console.log("CookieData:",CookieData);
        
        if(CookieData){
             next();
        } else {
             return res.json({message:"unothorised"});
        }
        
}

module.exports = {
        userLoginrestriction,
        handleGetworkerDatarestriction,
}