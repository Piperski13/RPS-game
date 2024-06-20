export async function loadScore(){
  const response = await fetch('http://127.0.0.1:3000/score');
  const score = await response.json();
  return score;
}