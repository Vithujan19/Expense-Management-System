import React from 'react';
import styled from 'styled-components';
import hdimg from '../../header-bg.png';

const Header = () => {
    return (
        <MainContainer>
            <h1>
                Receipt & Expense Management<br/> 
                System.
            </h1>
            <img style={{width: "150px"}} src={hdimg} alt="logo"/>
        </MainContainer>
    );
};

export default Header;

//MAIN CONTAINER
const MainContainer = styled.header`
    // background: url(../../images/header-bg.png) no-repeat center/cover;
    // height: 20rem;

    img{
        top: 20%;
        left: 85%;
    }

    h1{
        transform: translate(-25%, -50%);
        color: #000;
        font-weight: 900;
        position: absolute;
        top: 20%;
        left: 35%;
    } 
`;
    

