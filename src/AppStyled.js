import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 500px;
  padding: 2em;
  -webkit-box-shadow: 10px 10px 8px 0px rgba(0,0,0,0.56);
  -moz-box-shadow: 10px 10px 8px 0px rgba(0,0,0,0.56);
  box-shadow: 10px 10px 8px 0px rgba(0,0,0,0.56);
`
export const Image = styled.img`
  margin-bottom: 1em;
  border-radius: 50%;
  opacity: 0;
  cursor: pointer;
  :hover{
    opacity: 1;
  }
`

export const Icon = styled.img`
  max-width: 30px;
  width: 100%;
  cursor: pointer;
`