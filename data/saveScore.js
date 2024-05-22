export async function saveScore(){
  const response = await fetch('http://127.0.0.1:3000/score',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(score)
  });
  const score = await response.json();
  console.log(score);
  return score;
}