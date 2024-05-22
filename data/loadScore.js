export async function loadBackend(){
  const response = await fetch('http://127.0.0.1:3000/score');
  const score = await response.json();
  console.log(score);
  return score;
}