import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: 10px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 3px ${({ theme }) => theme.color.alto};
`;

export const Header = styled.header`
    border-bottom: 1px solid ${({theme}) => theme.color.alto};
    display: flex;
    justify-content: space-between;
    padding: 20px;
    /* margin: 0; */
    

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        flex-direction: column;
    }
`;

export const Title =styled.h2`
    font-size: 20px;
    margin: 0;
`;

export const Body = styled.div`
    padding: 20px;
`;