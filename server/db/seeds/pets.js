/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('pets').del()
  await knex('pets').insert([
    {
      id: 1,
      owner_id: 1,
      name: 'Zeke',
      bio: 'Ara chloroptera',
      breed: 'Red and blue macaw',
      gender: 'Male',
      colour: 'Teal',
      neutured: false,
      size: '3XL',
      age: 5,
      img: '',
    },
    {
      id: 2,
      owner_id: 1,
      name: 'Clevie',
      bio: 'Eudyptula minor',
      breed: 'Penguin, little blue',
      gender: 'Male',
      colour: 'Yellow',
      neutured: true,
      size: 'S',
      age: 15,
      img: './images/pets/sample.jpg',
    },
    {
      id: 3,
      owner_id: 1,
      name: 'Maurise',
      bio: 'Dusicyon thous',
      breed: 'Common zorro',
      gender: 'Female',
      colour: 'Khaki',
      neutured: true,
      size: 'S',
      age: 2,
      img: './images/pets/sample.jpg',
    },
    {
      id: 4,
      owner_id: 4,
      name: 'Bernita',
      bio: 'Centrocercus urophasianus',
      breed: 'Grouse, greater sage',
      gender: 'Female',
      colour: 'Blue',
      neutured: false,
      size: '2XL',
      age: 6,
      img: './images/pets/sample.jpg',
    },
    {
      id: 5,
      owner_id: 4,
      name: 'Patin',
      bio: 'Balearica pavonina',
      breed: 'Black-crowned crane',
      gender: 'Male',
      colour: 'Puce',
      neutured: true,
      size: '3XL',
      age: 9,
      img: './images/pets/sample.jpg',
    },
    {
      id: 6,
      owner_id: 5,
      name: 'Chadd',
      bio: 'Acrobates pygmaeus',
      breed: 'Glider, feathertail',
      gender: 'Male',
      colour: 'Blue',
      neutured: false,
      size: 'L',
      age: 12,
      img: './images/pets/sample.jpg',
    },
    {
      id: 7,
      owner_id: 5,
      name: 'Elladine',
      bio: 'Myrmecophaga tridactyla',
      breed: 'Anteater, giant',
      gender: 'Female',
      colour: 'Purple',
      neutured: false,
      size: 'XL',
      age: 9,
      img: './images/pets/sample.jpg',
    },
    {
      id: 8,
      owner_id: 5,
      name: 'Lou',
      bio: 'Ammospermophilus nelsoni',
      breed: 'Antelope ground squirrel',
      gender: 'Male',
      colour: 'Crimson',
      neutured: true,
      size: '2XL',
      age: 5,
      img: './images/pets/sample.jpg',
    },
    {
      id: 9,
      owner_id: 6,
      name: 'Derby',
      bio: 'Buteo jamaicensis',
      breed: 'Hawk, red-tailed',
      gender: 'Male',
      colour: 'Maroon',
      neutured: false,
      size: 'S',
      age: 10,
      img: './images/pets/sample.jpg',
    },
    {
      id: 10,
      owner_id: 6,
      name: 'Normie',
      bio: 'Deroptyus accipitrinus',
      breed: 'Hawk-headed parrot',
      gender: 'Male',
      colour: 'Violet',
      neutured: true,
      size: 'XS',
      age: 4,
      img: './images/pets/sample.jpg',
    },
  ])
}
