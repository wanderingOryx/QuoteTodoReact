export function fetchQuote(quoteNum = 1) {
  if (quoteNum !== 0) {
    return jsonplaceholderEndpoint(quoteNum);
  } else if (quoteNum === 0 ){
    return fanFFXIVEndpoint();
  }

}

async function fanFFXIVEndpoint() {
    const response = await fetch(`https://xivapi.com/Action/127`, { mode: 'cors' });
    const data = await response.json();
    //console.log(data.Name_en);
    return data.Name_en;
}
async function jsonplaceholderEndpoint(quoteNum) {
    console.log('Fetching quote...');
    const url = `https://jsonplaceholder.typicode.com/todos/${quoteNum}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.title;
}