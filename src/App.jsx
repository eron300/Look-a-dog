
import GlobalStyle from "./globalStyles"
import { CatPage } from "./pages/CatPage"
import { DogPage } from "./pages/DogPage"
import {useState} from "react"
import { ContainerButton } from "./AppStyled"

function App() {
  const [page, setPage] = useState(false);

  return (
    <>
      <GlobalStyle />
      <ContainerButton>
        <button type="button" onClick={() => setPage(false)}>Dog</button>      
        <button type="button" onClick={() => setPage(true)}>Cat</button>
      </ContainerButton>      
      {page ? 
        <CatPage /> 
        : 
        <DogPage />
      }
      
    </>
  )
}

export default App
