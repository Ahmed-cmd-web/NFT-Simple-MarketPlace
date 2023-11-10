import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import useStore from './store'

function App() {
  const navigate = useNavigate()
  const basket = useStore((state) => state.basket)
  let title = window.location.pathname
  if (title.lastIndexOf('/')) title = title.slice(1, title.lastIndexOf('/'))
  else title = title.replace('/', '')
  return (
    <div className='App'>
      <header className='header'>
        <h1>{title.toLocaleUpperCase()}</h1>
        <div className='header_right'>
          <Badge count={basket.length} showZero size='small'>
            <ShoppingCartOutlined
              className='basketIcon'
              size={'large'}
              title='View Added Products'
              onClick={() => navigate('Summary')}
            />
          </Badge>
          <div
            style={{ height: '100%', cursor: 'pointer' }}
            onClick={() => navigate('/Home')}
            title='Back to Home'
          >
            <img src={require('./assets/logo.png')} height={'100%'} />
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default App
