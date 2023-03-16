const baseUrl = 'https://api.nationalize.io?name=';
const btn$$ = document.getElementById('btn');
const input$$ = document.getElementById('input');
btn$$.addEventListener('click', async () => {
  const response = await fetch(baseUrl + input$$.value);
  const data = await response.json();
  console.log(data);
});