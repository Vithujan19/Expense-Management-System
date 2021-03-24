import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <MainContainer>
            <h1>
                Receipt & Expense Management System.
            </h1>
        </MainContainer>
    );
};

export default Header;

//MAIN CONTAINER
const MainContainer = styled.header`
    background: url(../../images/header-bg.png) no-repeat center/cover 50px;
    height: 10rem;
    width: 100%;

    h1{
        //transform: translate(-50%, -50%);
        color: #000;
        font-weight: 700;
        position: absolute;
        top: 25%;
        left: 50%;
    } 
`;
    

