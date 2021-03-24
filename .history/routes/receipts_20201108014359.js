const express = require('express');
const router = express.Router();
const multer = require("multer");
const Receipts = require("../models/receipts");

//Image uploads
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./client/public/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});
//.........................................

//Request get all receipts
router.get('/', (req,res) => {
    Receipts.find()
        .then(receipt => res.json(receipt))
        .catch(err => res.status(400).redirect.json('Error : ' + err));
});

//Request add new receipt detail
router.post('/add', upload.single("receiptImage"), (req,response) => {
    const newReceipt = new Receipts({
        uploadby: req.body.uploadby,
        receiptno: req.body.receiptno,
        description: req.body.description,
        receiptImage: req.file.originalname,
        postDate: Date.parse(req.body.postDate),
    });

    newReceipt
        .save()
        .then(() => response.json("The new Receipt Detail added succesfully."))
        .catch(err => response.status(400).json("Error : " + err));
});

//Request find receipt detail by ID
router.get('/:id', (req,response) => {
    Receipts.findById(req.params.id)
        .then(receipt => response.json(receipt)
        .catch(err => response.status(400).json('Error : ' + err)))
});

//Request find receipt detail by ID and update
router.put('/update/:id', upload.single("receiptImage"), (req,response) => {
    Receipts.findById(req.params.id)
        .then(receipt => {
            receipt.uploadby = req.body.uploadby;
            receipt.receiptno = req.body.receiptno;
            receipt.description = req.body.description;
            receipt.receiptImage = req.file.originalname;
            receipt.postDate = Date.parse(req.body.postDate);

            receipt
                .save()
                .then(() => response.json("The Receipt Detail is updated successfuly"))
                .catch(err => response.status(400).json('Error : ' + err));
        })
        .catch(err => response.status(400).json('Error : ' + err));
});

//Request find receipt detail by ID and Delete
router.delete('/:id', (req,response) => {
    Receipts.findByIdAndDelete(req.params.id)
        .then(() => response.json("The receipt detail is DELETED!"))
        .catch(err => response.status(400).json('Error : ' + err));
});


module.exports = router;