import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Layout from './Layout/Layout';
import Getstart from './Pages/Getstart/Getstart';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={ <Layout />}>

          <Route path="/" element={ <Getstart />} />

        </Route>

      </Routes>
    </Router>
  )
}

export default App

