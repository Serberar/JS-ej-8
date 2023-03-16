const baseUrl = 'https://api.nationalize.io?name=';

const btn$$ = document.getElementById('btn');
const input$$ = document.getElementById('input');
const resultados = document.getElementById('resultados');

btn$$.addEventListener('click', async () => {
  const response = await fetch(baseUrl + input$$.value);
  const data$$ = await response.json();

  resultados.innerHTML = '';

  data$$.country.forEach(c => {
    const p$$ = document.createElement('p');
    p$$.textContent = `El nombre ${input$$.value} tiene un ${c.probability * 100}% de ser de ${c.country_id}`;
    resultados.appendChild(p$$);
  });
});
