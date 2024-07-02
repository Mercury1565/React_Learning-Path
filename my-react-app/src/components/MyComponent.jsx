import React , {useState} from 'react'


//onChange -> Triggers a function everytime the value of the input changes
//Note that any change, be it in <input>. <select>, <radio>, <textarea>
// or anyother form elements, is reflected immediately\

function MyComponent(){
    const [name , setName] = useState('')
    const [quantity , setQuantity] = useState(0)
    const [comment , setComment] = useState('')
    const [payement , setPayement] = useState('')
    const [shipping , setShipping] = useState('Delivery')

    function handelNameChange(event){
        setName(event.target.value)
    } 
    function handelQuantityChange(event){
        setQuantity(event.target.value)
    } 
    function handelCommentChange(event){
        setComment(event.target.value)
    }
    function handelPayementChange(event){
        setPayement(event.target.value)
    }
    function handelShippingChange(event){
        setShipping(event.target.value)
    }
   
    return(
        <div>          
            <input value={name} onChange={handelNameChange}/>
            <p> Name: {name} </p>

            <input value={quantity} onChange={handelQuantityChange} type="number"/>
            <p> Quantity: {quantity} </p>

            <textarea value={comment} onChange={handelCommentChange} placeholder='leave comment'/>
            <p> Your comment: {comment}</p>

            <select value={payement} onChange={handelPayementChange}>
                <option value=''> select option </option>
                <option value='cash'> cash </option>
                <option value='visa'> visa </option>
                <option value='master card'> master card </option>
            </select>
            <p> Payement: {payement}</p>

            <label>
                <input type='radio' value='Delivery'
                       checked={shipping === 'Delivery'}
                       onChange={handelShippingChange}
                />
                Delivery
            </label>

            <label>
            <input type='radio' value='Pick-Up'
                    checked={shipping === 'Pick-Up'}
                    onChange={handelShippingChange}
                />
                Pick-Up
            </label>
            <p> Shipping: {shipping}</p>
      
        </div>
    )
}

export default MyComponent 