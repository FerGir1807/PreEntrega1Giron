import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import ItemListContainer from "./components/item/itemListContainer"
import CartContainer from "./components/cart/CartContainer"
import NavBar from "./components/NavBar"

function App() {


  return (
    <>
      <div>
        <div className="row">
          <div className="col">
            <h1 style={{ textAlign: "center" }}>
              <i className="bi bi-shop text-info"></i>Ecommerce tienda de Fútbol
            </h1>
          </div>
          <div className="col-md-auto">
            <CartContainer></CartContainer>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <NavBar></NavBar>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ItemListContainer greeting="Título de itemList"></ItemListContainer>
          </div>
        </div>
        <div className="row">
          <div className="col">
            Aquí irá el footer de la pagina
          </div>
        </div>
      </div></>
  )
}

export default App
