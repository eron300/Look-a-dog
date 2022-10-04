import { Container, Icon, Image } from "./AppStyled"
import GlobalStyle from "./globalStyles"

function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Hello, Human! 🐕</h1>
        <Image src="https://place.dog/300/200"/>
        <button onClick={() => document.location.reload()}><Icon src="./src/img/cachorro.png" /></button>
      </Container>
    </>
  )
}

export default App
