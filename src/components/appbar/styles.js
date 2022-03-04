import styled from "styled-components"; //imsc

const AppBarStyles = styled.nav`
  box-shadow: 0 0 2px 1px;
  padding: 1rem;
  background-color: ${(props) => props.bgcolor || "transparent"};
  color: ${(props) => props.color || "#999"}; ;
`;

const AppBarItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppBarItem = styled.li``;

const AppBarItemGroup = styled.li``;

export { AppBarStyles, AppBarItem, AppBarItemGroup, AppBarItems };
