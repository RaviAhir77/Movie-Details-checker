import React from 'react'

const ApiKey = '6215dbd7';
const Base_url = 'https://www.omdbapi.com'

export const ApiHandler = async (MovieTitle) => {
    try{
        const url =`${Base_url}/?i=${MovieTitle}&apiKey=${ApiKey}`
        const res = await fetch(url)

        if(!res.ok){
          console.log('url checking :',url)
          throw new Error('Problem in api response ...')
        }
      
        return res.json()
    }catch(err){
        console.log('catch block api handler :',err.message)
    }
 
}
