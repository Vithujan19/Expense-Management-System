import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <MainContainer>
            <h1>
                Welcome to the <br/>
                Article DB
            </h1>
        </MainContainer>
    );
};

export default Header;

//MAIN CONTAINER
const MainContainer = styled.header`
    background: url(../../images/header-bg.jpg) no-repeat center/cover;
    height: 20rem;

    h1{
        transform: translate(-50%, -50%);
        color: #fff;
        font-weight: 900;
        position: absolute;
        top: 25%;
        left: 50%;
    } 
`;
    

