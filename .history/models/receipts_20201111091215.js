const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const receiptSchema = new Schema({
    uploadby: {type: String, required:true},
    receiptno: {type: String, required: true},
    description: {type: String, required: true},
    receiptImage: {type: String},
    postDate: { type: Date},
    amount: { type: Number, required: true},
    category: {type: String, required: true},
})

const Receipts = mongoose.model("Receipt", receiptSchema);

module.exports = Receipts;