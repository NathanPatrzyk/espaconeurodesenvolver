import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import Speciality from "./components/Speciality";

function App() {
  return (
    <>
      <Nav />
      <Main />
      <About />
      <Speciality imageSource='test' title='test' description='test' />
    </>
  );
}

export default App;
