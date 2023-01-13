const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const port = 8080;

let idCounter = 5;

let users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
  },
];

app.use(cors());
app.use(bodyParser.json());
// app.get("/", (req, res) => {
//   res.send({
//     name: "Ali",
//     surname: "Mustafayev",
//   });
// });

app.get("/", (req, res) =>
  res.send(
    `<h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, laboriosam
    alias. Assumenda facilis accusantium molestiae est.
  </h1>`
  )
);

//get all users
app.get("/users", (req, res) => {
  res.send(users);
});

//get user by id
app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  const selectedUser = users.find((user) => user.id == id);
  if (selectedUser) {
    res.send(selectedUser);
    res.status(200);
  } else {
    console.log("there is no such user");
    res.status(404).json({ message: "there is no such user.." });
  }
});

//delete user by id
app.delete("/users/:id", (req, res) => {
  //   const { id } = req.params;
  const id = +req.params.id;
  //   console.log(req.params);
  // console.log(id);
  users = users.filter((q) => q.id !== id);
  res.status(200).json({ message: "succesfully deleted" });
});

//post new user
app.post("/users", (req, res) => {
  console.log(req.body);
  const userObj = {
    id: idCounter++,
    name: req.body.name,
    username: req.body.username,
  };
  users.push(userObj);
});

// put by id
app.put("/users/:id", (req, res) => {
  const { id } = +req.params;
  users = users.filter((elem) => elem.id !== id);

  const updatedUser = {
    id: id,
    name: req.body.name,
    username: req.body.username,
  };
  users.push(updatedUser);
  // console.log(users);
  // console.log(req.body);
});

app.listen(port, () => {
  console.log(`this app is listining on port ${port}`);
});
