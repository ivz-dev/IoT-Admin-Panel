import styled from "styled-components";

export const SidebarWrapper = styled.div`
    width: 50px;
    position: absolute;
    height: 100%;
    background: #FAFBFC;
    top: 0;
    left: 0;
    border-right: 1px solid #E7E9Ea;
`;

export const LogoContainer = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #E7E9Ea;
`;

export const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const MenuItem = styled.img`
    margin: 10px 0;
`;

export const ItemContainer = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4DA1FF;
    padding: 5px;
    border-radius: 3px;
    margin-bottom: 15px;
    cursor: pointer;
`