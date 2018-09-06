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
`;

export const DevicesContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    border-radius: 2px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 2px;
  }

  &::-webkit-scrollbar {
    width: 3px;
    background-color: #f7f7f7;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background: rgba(191, 191, 191, 0);
    transition: background 0.5s ease-out;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: rgba(191, 191, 191, 1);
    }
  }
`;

export const DeviceItem = styled.div`
  width: 100%;
  border: 1.4px solid #e4e8ea;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  float: left;

  &:hover {
    border: 1.4px solid #4da1ff;
  }
`;

export const DeviceStatus = styled.div`
  color: #989da1;
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
  border: 2px solid #7ed321;
  background: #b8e986;
  margin-right: 5px;
`;

export const DeviceTitle = styled.div`
  font-size: 16px;
  margin: 50px 0;
`;

export const DeviceLocation = styled.div`
  color: #7f7f7f;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
