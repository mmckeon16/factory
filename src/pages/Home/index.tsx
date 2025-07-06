import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { API_BASEURL } from '../../utils/config'
import { useUserData } from '../../utils/apis';

const Home: FunctionComponent = () => {
  const { data, loading, error } = useUserData();
  console.log(data);
  if (error) {
    console.error(error)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is Home page. <br />
          (To make sure the API works, please check browser log.)
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