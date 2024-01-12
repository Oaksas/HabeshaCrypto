import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import './App.css'
import { Footer, Navbar } from './components'
import { Exchanges, Homepage, Cryptocurrencies, Cryptodetail, News } from './features'

function App() {

  return (
    <div className='app'>
      <div className="navbar"><Navbar /></div>
      <div className="main">
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage />} />
              <Route exact path='/exchanges' element={<Exchanges />} />
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route exact path='/crypto/:coinId' element={<Cryptodetail />} />
              <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
        <Footer />
      </div >

    </div >
  )
}

export default App
