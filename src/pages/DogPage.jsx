import { Container, Icon, Image, ContainerImg } from "../AppStyled"

export function DogPage(){
  return(
    <Container>
      <h1>Reveal the dog 🐕</h1>
      <ContainerImg>
        <Image src="https://place.dog/300/200" />
      </ContainerImg>
      <button onClick={() => document.location.reload()}><Icon src="https://github.com/eron300/Look-a-dog/blob/main/src/img/cachorro.png?raw=true" alt="A dog"/></button>
    </Container>
  )
}