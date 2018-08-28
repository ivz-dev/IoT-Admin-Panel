import styled from "styled-components";

export const DevicesMenuWrapper = styled.div`
    width: 250px
    height: 100%;
    background: #FFFFFF;
    border: 1px solid #E4E8EA;
    border-radius: 3px;
    padding: 20px 15px;
    box-sizing: border-box;
    margin-right: 20px;
`;

export const Label = styled.div`
    text-transform: uppercase;
    color: #323C47;
    font-size: 11px;
`;

export const DeviceTypesList = styled.div`
    margin-top: 20px;
`;

export const DeviceTypeItem = styled.div`
    width: 100%;
    height: 40px;
    border: 1px solid #E9EFF4;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 12.5px;
    color: #323C47;
    cursor: pointer;
    letter-spacing: 0.1px;
    padding: 0 10px;
    box-sizing: border-box;

    &:hover {
        background: #4DA1FF;
        color: #FFFFFF;
    }

    span {
        margin-left: 15px;
    }
`;