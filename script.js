const API_KEY = '486a2317-2743-432d-a7de-d58a49667937';
const API_URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1',;

getMovie(API_URL_POPULAR)

async function getMovie(url) {
    const resp = await fetch(url, {
        headers: {
          
           "Content-Type": "application/json",
            'X-API-KEY': API_KEY,
            
        }
    });
    const respData = await resp.json(); 
    console.log(respData)
    
}