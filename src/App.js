import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// Layout
import Layout from './layout/Layout'

// pages
import Home from './pages/Home'
import CarDetail from './pages/CarDetail'
import Success from './pages/Success'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Layout>
      <Container>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/cardetail' component={CarDetail} />
          <Route path='/success' component={Success} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Layout>
  )
}

export default App
