const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const receiptSchema = new Schema({
    employeeid: {type: String, required:true},
    receiptno: {type: String, required: true},
    payment: {type: String, required: true},
    receiptImage: {type: String, required: true},
    postDate: { type: Date, required: true },
    amount: { type: Number, required: true},
    category: {type: String, required: true},
})

const Receipts = mongoose.model("Receipt", receiptSchema);

module.exports = Receipts;