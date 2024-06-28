import Card from "./components/Card.jsx"

/*
PROPS: this is a way we can make parent components send data to 
child components to alter the results. For instance, we can have a 
card component that accepts some parameter and depending on this
paramter it will feature different properties. This is demonstrated
in this project

Notice that the parent component, for this case the App() component
is sending props to the child component, here the Card() component
data in the form of key value pairs.
*/

function App() {
  return(
    <>
    <Card name="Hermon" age={21} dept='Electrical' is_GC={false}/>
    <Card name='Beamlak' age={24} dept='CS' is_GC={true}/>
    <Card />
    </>
  )
}

export default App
