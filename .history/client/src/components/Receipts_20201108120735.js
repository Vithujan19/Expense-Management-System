import React,{useState} from 'react';
import styled from 'styled-components';
import spinner from '../spinner.gif';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Articles = ({posts}) => {
    const [article,setArticle] = useState([])
    //DELETE ARTICLE BY ID
    const deleteArticle = id => {
        axios.delete(`http://localhost:8080/receipts/${id}`)
            .then(res => alert(res.data));
            setArticle(article.filter(elem => elem._id !==id));
    };

    return (
        <MainContainer>
            <div className="container">
            <table className="table">
        <thead className="thead-light">
          <tr>
            <th style={{width:"4%", alignContent:"center"}}></th>
            <th style={{width:"18.5%", alignContent:"center"}}>Upload By</th>
            <th style={{width:"18.5%", alignContent:"center"}}>Receipt No</th>
            <th style={{width:"18.5%", alignContent:"center"}}>Description</th>
            <th style={{width:"18.5%", alignContent:"center"}}>Amount</th>
            <th style={{width:"18.5%", alignContent:"center"}}>Date</th>
            <th style={{width:"18.5%", alignContent:"center"}}>Actions</th>
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
                                <td style={{width:"18.5%"}}>{article.uploadby}</td>
                                <td style={{width:"18.5%"}}>{article.receiptno}</td>
                                <td style={{width:"18.5%"}}>{article.description}</td>
                                <td style={{width:"20%"}}>{article.postDate}</td>
                                <td style={{width:"10.5%"}}>
                                    <Link to={{
                                        pathname: `/receipt/${article._id}`
                                        }}>
                                        <img src={`/uploads/${article.receiptImage}`} 
                                        alt="..." 
                                        style={{width:"40%"}}
                                        />
                                    </Link>
                                </td>
                                <td style={{width:"10%"}}>
                                    <Link to={`/update/${article._id}`}>
                                        <ion-icon name="pencil" color="blue"></ion-icon>
                                    </Link> |   <a href="#" onClick={()=> deleteArticle(article._id)}>
                                        <ion-icon name="trash"></ion-icon>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </MainContainer>
    )
}

export default Articles;

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
`;
