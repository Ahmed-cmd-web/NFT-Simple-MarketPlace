import { Card } from 'antd'
import './index.css'
import useStore from '../../store'
import content from '../../content/content'

const allProducts = Object.values(content).flat()
const SubTotal = () => {
  const basket = useStore((state) => state.basket)
  const total = basket.reduce(
    (a, b) => a + allProducts.find((e) => e.id == b)?.price,
    0
  )
  return (
    <Card title='Subtotal' className='subtotal' bordered={false}>
      <main className='subtotal_details'>
        {basket.map((id, i) => {
          let { name, price } = allProducts.find((e) => e.id == id)
          return (
            <span key={i}>
              {name}: ${price}
            </span>
          )
        })}
        <div className='summary'>
          <h2>Summary</h2>
          <strong>Total:</strong>
          <span>${total}</span>
        </div>
      </main>
    </Card>
  )
}

export default SubTotal
