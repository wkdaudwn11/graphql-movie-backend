const person = {
  name: "MJ",
  age: 29,
  gender: "mail",
};

const resolvers = {
  Query: {
    person: () => person,
  },
};

export default resolvers;
