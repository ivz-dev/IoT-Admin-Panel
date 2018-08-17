import styled from "styled-components";

export const SidebarWrapper = styled.div`
    width: 65px;
    position: absolute;
    height: 100%;
    background: #FAFBFC;
    top: 0;
    left: 0;
    border-right: 1px solid #E7E9Ea;
`;

export const LogoContainer = styled.div`
    width: 100%;
    height: 64px;
    border-bottom: 1px solid #E7E9Ea;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`;

export const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const ItemContainer = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 3px;
    margin-bottom: 15px;
    cursor: pointer;
    color: ${props => props.active ? "#fff" : "#d4bbbb"};
    background: ${props => props.active ? "#4DA1FF" : "#fff"};
`