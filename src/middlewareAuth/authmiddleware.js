// const adminCookie = require("../src/models/sessionIDauthmodel");
const adminCookie = require("../models/sessionIDauthmodel");

const userLoginrestriction = async (req, res, next) => {
        console.log('check');
        
        const uuid = req.cookie.Uid;
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

        const uuid = req.cookie.Uid;
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