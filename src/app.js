require("dotenv").config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3000;
const { connectionMongodb } = require('./conection/connect')
// const { userLoginrestriction } = require("../middlewareAuth/authmiddleware");
const { userLoginrestriction } = require("./middlewareAuth/authmiddleware");
const fileupload = require('express-fileupload');
const cors = require("cors");

// const path = require("path");

//Route--
// const USERrouter = require("../routers/router");
const USERrouter = require("./routers/router");
// const authrouter = require("../routers/authrouter");
const authrouter = require("./routers/authrouter");


//Data-base connection---
connectionMongodb(process.env.MONGO_URL);

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

app.use(cors({
        origin: ["https://hospital-patient.vercel.app"],
        method: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
}));
app.use(fileupload());
app.use(express.static('uploads'));

// app.get("/", (req, res) => {
//         app.use(express.static(path.resolve(__dirname, "my-app", "build")));
//         res.sendFile(path.resolve(__dirname, "my-app", "build", "index.html"));
// });

app.use("/info", userLoginrestriction, USERrouter);//User create and get user data
app.use("/user", authrouter);  //admin LogIn and create account
app.use("/worker", USERrouter);
app.use("/medReport", USERrouter);
app.use("/medDelete", USERrouter);
// app.use("/workerget", userLoginrestriction, USERrouter);


app.get("/", (req, res) => {
        console.log('Hello');
        res.write('Hello Sir');
})


  





app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
export default app;
