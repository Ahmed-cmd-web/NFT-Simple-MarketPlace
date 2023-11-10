import { Layout } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import content from '../content/content'
import ItemDetails from '../components/itemDetails'

const ProductDetail = () => {
  const { product_id } = useParams()
  const [product] = Object.keys(content).flatMap((key) => {
    let res = content[key].filter((e) => e.id == product_id)
    if (res.length) res[0]['type'] = key
    return res
  })

  return (
    <Layout
      style={{
        display: 'flex',
        width: '100%',
        height: '500px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      {!product ? (
        <h1>No product with the given ID</h1>
      ) : (
        <ItemDetails {...product} />
      )}
    </Layout>
  )
}

export default ProductDetail
