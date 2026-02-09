const samples = [
  {city:'San Francisco',temp:16,desc:'Partly cloudy'},
  {city:'New York',temp:8,desc:'Windy'},
  {city:'Tokyo',temp:22,desc:'Sunny'},
  {city:'London',temp:10,desc:'Light rain'},
  {city:'Cairo',temp:29,desc:'Hot'}
];

function pickRandom(){
  return samples[Math.floor(Math.random()*samples.length)];
}

function render(w){
  document.getElementById('city').textContent = w.city;
  document.getElementById('temp').textContent = w.temp + '°C';
  document.getElementById('desc').textContent = w.desc;
}

document.addEventListener('DOMContentLoaded', ()=>{
  render(pickRandom());
  document.getElementById('refresh').addEventListener('click', ()=>{
    render(pickRandom());
  });
});
