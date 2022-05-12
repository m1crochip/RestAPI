import { v4 as uuidv4 } from "uuid";
import express from "express";

const router = express.Router();

let users = [];

export const createUser = (req, res) => {
  const user = req.body;

  const userWithId = { ...user, id: uuidv4() };

  users.push(userWithId);

  res.send(
    `User with the name ${user.firstName} add to database!`
  );
};

export const getUser = (req, res) => {
  console.log(users);
  res.send(users);
};

export const getUserId = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find(
    (user) => user.id === id
  );

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  //filter is keep the true or delete false
  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} is deleted`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find(
    (user) => user.id === id
  );

  if (firstName) {
    user.firstName = firstName;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  if (age) {
    user.age = age;
  }

  res.send(`User with ${id} has been update`);
};
