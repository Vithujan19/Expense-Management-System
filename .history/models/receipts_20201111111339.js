const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const receiptSchema = new Schema({
    uploadby: {type: String},
    receiptno: {type: String},
    description: {type: String},
    receiptImage: {type: String},
    postDate: { type: Date},
    amount: { type: Number},
    category: {type: String},
})

const Receipts = mongoose.model("Receipt", receiptSchema);

module.exports = Receipts;