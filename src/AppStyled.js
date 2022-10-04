import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 40em;
  padding: 2em;
  -webkit-box-shadow: 10px 10px 8px 0px rgba(0,0,0,0.56);
  -moz-box-shadow: 10px 10px 8px 0px rgba(0,0,0,0.56);
  box-shadow: 10px 10px 8px 0px rgba(0,0,0,0.56);
`

export const ContainerImg = styled.div`
  border: 2px solid #162DB8;
  margin-bottom: 1em;
  border-radius: 50%;

  :hover{
    border: none;
  }
`

export const Image = styled.img`
  border-radius: 50%;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;

  :hover{
    opacity: 1;
    border: 2px solid #162DB8;
  }
`

export const Icon = styled.img`
  max-width: 30px;
  cursor: pointer;
`