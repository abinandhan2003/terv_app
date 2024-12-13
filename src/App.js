import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Layout from './Layout/Layout';
import Getstart from './Pages/Getstart/Getstart';
import QuizPage from './Pages/Quiz/Quizppage';
import Complete from './Pages/Completed/Complete';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={ <Layout />}>

          <Route path="/" element={ <Getstart />} />
          <Route path="/quiz" element={ <QuizPage />} />
          <Route path="/complete" element={ <Complete />} />


        </Route>

      </Routes>
    </Router>
  )
}

export default App

