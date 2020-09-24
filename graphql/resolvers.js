const amkor = {
  name: "Amkor",
  age: 28,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => amkor,
  },
};

export default resolvers;
