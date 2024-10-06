const express = require('express');
const router = express.Router();
const { handleGetworkerDatarestriction } = require('../middlewareAuth/authmiddleware')
const { handleSearchValid, handleUserCreateValid, handleUserCreateImage, handleUserCreate, handleWorkerData, handleWorkerValid, handleEditWorker, handleworkerMedReport, handleDeleteWorker } = require('../Controllers/controller')




router.post("/searchValid", handleSearchValid);
router.post("/userCreater", handleUserCreateValid);
router.get("/workerValid", handleWorkerValid);
router.get('/editworkerValid', handleEditWorker)


//From Create--
router.post("/userCreateImage", handleUserCreateImage);
//From Create---
router.post('/userCreate', handleUserCreate);
//from Profile--
router.post('/workerCreateMedreport', handleworkerMedReport);


//Delete worker route from Profile---
router.get("/DeleteWorker/:hours", handleDeleteWorker);


//Search route--- but from Profile--
router.post('/workerData/:param', handleGetworkerDatarestriction,  handleWorkerData);

// router.post("/userCreate", upload.single('Userimage'), (req, res) => {
//         const body = req.body;
//         console.log(body);
//         console.log(req.file);
        
//         return;
// })



module.exports = router;