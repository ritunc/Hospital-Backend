const adminCookie = require('../models/sessionIDauthmodel');


const setAdmin = async (id, user) => {
        const {email, password} = user;
        await adminCookie.create({
                uuid: id,
                email: email,
                password:password,
        });
};

const adminVerification = async(user, uuid) => {
        const {email, password} = user;
        console.log("userAdminCookie:",uuid);
        const User = await adminCookie.findOne({email, password, uuid});
        return (User);
};


const adminLogOut = async (uuid) => {
        await adminCookie.deleteOne({uuid});
        return
}



module.exports = {
        adminVerification,
        setAdmin,
        adminLogOut,
}