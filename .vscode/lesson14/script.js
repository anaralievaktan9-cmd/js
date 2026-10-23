// async function name(params) {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');   
//     const data = await response.json();
//     return data.map((user) => user.name);
// }

// console.log(name());

// name();
// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) throw new Error("Сервер катасы: " + response.status);
//     const users = await response.json();
//     console.log(users.map((u) => u.email));
//     console.log(users.map((a) => a.phone));
//   } catch (error) {
//     console.log("  КАНК ката чыкты:", error.message);
//   }
// }

// getUsers();

async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!response.ok) throw new Error("Ката чыкты!");

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.log("Ката:", error.message);
  }
}

getUser();
