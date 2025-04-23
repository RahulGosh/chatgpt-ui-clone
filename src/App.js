import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext";
import Layout from "./components/layout";
import HomePage from "./page/homePage";
import LoginPage from "./page/loginPage";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <HomePage />
            </Layout>
          } />
          <Route path="/login" element={<LoginPage /> } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}