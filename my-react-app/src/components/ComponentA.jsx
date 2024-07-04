import React, {useState, createContext} from 'react'
import ComponentB from "./ComponentB.jsx"

export const UserContext = createContext();

function ComponentA(){
    const [user, setUser] = useState('mercury');
    /*
    - What if you want to use this user state all the way down at component D.
    - You will have to pass it down as props (Props Drilling) but this process
      cound be tedious if the chain of components is very long
    
    THE SOLUTION !!! USING useContext hook

    useContext() -> react hook that allow you to share values
                    between multiple levels of components
                    without passing props through each level

    // STEPS TAKEN AT PROVIDER COMOPONENT [here, ComponentA]
    1. Import {createContext} from 'react'
    2. export const MyContext = createContext()
    3. Wrap children components with a special provider component
        <MyContext.Provider value={value}>
            <Child/>
        </MyContext.Provider>

    // CONSUMER COMPONENT [here, ComponentD]
    1. import React, {useContext} from 'react';
       import {MyContext} from 'location of provider comp'
    2. const value = useContext(MyContext)
    */
    return(
        <div>
            <h1> Component A </h1>
            <h2>{`hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB/>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA