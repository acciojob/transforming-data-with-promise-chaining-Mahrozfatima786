//your JS code here. If required.
const input = document.getElementById('ip');
const button = document.getElementById('btn');
const output = document.getElementById('output');

button.onclick = () => {
  output.innerHTML = '';

  const number = Number(input.value);

  new Promise((resolve) => {
    setTimeout(() => {
      output.innerHTML += `Result: ${number}<br>`;
      resolve(number);
    }, 2000);
  })
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res * 2;
          output.innerHTML += `Result: ${result}<br>`;
          resolve(result);
        }, 2000);
      });
    })
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res - 3;
          output.innerHTML += `Result: ${result}<br>`;
          resolve(result);
        }, 1000);
      });
    })
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res / 2;
          output.innerHTML += `Result: ${result}<br>`;
          resolve(result);
        }, 1000);
      });
    })
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res + 10;
          output.innerHTML += `Final Result: ${result}<br>`;
          resolve(result);
        }, 1000);
      });
    });
};
