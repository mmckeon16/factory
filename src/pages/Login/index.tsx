import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const About: FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p className="text-about">
          This is About Page
        </p>
        <Link className="App-link" to="/">
          Go To Home
        </Link>
      </header>
    </div>
  )
}

export default About