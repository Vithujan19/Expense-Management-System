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
        .then(receiptno => res.json(receiptno))
        .catch(err => res.status(400).redirect.json('Error : ' + err));
});

//Request add new receipt detail
router.post('/add', upload.single("receiptImage"), (req,res) => {
    const newReceipt = new Receipts({
        uploadby: req.body.uploadby,
        receiptno: req.body.receiptno,
        // description: req.body.description,
        receiptImage: req.file.originalname,
        postDate: Date.parse(req.body.postDate),
        amount: req.body.amount,
        // category: req.body.category,
    });

    newReceipt
        .save()
        .then(() => res.json("The new Receipt Detail added succesfully."))
        .catch(err => res.status(400).json("Error : " + err));
});

//Request find receipt detail by ID
router.get('/:id', (req,res) => {
    Receipts.findById(req.params.id)
        .then(receipt => res.json(receipt)
        .catch(err => res.status(400).json('Error : ' + err)))
});

//Request find receipt detail by ID and update
router.put('/update/:id', upload.single("receiptImage"), (req,res) => {
    Receipts.findById(req.params.id)
        .then(receipt => {
            receipt.uploadby = req.body.uploadby;
            receipt.receiptno = req.body.receiptno;
            receipt.description = req.body.description;
            receipt.receiptImage = req.file.originalname;
            receipt.postDate = Date.parse(req.body.postDate);
            receipt.amount = req.body.amount;
            receipt.category = req.body.category;

            receipt
                .save()
                .then(() => res.json("The Receipt Detail is updated successfuly"))
                .catch(err => res.status(400).json('Error : ' + err));
        })
        .catch(err => res.status(400).json('Error : ' + err));
});

//Request find receipt detail by ID and Delete
router.delete('/:id', (req,res) => {
    Receipts.findByIdAndDelete(req.params.id)
        .then(() => res.json("The receipt detail is DELETED!"))
        .catch(err => res.status(400).json('Error : ' + err));
});


module.exports = router;