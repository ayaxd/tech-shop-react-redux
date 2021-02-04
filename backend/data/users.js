import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('password', 10),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'john@gmail.com',
    password: bcrypt.hashSync('password', 10),
  },
  {
    name: 'Snow',
    email: 'snow@gmail.com',
    password: bcrypt.hashSync('password', 10),
  },
  {
    name: 'Arthur',
    email: 'arthur@gmail.com',
    password: bcrypt.hashSync('password', 10),
  },
];

export default users;
