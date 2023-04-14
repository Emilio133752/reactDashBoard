import React from 'react'

export const Login = () => {

  const handleSubmit = () =>{
    console.log(document.querySelector('input[type="text"]').value)
  }

  return (
    <form>
        <label>
          Name:
          <input type="text" onChange={ 
            () => handleSubmit() } />
        </label>
        <input type="submit" value="Submit" />
      </form>
  )
}

export default Login;