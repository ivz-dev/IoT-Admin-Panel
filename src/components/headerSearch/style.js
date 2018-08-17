import styled from "styled-components";

export const HeaderSearchWrapper = styled.div`
    width: 250px;

    input {
        width: 100%;
        border: 1px solid #E4E8EA;
        padding: 10px;
        border-radius: 5px;
        box-sizing: border-box;

        &::placeholder { 
            color: #c1c5c8;
        }
    }
`;