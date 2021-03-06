import styled from 'styled-components'

export const Loading = styled.div`
  color: #FFF;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 16px;
    color: #3E3E99;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 14px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`

export const Issues = styled.header`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #EEE;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #EEE;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 35px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #EEE;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #3E3E99;
          }
        }

        span {
          background: #EEE;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`
