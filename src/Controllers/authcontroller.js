// const adminUser = require('../src/models/authmodel');
const adminUser = require('../models/authmodel');
const { v4: uuidv4 } = require('uuid');

const { setAdmin, adminVerification, adminLogOut } = require('../authSessionID/authSessionId');


const handleSignUpform = async (req, res) => {
        const body = req.body;
        const { name, email, password } = body;
   
        const emailExist = await adminUser.findOne({ email:email });
        const passExist = await adminUser.findOne({ password:password });
      

        if(!name || !email || !password){
                return res.json({message:"Fill all the field"});
        } else if( emailExist || passExist ) {
                return res.json({message:"Invalid Credential"});
        } else {
                await adminUser.create({
                        name:name,
                        email:email,
                        password:password,
                });
                console.log('Signup');
                return res.json({ message: "User Created Successfuly" });
        }

      
};


const handleUserLogin = (async (req, res) => {
        console.log("bodyss:",req.body[0], req.body[1]);
        
        const { email, password } = req.body[0];

        console.log("auth_data:", req.body[1]);
        
        const userAdminCookie = req.body[1];
        console.log("userAdminCookie:", userAdminCookie);
        
        
        // if( !email || !password ) return res.status(400).json({message: "Please fill the form"});
        
        const user = await adminUser.findOne({ email, password });
        if (!user) return res.json({ message: "user not found" });
        
        const users = await adminVerification(user,userAdminCookie);
        console.log(users);
        console.log(userAdminCookie);
        
        
        if (users) {
                return res.json({message:"Already LogdIn"})
        } else {
                const sessionID = uuidv4();
                setAdmin(sessionID, user);
                console.log("Uuid is created:", sessionID);
                        
                // return res.cookie('Uid', sessionID).json({message:"LogIn successfully"});

                return res.json({message:"LogIn successfully",Uid:sessionID});

                // res.cookie('myCookie', 'cookieValue', {
                //         httpOnly: true, // Helps prevent XSS
                //         secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
                //         maxAge: 3600000 // 1 hour
                //     });
                //     return res.json({message:'Cookie has been set!'});

              
                // return res.json({message:"LogIn successfully"});
        }
});


const handleUserlogOut = async (req, res) => {
        const auth_datas = req.body[0];
        console.log("auth_datasss:", auth_datas);
        await adminLogOut(auth_datas);
        // res.clearCookie("Uid");
        res.json({message:"Opps!!! You Logd-Out", path:"/search"});
}

module.exports = {
        handleUserLogin,
        handleSignUpform,
        handleUserlogOut,
}