import SubTotal from '../components/subTotal'
import content from '../content/content'
import useStore from '../store'
import ItemDetails from '../components/itemDetails'

const ViewAddedProducts = () => {
  const basket = useStore((state) => state.basket)
  const allProducts = basket.map((id) =>
    Object.values(content)
      .flat()
      .find((o) => o.id == id)
  )
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '100%',
          overflow: 'scroll',
        }}
      >
        {allProducts.map((e, i) => (
          <ItemDetails {...e} key={i} />
        ))}
      </div>

      <SubTotal />
    </div>
  )
}

export default ViewAddedProducts
