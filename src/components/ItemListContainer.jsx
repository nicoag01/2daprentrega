import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'




  // const enviarProductos = new Promise ((resolve, reject)=>{
  //   if(productos.length > 0){ 
  //       setTimeout(() => {
  //         resolve(productos)  
  //       }, 2000)
  //   } else {
  //     reject ("Ocurrio un error, no hay productos para cargar")
  //   }
  // })

  // enviarProductos
  //   .then((resultado)=> {
  //       console.log(resultado)
  //   })
  //   .catch ((error)=> {
  //     console.error(error)
  //   })
  const ItemListContainer = ({ greeting }) => {
    const { category } = useParams()
    const obtenerProd = async () => {

    const response = await fetch("https://fakestoreapi.com/products/")
    //const response = await fetch('https://dummyjson.com/products/')
    const data = await response.json()
    return data

  }

  const [productos, setProductos] = useState([])

  useEffect(() => {
    obtenerProd().then((productos) => setProductos(productos))
  }, [])

  const productosFiltradosCat = productos.filter((producto) => producto.category === category)
  return (
    <>
      {console.log(productosFiltradosCat)}
      {/* <h1 className='center pt-2 white' >{greeting}</h1> */}
      {
        category ? <ItemList productos={productosFiltradosCat} />
                 : <ItemList productos={productos} />       
      }
    </>
  )
}

export default ItemListContainer


