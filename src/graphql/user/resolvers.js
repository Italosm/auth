
const user = async (_, __, context) => {
  console.log(context.msg)
  return {
    id: '1',
    email: 'italosm29@gmail.com',
    passwordHash: 'asçdfji2389@¨¨&dfçkl',
  };
}

export const userResolvers = {
  Query: {
    user
  },
};
