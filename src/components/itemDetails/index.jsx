import { Button } from 'antd'
import useStore from '../../store'
import './index.css'

const ItemDetails = ({ name, img, desc, price, id, type }) => {
  const { basket, addTOBasket, removeFromBasket } = useStore()
  return (
    <main className='itemDetails'>
      <div style={{ height: '100%', flex: 1 }}>
        <img
          src={require(`../../assets/${img}`)}
          alt={img}
          style={{ height: '350px', width: '100%' }}
        />
      </div>
      <div className='details'>
        <h1>{name}</h1>
        <span>Category:{type.toUpperCase()}</span>
        <span className='desc'>{desc}</span>
        <span className='price'>price:${price}</span>
        <Button
          type='primary'
          size='large'
          onClick={(_) =>
            basket.includes(id) ? removeFromBasket(id) : addTOBasket(id)
          }
          shape='round'
          className='button'
        >
          {basket.includes(id) ? 'Remove from basket' : 'Add to basket'}
        </Button>
      </div>
    </main>
  )
}

export default ItemDetails
