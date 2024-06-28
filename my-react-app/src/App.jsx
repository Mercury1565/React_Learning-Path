import Greeting from "./components/Greeting.jsx"

// conditional rendering 
/*
We use conditional rendering to entitle the parent component to chose whether to
display a component or not and how to display that component. Hence, based on the 
prop argument the parent component sends to the child component, we can determine 
weather to display a component or not
*/

function App() {
  return(
    <>
    <Greeting isLoggedIn={true} username="Hermon"/> 
    </>
  )
}

export default App
