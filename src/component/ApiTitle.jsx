
const ApiKey = '6215dbd7';
const Base_url = 'https://www.omdbapi.com';


export const ApiTitle = async(MovieTitle) => {
    try{
        const url =`${Base_url}/?s=${MovieTitle}&apiKey=${ApiKey}`;
        const res = await fetch(url)

        if(!res.ok){
            console.log('api title url :',url);
            throw new Error('search by title error')
        }

        return res.json()
    }catch(error){
        console.log('catch block title :',error)
    }
}
