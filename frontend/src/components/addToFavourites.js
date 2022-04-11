import axios from 'axios';
import { useState } from 'react';

export const AddToFavourites = (props) => {

  const[style, setStyle] = useState("")
  const user = JSON.parse(localStorage.getItem('userdata'))
  const checkExistingFavourites = () => {
    axios.get(`http://localhost:8000/user/findfavourite/${user.uid}/${props.recipeId}`).then((res) => {
      if (res.data === 'true') {
        setStyle("red")
      }
  })
}
checkExistingFavourites()


  const clickHandler = (e) => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('userdata'))
    const postData = {favourite: props.recipeId, user: user}
    console.log('this is the post Data', postData)
    axios.post(`http://localhost:8000/user/add`, postData ).then((res) => {
        props.setMessage(res.data.message)
      })
  }

  return (
    <i id="add-to-favourites" className={`fa-solid fa-heart ${style}`} onClick={clickHandler}></i>
  )
}