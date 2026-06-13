import styled from "styled-components";

export const Button = styled.button`
        border: ${props => props.theme === "primary" ? "none" : "1px solid #FFf"};
        cursor: pointer;
        background: ${props => props.theme === "primary" ? "linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)" : "transparent"};
        font-size: 16px;
        color: #fff;
        padding: 16px 32px;
        width: fit-content;
        border-radius: 30px;

        &:hover{
            ${props => props.theme === "primary" ? "opacity: 0.8" : "background: #fff; color: #FF6378; "};
        }

        &:active{
            opacity: 0.5;
        }
 `