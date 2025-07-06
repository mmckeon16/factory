import { FunctionComponent, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../../logo.svg'
import './styles.css'
import { API_BASEURL } from '../../utils/config'

const Home: FunctionComponent = () => {
  useEffect(() => {
    // TODO move this fetch to api
    console.log({ API_BASEURL })
    window.fetch(`${API_BASEURL}/user`)
      .then(response => response.json())
      .then(data => {
        console.log({ data })
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          This is Home page. <br />
          (For make sure the API works, please check browser log.)
        </p>
        <Link className="App-link" to="/login">
          Go To Login
        </Link>
        <a className="App-Link" href={`${API_BASEURL}/user`} style={{ color: 'whitesmoke', marginTop: 10 }}>
          Check Deployed Dummy API
        </a>
      </header>
    </div>
  )
}

export default Home