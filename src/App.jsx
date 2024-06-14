import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SingleRecipeCard from './components/SingleRecipeCard';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipe from './components/AddRecipe';
import ContactPage from './components/Contact';


function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/recipe/add" element={<AddRecipe />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>

  )
}

export default App
