import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  flex-direction: column;
  padding: 2em;
  width: 40em;

  box-shadow: 10px 10px 8px 0px rgba(0,0,0,0.56);
  -moz-box-shadow: 10px 10px 8px 0px rgba(0,0,0,0.56);
  -webkit-box-shadow: 10px 10px 8px 0px rgba(0,0,0,0.56);
`
export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1.6px solid black;
  width: 100%;
  padding: 1.2em;
  max-width: 41.5em;
`

export const ContainerImg = styled.div`
  border: 2px solid #162DB8;
  border-radius: 50%;
  margin-bottom: 1em;

  :hover{
    border: none;
  }
`

export const Image = styled.img`
  border-radius: 50%;
  cursor: pointer;
  height: 100%;
  opacity: 0;
  width: 100%;

  :hover{
    border: 2px solid #162DB8;
    opacity: 1;
  }
`

export const Icon = styled.img`
  cursor: pointer;
  max-width: 30px;
`