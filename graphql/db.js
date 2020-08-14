export const people = [
  {
    id: 0,
    name: "MJ",
    age: 29,
    gender: "male",
  },
  {
    id: 1,
    name: "SJ",
    age: 24,
    gender: "female",
  },
  {
    id: 2,
    name: "HD",
    age: 27,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};
