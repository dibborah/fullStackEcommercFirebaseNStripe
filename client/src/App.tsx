import Container from "./ui/Container"
import Footer from "./ui/Footer"
import Header from "./ui/Header"

function App() {
  return (
    <main>
      <Header />
      <Container className="">
        <p>Ecommerce Demo</p>
      </Container>
      <Footer />
    </main>
  )
}

export default App
