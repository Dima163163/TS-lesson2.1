type User = {};


const persons: {
  name: string,
  age: number,
  group: string,
}[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Иван Иванов',
    age: 23,
    group: 'Семья',
  },
  {
    name: 'Макс Максимов',
    age: 29,
    group: 'Друзья',
  }
];

const logPerson = (user: {
  name: string,
  age: number,
}) => {
  console.log(`${user.name}, ${user.age}`);
}

console.log('Users:');
persons.forEach(logPerson);