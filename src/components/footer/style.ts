import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  border-top: 1px solid #1e2d3d;
  font-size: 1rem;
  color: #607b96;

  .legend {
    width: max-content;
    padding: 15px 20px;
    border-right: 1px solid #1e2d3d;
    display: flex;
    align-items: center;
  }

  nav {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;

    ul {
      list-style-type: none;
      display: flex;

      li {
        padding: 12.5px 14px;
        border-right: 1px solid #1e2d3d;
        cursor: pointer;
      }
    }

    .github-id {
      padding: 14.5px 23px;
      border-left: 1px solid #1e2d3d;
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
    }
  }
`
