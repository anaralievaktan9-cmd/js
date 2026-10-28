// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     name: "Ali",
//     email: "Ali@gmail.com",
//     username: "ali123"
//   })
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("Ошибка:", error);
//   });

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({title: 'Мой заголовок', body: 'Мой текст', userId: 1, id: 101})
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// async function name() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         name: "Ali",
//         email: "Ali@gmail.com",
//         username: "ali123"
//       })
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Ката:", error);
//   }
// }
