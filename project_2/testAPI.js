const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=TSLA&apikey=${REACT_APP_ALPHA_VANTAGE_API_KEY}`

fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))



