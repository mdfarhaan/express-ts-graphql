const user = {
  name: "Jhon",
  id: "mdf",
};

const resolvers = {
  Query: {
    users: () => user,
  },
};

export default resolvers;
