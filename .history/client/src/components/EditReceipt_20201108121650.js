import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditReceipt = props => {
const [uploadby, setUploader] = useState("");
const [receiptno,setReceiptno] = useState("");
const [description,setDescription] = useState("");
const [message, setMessage] = useState("");
const [fileName, setFileName] = useState("");
const [postDate, setPostDate] = useState(new Date());
const [amount, setAmount] = useState("");

    const onChangeFile = e => {
        setFileName(e.target.files[0]);
    }

    const changeOnClick = e => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("uploadby", uploadby);
        formData.append("receiptno", receiptno);
        formData.append("description", description);
        formData.append("receiptImage", fileName);
        formData.append("postDate", postDate);
        formData.append("amount", amount);

        setUploader("");
        setReceiptno("");
        setDescription("");
        setFileName("");
        setPostDate("");
        setAmount("");

        axios.put(`http://localhost:8080/receipts/update/`+props.match.params.id, formData)
            .then(res => setMessage(res.data))
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/receipts/`+props.match.params.id)
        .then(res => [
            setUploader(res.data.uploadby),
            setReceiptno(res.data.receiptno),
            setDescription(res.data.description),
            setFileName(res.data.receiptImage),
            setPostDate(new Date(res.data.postDate)),
            setAmount(res.data.amount),
        ])
        .catch(error => console.log(error))
    }, [props.match.params.id]);


    
    return (
        <EditReceiptContainer>
            <div className="container">
                <h1>Update Receipt Details</h1>
                <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
             <label htmlFor="uploadby">Upload By</label>
                <input type="text" value={uploadby} onChange={e => setUploader(e.target.value)} className="form-control" placeholder="Upload By"/>
            </div>
            <div className="form-group">
                <label htmlFor="receiptno">Receipt No</label>
                <input type="text" value={receiptno} onChange={e => setReceiptno(e.target.value)} className="form-control" placeholder="Receipt No"/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="form-control" placeholder="Description"/>
            </div>
            <div className="form-group">
                <label htmlFor="amount">Amount (in LKR)</label>
                <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="form-control" placeholder="Amount in LKR"/>
            </div>
            <div className="form-group">
                <label>Receipt Date: </label>
                <div>
                    <DatePicker
                        selected={postDate}
                        onChange={postDate => setPostDate(postDate)}
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="file">Choose Receipt image</label>
                <input 
                    type="file" 
                    fileName="articleImage" 
                    className="form-control-file"
                    onChange={(onChangeFile)} 
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Update Receipt
            </button>
        </form>
        </div>
        </EditReceiptContainer>
    )
}

export default EditReceipt;

//MAIN CONTAINER
const EditReceiptContainer = styled.div`
    margin: 3rem auto;
    padding: 4rem;
    width: 40rem;

    h1{
        font-weight: 900;
        color: var(--dark-green);
        
    }

    .btn-primary {
        margin-top: 2rem;
        background: var(--dark-green);
        border: none;
        &:hover{
            background: var(--light-green);
        }
    }

    .message{
        font-weight: 900;
        color: tomato;
        padding: 1rem 1rem 1rem 0;
    }
`;

