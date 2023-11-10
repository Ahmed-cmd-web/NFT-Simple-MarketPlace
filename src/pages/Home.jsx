import { Carousel, Dropdown, Layout, Space } from 'antd'
import React, { useState } from 'react'
import carouselImages from '../content/carouselImages'
import Item from '../components/item'
import content from '../content/content'
import { DownOutlined } from '@ant-design/icons'

const Home = () => {
  const [category, setCategory] = useState('art')
  return (
    <Layout>
      <Layout.Header
        style={{
          padding: 0,
          height: 'fit-content',
        }}
      >
        <Carousel autoplay>
          {carouselImages.map((e, i) => (
            <div key={i}>
              <img
                src={require(`../${e}`)}
                alt={e}
                key={i}
                style={{ height: '50vh', width: '100%' }}
              />
            </div>
          ))}
        </Carousel>
      </Layout.Header>
      <Layout.Content
        style={{
          backgroundColor: 'white',
          padding: '20px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Dropdown
          menu={{
            items: Object.keys(content).map((e) => ({
              key: e,
              label: <span>{e.toUpperCase()}</span>,
              onClick: ({ key }) => setCategory(key),
            })),
          }}
        >
          <a style={{ fontSize: '20px' }}>
            <Space>
              {category.toUpperCase()}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            rowGap: '20px',
            width: '100%',
            justifyItems: 'center',
          }}
        >
          {content[category.toLowerCase()]?.map((e, i) => (
            <Item {...e} key={i} />
          ))}
        </div>
      </Layout.Content>
    </Layout>
  )
}

export default Home
