import React from 'react'

function Form() {
  return (
    <>
        <form>
            <div id='email'>
                <input type="email" placeholder='Email address' />
            </div>
            <div id='submitDiv'>
                <input name='submit' type="submit" id="submit" />
            </div>
        </form>
    </>
  )
}

export default Form