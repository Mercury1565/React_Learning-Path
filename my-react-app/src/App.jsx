import List from "./components/List.jsx"

function App() {
  // We can make the List component reusable for different 
  // purposed if we pass the list items as props

  const fruits = [{name:"apple" , calories: 10},
                {name:"orange" , calories: 900},
                {name:"banana" , calories: 5},
                {name:"shiro" , calories: 1},
                ]
  const veggies = [{name:"Onion" , calories: 910},
                {name:"Carrot" , calories: 98},
                {name:"Cuccumber" , calories: 72},
                {name:"Potatoes" , calories: 30},
                ]

  return(
    <>
    {/* Challenge: display lists if and only if there are items in the list */}
    {/* Use the .length method for lists */}
    {fruits.length > 0 ? <List items = {fruits} category = 'Fruits'/>: null} 
    {/* A short way for doing the above (short circuiting) 
    {fruits.length > 0 && <List items = {fruits} category = 'Fruits'/>} 
    */}

    <List items = {veggies} category = 'Vegetables'/> 

    </>
  )
}

export default App
