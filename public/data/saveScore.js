export async function saveScore(score){
  const response = await fetch('http://127.0.0.1:3000/score',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(score)
  });
  const scoreServer = await response.json();
  return scoreServer;
}