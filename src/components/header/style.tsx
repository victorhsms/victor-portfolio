import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  border-bottom: 1px solid #1e2d3d;
  font-size: 1rem;

  .title-container {
    width: 20%;
    color: #607b96;
    border-right: 1px solid #1e2d3d;
    display: flex;
    align-items: center;

    strong {
      padding-left: 22px;
    }
  }

  nav {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
`
