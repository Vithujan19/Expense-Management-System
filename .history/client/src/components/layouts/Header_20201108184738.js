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
    // background: url(../../images/header-bg.png) no-repeat center/cover;
    // height: 20rem;

    h1{
        transform: translate(-25%, -50%);
        color: #000;
        font-weight: 900;
        position: absolute;
        top: 20%;
        left: 35%;
    } 
`;
    

