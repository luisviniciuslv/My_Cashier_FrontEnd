import {Route, Routes} from 'react-router-dom';
import {DashboardPage} from './pages/dasboard'

export function Router(){
  return(
    <Routes>
      <Route path='/' element={<DashboardPage/>}/>
    </Routes>
  )
}