import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import spinner from '../spinner.gif';
import { Link } from 'react-router-dom';

const Receipt = props => {
    const [uploadby,setUploader] = useState('');
    const [receiptno, setReceiptno] = useState('');
    const [description, setDescription] = useState('');
    const [fileName, setFileName] = useState("");
    //const [postDate, setPostDate] = useState(new Date());

    useEffect(() => {
        axios.get(`http://localhost:8080/receipts/`+props.match.params.id)
        .then((response) => [
            setUploader(response.data.uploadby),
            setReceiptno(response.data.receiptno),
            setDescription(response.data.description),
            setFileName(response.data.articleImage),
            //setPostDate(new Date(response.data.postDate))
        ])
        .catch((error) => console.log(error))
    }, [props.match.params.id]);

    return (
        <MainContainer>
            {!uploadby || !receiptno || !description ? (<img src={spinner} alt="loading..."/>):
                <>
                <img src={`/uploads/${fileName}`} alt="..." style={{margin: "0 auto", width: "100%"}}></img>
                <h2>{uploadby}</h2>
                <p>{receiptno}</p>
                {/* <p>{postDate}</p> */}
                <p className="badge badge-secondary">{description}</p>
                <br/>
                <Link to="/" type="submit" className="btn btn-primary">
                    Back to Home
                </Link>
                </>
            }
        </MainContainer>
    )
}

export default Receipt;

//MAIN CONTAINER
const MainContainer = styled.div`
    margin: 6rem auto;
    padding: 3rem 14rem;

    h2{
        text-align: center;
        font-weight: 900;
        color: var(--dark-green);
    }

    img{
        width: 10rem;
        display: block;
        margin: auto;
    }
`;