import React,{useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddReceipt = () => {
const [uploadby, setUploader] = useState("");
const [receiptno,setReceiptno] = useState("");
const [description,setDescription] = useState("");
const [message, setMessage] = useState("");
const [fileName, setFileName] = useState("");
const [postDate, setPostDate] = useState(new Date());

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

        setUploader("");
        setReceiptno("");
        setDescription("");
        setPostDate("");

        axios.post("http://localhost:8080/receipts/add", formData)
            .then(res => setMessage(res.data))
            .catch(err => {
                console.log(err);
            });
    };


    
    return (
        <AddReceiptContainer>
            <div className="container">
                <h1>Add Receipt Detail</h1>
                <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
             <label htmlFor="uploadby">Uploader ID</label>
                <input type="text" value={uploadby} onChange={e => setUploader(e.target.value)} className="form-control" placeholder="Uploader ID"/>
            </div>
            <div className="form-group">
                <label htmlFor="receiptno">Receipt No</label>
                <input type="text" value={receiptno} onChange={e => setReceiptno(e.target.value)} className="form-control" placeholder="Receipt No"/>
            </div>
            <div className="form-group">
                <label htmlFor="article">Description</label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="form-control" placeholder="Description"/>
            </div>
            <div className="form-group">
            <label>Receipt Date: </label>
            <div>
              <DatePicker
                isClearable
                dateFormat="MMMM d, yyyy"
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
                    onChange={onChangeFile} 
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Post Receipt
            </button>
        </form>
        </div>
        </AddReceiptContainer>
    )
}

export default AddReceipt;

//MAIN CONTAINER
const AddReceiptContainer = styled.div`
    margin: 3rem auto;
    padding: 4rem;
    width: 31.25rem;

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

