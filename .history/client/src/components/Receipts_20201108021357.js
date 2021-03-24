import React,{useState} from 'react';
import styled from 'styled-components';
import spinner from '../spinner.gif';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Receipts = ({posts}) => {
    const [receipt,setReceipt] = useState([])
    //DELETE Receipt BY ID
    const deleteReceipt = id => {
        axios.delete(`http://localhost:8080/receipts/${id}`)
            .then(res => alert(res.data));
            setReceipt(receipt.filter(elem => elem._id !==id));
    };

    return (
        <MainContainer>
            <div className="container">
            <table className="table">
        <thead className="thead-light">
          <tr>
            <th style={{width:"4%", alignContent:"center"}}></th>
            <th style={{width:"16%", alignContent:"center"}}>Upload By</th>
            <th style={{width:"16%", alignContent:"center"}}>Receipt No</th>
            <th style={{width:"16%", alignContent:"center"}}>Description</th>
            <th style={{width:"16%", alignContent:"center"}}>Amount</th>
            <th style={{width:"16%", alignContent:"center"}}>Date</th>
            <th style={{width:"16%", alignContent:"center"}}>Actions</th>
          </tr>
        </thead>
      </table>
      </div>
            {!posts.length ? (
                <img src={spinner} alt="loading..."/>
            ) : 
            
            
            posts.map((article,key) => (
                <div className="container" key={key}>
                    <table className="table" border="1" width="100%">
                        <tbody>
                            <tr>
                                <td style={{width:"16.5%"}}>{receipt.uploadby}</td>
                                <td style={{width:"16.5%"}}>{receipt.receiptno}</td>
                                <td style={{width:"16.5%"}}>{receipt.description}</td>
                                <td style={{width:"16.5%"}}>{receipt.postDate}</td>
                                <td style={{width:"17.5%"}}><Link to={{
                                        pathname: `/article/${receipt._id}`
                                    }}><img src={`/uploads/${receipt.articleImage}`} alt="..." style={{width:"20%"}}/>
                                    </Link>
                                </td>
                                <td style={{width:"16.5%"}}>
                                    <Link to={`/update/${receipt._id}`}>
                                        Edit
                                    </Link> | 
                                    <button onClick={()=> deleteReceipt(receipt._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </MainContainer>
    )
}

export default Receipts;

//MAIN CONTAINER
const MainContainer = styled.div`
    Margin: 7em 0;

    img{
        width: 10rem;
        display: block;
        margin: 0 auto;
    }
`;
