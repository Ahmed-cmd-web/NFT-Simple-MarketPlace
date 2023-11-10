import { useNavigate } from 'react-router-dom'
import './index.css'

const Item = ({ img, price, name, id }) => {
  const navigate = useNavigate()
  return (
    <main
      className='item_container'
      onClick={() => navigate(`/ProductDetails/${id}`)}
    >
      <img className='poster' src={require(`../../assets/${img}`)} alt={img} />
      <footer className='item_footer'>
        <h2 className='itemName'>{name}</h2>
        <span>${price}</span>
      </footer>
    </main>
  )
}

export default Item
