import { Outlet } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div>Home

      <Outlet/>
    </div>
  )
}

export default Home