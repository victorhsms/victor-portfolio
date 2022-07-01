import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  border-bottom: 1px solid #1e2d3d;
  font-size: 1rem;
  color: #607b96;

  .title-container {
    width: 20%;
    padding: 18px 0;
    border-right: 1px solid #1e2d3d;
    display: flex;
    align-items: center;

    strong {
      padding-left: 22px;
      font-weight: 400;
    }
  }

  nav {
    width: 80%;
    display: flex;
    justify-content: space-between;

    ul {
      list-style-type: none;
      display: flex;

      li {
        padding: 17px 31.5px;
        border-right: 1px solid #1e2d3d;
        cursor: pointer;
      }
    }

    span {
      padding: 17px 31.5px;
      border-left: 1px solid #1e2d3d;
      cursor: pointer;
    }
  }
`
