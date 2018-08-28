import styled from "styled-components";

export const DevicesListWrapper = styled.div`
    width: 100%
    height: 100%;
    background: #FFFFFF;
    border: 1px solid #E4E8EA;
    border-radius: 3px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

export const DevicesContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin-top: 20px;
`;

export const DeviceItem = styled.div`
    width: 30%;
    height: 28%;
    border: 1.4px solid #E4E8EA;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    float: left;
    margin-left: 5%;
    margin-bottom: 3%;

    &:nth-child(1), &:nth-child(3n + 1) {
        margin-left: 0;
    }

    &:nth-last-child(-n+3) {
        margin-bottom: 0;
    }

    &:hover {
        border: 1.4px solid #4DA1FF;
    }
`;

export const DeviceStatus = styled.div`
    color: #989DA1;
    font-size: 11px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

export const Ind = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 2px solid #7ED321;
    background: #B8E986;
    margin-right: 5px;
`;

export const DeviceTitle = styled.div`
    font-size: 16px;
`;

export const DeviceLocation = styled.div`
    color: #7F7F7F;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
