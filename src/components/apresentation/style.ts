import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  justify-content: center;
  color: #e5e9f0;

  .introduction-container {
    display: flex;
    flex-direction: column;
    gap: 80px;

    .title-introduction {
      h2 {
        font-size: 18px;
        font-weight: 400;

        span {
          display: block;
          font-size: 62px;
          line-height: 81px;
        }
      }
      .job {
        font-size: 32px;
        color: #4d5bce;
      }
    }

    .repository-introduction {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .comment {
        color: #607b96;
      }

      p {
        .const {
          color: #4d5bce;
        }

        .variable-name {
          color: #43d9ad;
        }

        .string {
          color: #e99287;

          span {
            text-decoration: underline;
          }
        }
      }
    }
  }
`
