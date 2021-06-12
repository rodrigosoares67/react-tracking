export const track = (trackingCode) => {
  const promiseCallback = (resolve, reject) => {
    fetch(`http://localhost:3001/?tracking=${trackingCode}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.result.events);
        resolve(data.result.events)
      })
      .catch(reject);
  }

  return new Promise(promiseCallback);
}