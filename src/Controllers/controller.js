// const workerUser = require('../src/models/model');
const workerUser = require('../models/model');
// const express = require('express');
// const app = express();
// const fileupload = require('express-fileupload');
const path = require('path');
// app.use(fileupload());
// const cors = require("cors");

const handleSearchValid = async (req, res) => {
        console.log("handleSearchValid");
        return;
}
const handleUserCreateValid = async (req, res) => {
        console.log("handleUserCreateValid");
        return;
}
const handleWorkerValid = async (req, res) => {
        console.log("handleWorkerValid");
        return;
}
const handleEditWorker = async (req, res) => {
        console.log("handleEditWorker");
        return;
}






let name;
const handleUserCreateImage = (req, res) => {
        // const uploadDir = path.join(__dirname, 'uploads');
        // console.log(__dirname);

        // const file = req.files.file;

        //        const uploadPath = path.join(uploadDir, file.name);
        //        name = uploadPath;
        //        file.mv(uploadPath, (err) => {
        //            if (err) {
        //         //   return res.status(500).send(err);
        //              console.log("Error::",err);

        //           }
        //         //  res.send('File uploaded!');
        //         });




        const file = req.files.file;
        const image = req.files.file.name;
        console.log("Image_file::", file);
        name = image;

        // console.log(`${(__dirname)}`);
        const parentDirectory = path.join(__dirname, '..');
        // console.log("Dir::",parentDirectory);

        file.mv(parentDirectory+'/uploads/images/' + image);

        return res.json({ message: "Hello jii" });
};


const handleUserCreate = async (req, res) => {
        const { Uname, age, dob, line_info, code, field, aadhaar_no, ression_info, family_info, ayushman_no

        } = req.body;

        await workerUser.create({
                Uname, age, dob, line_info, code, field, aadhaar_no, ression_info, name, family_info, ayushman_no,

        });
        return res.json({ message: "Submited successfuly" });
};


const handleworkerMedReport = async (req, res) => {
        const { code, Dates, hours, b_p, h_p, Temp, Suger_Level, Complain, Paracetamol, Avil, Cetrizine,
                Decolic, Asthalin, Neurobion_F, Primulate_N, Lasilactone, Trenexamic, Remark, } = req.body;

        await workerUser.findOneAndUpdate({ code }, {
                $push: {
                        medReport: {
                                Dates, hours, b_p, h_p, Temp, Suger_Level, Complain, Paracetamol, Avil, Cetrizine,
                                Decolic, Asthalin, Neurobion_F, Primulate_N, Lasilactone, Trenexamic, Remark,
                        }
                }
        });

        return res.json({ message: "Med Report Submitted" });
}







//Edit route---

//Delete route from Profile---
const handleDeleteWorker = async (req, res) => {
        console.log("Delete");

        const hours = req.params.hours;
        console.log(hours);

        await workerUser.deleteOne({ hours })
        return res.json({ message: "Wrong data Deleted successfuly" });

}
//Search route from Profile---
const handleWorkerData = async (req, res) => {
        const para = req.params.param;
        const code = para;
        console.log("para:", code);
        const data = await workerUser.findOne({ code })

        if (!data) {
                console.log("unde");

                return res.json({ message: "undefined" });
        } else {
                return res.json(data);
        }
}
module.exports = {
        handleSearchValid,
        handleUserCreateValid,
        handleWorkerValid,
        handleEditWorker,

        handleUserCreateImage,
        handleUserCreate,
        handleworkerMedReport,


        handleDeleteWorker,

        handleWorkerData,
}