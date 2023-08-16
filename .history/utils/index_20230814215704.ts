
export async function fetchCars() {
    const headers ={
        
		'X-RapidAPI-Key': '8fadbd91c8msh03fab5665287411p1879b6jsn2eb8beb8cf3b',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
const response  = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {headers: headers,});
    const result = await response.json();
    return result;
}
    
    