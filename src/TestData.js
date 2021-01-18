// Example Data:

// Movies to populate in a dropdown
const movies = [
    {
      id: 0,
      label: 'Braveheart',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/55/Braveheart_imp.jpg'
    },
    {
      id: 1,
      label: 'Die Hard',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Die_hard.jpg'
    },
    {
      id: 2,
      label: 'Gladiator',
      image: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png'
    },
    {
      id: 3,
      label: 'The Lord of the Rings: The Return of the King',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg'
    },
    {
      id: 4,
      label: 'The Dark Knight',
      image: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg'
    },
    {
      id: 5,
      label: 'Raider of the Lost Ark',
      image: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Raiders_of_the_Lost_Ark.jpg'
    },
    {
      id: 6,
      label: 'The Lion King',
      image: 'https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg'
    },
    {
      id: 7,
      label: 'Toy Story',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg'
    },
    {
      id: 8,
      label: 'Beauty and the Beast',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Beautybeastposter.jpg'
    },
    {
      id: 9,
      label: 'Titanic',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/19/Titanic_%28Official_Film_Poster%29.png'
    },
    {
      id: 10,
      label: 'Pirates of the Caribbean: The Curse of the Black Pearl',
      image: 'https://upload.wikimedia.org/wikipedia/en/8/89/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png'
    },
    {
      id: 11,
      label: 'E.T. the Extra-Terrestrial',
      image: 'https://upload.wikimedia.org/wikipedia/en/6/66/E_t_the_extra_terrestrial_ver3.jpg'
    },
    {
      id: 12,
      label: 'Jaws',
      image: 'https://upload.wikimedia.org/wikipedia/en/6/66/E_t_the_extra_terrestrial_ver3.jpg'
    },
    {
      id: 13,
      label: 'The Notebook',
      image: 'https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg'
    },
    {
      id: 14,
      label: 'Gone with the Wind',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Poster_-_Gone_With_the_Wind_01.jpg'
    },
    {
      id: 15,
      label: 'The Shawshank Redemption',
      image: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg'
    },
    {
      id: 16,
      label: 'Kung Fu Panda',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/76/Kungfupanda.jpg'
    },
    {
      id: 17,
      label: 'The Last Samurai',
      image: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Last_Samurai.jpg'
    },
    {
      id: 18,
      label: 'Your Name',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png'
    },
    {
      id: 19,
      label: 'Weathering With You',
      image: 'https://upload.wikimedia.org/wikipedia/en/6/66/Weathering_with_You_Poster.jpg'
    }
  ]
  
  // Songs to populate in a dropdown
  const songs = [
    {
      id: 0,
      label: 'Perfect',
      image: 'https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg'
    },
    {
      id: 1,
      label: 'Believer',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Imagine-Dragons-Believer-art.jpg'
    },
    {
      id: 2,
      label: 'Gone, Gone, Gone',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/10/Phillip_Phillips_Gone%2C_Gone%2C_Gone_single_cover.jpg.png'
    },
    {
      id: 3,
      label: '7 years',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/7-Years-by-Lukas-Graham.jpg'
    },
    {
      id: 4,
      label: 'My Way',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/b2/My_Way_-_Frank_Sinatra.jpg'
    }
  ]
  
  // Cities to populate in a dropdown
  const cities = [
    {
      id: 0,
      label: 'Dallas',
    },
    {
      id: 1,
      label: 'Austin',
    },
    {
      id: 2,
      label: 'San Antonio',
    },
    {
      id: 3,
      label: 'Houston',
    },
    {
      id: 4,
      label: 'Waco',
    },
    {
      id: 5,
      label: 'Lubbock',
    },
    {
      id: 6,
      label: 'El Paso',
    },
    {
      id: 7,
      label: 'Amarillo',
    },
    {
      id: 8,
      label: 'Galveston',
    },
    {
      id: 9,
      label: 'Fort Worth',
    }
  ]

  // Songs to populate in a dropdown
  const colors = [
    {
      id: 0,
      label: 'Red',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Red.svg'
    },
    {
      id: 1,
      label: 'Blue',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Solid_blue.svg'
    },
    {
      id: 2,
      label: 'Green',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Green.PNG'
    },
    {
      id: 3,
      label: 'Yellow',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/WO_Yellow.jpg'
    },
    {
      id: 4,
      label: 'Purple',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Cobaltviolet.jpg'
    }
  ]

  // Foods to populate in a dropdown
  const foods = [
    {
      id: 0,
      label: 'Pizza',
    },
    {
      id: 1,
      label: 'Rice',
    },
    {
      id: 2,
      label: 'Noodles',
    },
    {
      id: 3,
      label: 'Fried Chicken',
    },
    {
      id: 4,
      label: 'Fajitas',
    },
    {
      id: 5,
      label: 'Donuts',
    },
    {
      id: 6,
      label: 'Ice Cream',
    },
    {
      id: 7,
      label: 'Pasta',
    },
    {
      id: 8,
      label: 'Soup',
    },
    {
      id: 9,
      label: 'Chips',
    }
  ]

  export { movies, songs, cities, colors, foods }