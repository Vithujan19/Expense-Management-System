import React,{useState} from 'react';
import styled from 'styled-components';
import spinner from '../spinner.gif';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Receipts = ({posts}) => {
    const [receiptno,setReceiptno] = useState([])
    //DELETE Receipt BY ID
    const deleteReceipt = id => {
        axios.delete(`http://localhost:8080/receipts/${id}`)
            .then(res => alert(res.data));
            setReceiptno(receiptno.filter(elem => elem._id !==id));
    };

    return (
        <MainContainer>
            <div className="container">
            <table className="table" border="1">
        <thead className="thead-light">
          <tr>
            <th style={{width:"13%", alignContent:"center"}}>Employee ID</th>
            <th style={{width:"15%", alignContent:"center"}}>Receipt No</th>
            <th style={{width:"1", alignContent:"center"}}>Amount(Rs)</th>
            <th style={{width:"1%", alignContent:"center"}}>Date (YYYY/MM/DD:UTC)</th>
            <th style={{width:"10%", alignContent:"center"}}>Category</th>
            <th style={{width:"10%", alignContent:"center"}}>Method</th>
            <th style={{width:"12%", alignContent:"center"}}>Receipt</th>
            <th style={{width:"12%", alignContent:"center"}}>Actions</th>
          </tr>
        </thead>
      </table>
      </div>
            {!posts.length ? (
                <img src={spinner} alt="loading..."/>
            ) : 
            
            
            posts.map((receiptno,key) => (
                <div className="container" key={key}>
                    <table className="table" border="1" width="100%">
                        <tbody>
                            <tr>
                                <td style={{width:"13%"}}>{receiptno.uploadby}</td>
                                <td style={{width:"15%"}}>{receiptno.receiptno}</td>
                                <td style={{width:"11%"}}>{receiptno.amount}</td>
                                <td style={{width:"17%"}}>{receiptno.postDate}</td>
                                <td style={{width:"10%"}}>{receiptno.category}</td>
                                <td style={{width:"10%"}}>{receiptno.description}</td>
                                <td style={{width:"12%"}}>
                                    <Link className="recpt" to={{
                                        pathname: `/receipt/${receiptno._id}`
                                        }}>
                                        Receipt file
                                        <ion-icon name="enter" color="blue"></ion-icon>
                                    </Link>
                                </td>
                                <td style={{width:"12%"}}>
                                    <Link to={`/update/${receiptno._id}`}>
                                        <ion-icon name="pencil" color="blue"></ion-icon>
                                    </Link> |   <button href="#" onClick={()=> deleteReceipt(receiptno._id)}>
                                        <ion-icon name="trash"></ion-icon>
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

    a ion-icon {
        color: red;
      }

    button{
        border: none;
        color: red;
    }
    
    .recpt{
        text-decoration: none;
    }
`;
