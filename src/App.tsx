import { MenuComponent } from './components/MenuComponent';
import { DashboardPage } from './pages/dasboard';
import {Router} from './routes'
import {Grid, Box} from "@mui/material"

import './App.css';
import { BrowserRouter } from 'react-router-dom';

/* function App() {
  return (
    <div className="App">
      <MenuComponent />
      <DashboardPage />
    </div>
  );
}; */
function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "240px 1fr"
        }} 
      >
        <Box>
          <MenuComponent />
        </Box>
        <Box sx={{pr: "44px"}}>
          <Router />
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;
