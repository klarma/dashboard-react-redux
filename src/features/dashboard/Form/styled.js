import styled from "styled-components";

export const LabelText = styled.span`
    display: inline-block;
    width: 100%;
    text-align: left;
    max-width: 150px;
    margin-right: 15px;
    padding-bottom: 5px;
`;

export const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 10px;
    width: 100%;
    max-width: 400px;
`;