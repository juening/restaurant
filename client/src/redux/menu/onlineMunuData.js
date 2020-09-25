const ONLINE_MENU_ITEMS = {
  appetizers: {
    id: 1,
    title: 'APPETIZERS',
    routeName: 'appetizers',
    items: [
      {
        id: 11,
        name: 'Soup Dumpling',
        imageUrl: 'https://i.ibb.co/bv8YHD2/soup-dumplings.jpg',
        price: 6,
        description:
          'Traditional homemade Shanghai style petite dumplings filled with pork, shrimp, and delicious rich broth.',
      },
      {
        id: 12,
        name: 'Edamame',
        imageUrl: 'https://i.ibb.co/FhDWq4d/edamame.jpg',
        price: 6,
        description: 'Boiled soybeans lightly sprinkled with sea salt.',
      },
      {
        id: 13,
        name: 'Spicy Ahi Tuna with Asian Pear Summer Rolls',
        imageUrl: 'https://i.ibb.co/cD6T7PT/summer-rolls.jpg',
        price: 8,
        description:
          'Fresh spicy ahi tuna & spring mix with sliced asian pear wrapped in rice paper. Served with shiro miso vinaigrette.',
      },
      {
        id: 14,
        name: 'Curry Calamari',
        imageUrl: 'https://i.ibb.co/B64SG6V/curry-calamari.jpg',
        price: 8,
        description:
          'Lightly fried calamari tossed with sea salt, chili peppers, onions, garlic, and curry powder.',
      },
      {
        id: 15,
        name: 'Chicken Wraps',
        imageUrl: 'https://i.ibb.co/dt0V9Hn/Chicken-wraps.jpg',
        price: 8,
        description:
          'Wok seared finely minced chicken breast in wraps, with grilled meat and vegetables.',
      },
      {
        id: 16,
        name: 'Chicken Spring Roll',
        imageUrl: 'https://i.ibb.co/Ld9FJNj/spring-rolls.jpg',
        price: 8,
        description:
          'Marinated shredded chicken and mixed vegetables served wit honey citrus dipping sauce.',
      },
      {
        id: 17,
        name: 'Fried Pork Dumpling',
        imageUrl: 'https://i.ibb.co/fd9wNxw/Fried-dumplings.jpg',
        price: 10,
        description:
          'Juicy, crispy dumplings with meat, vegetables, pan-fried to golden perfection.',
      },
      {
        id: 18,
        name: 'Rock Shrimp Tempura',
        imageUrl: 'https://i.ibb.co/bWcwyQz/Rock-shrimp-tempura.jpg',
        price: 10,
        description:
          'Oriental pan fried shrimp tempura served with spicy soy dipping sauce.',
      },
      {
        id: 19,
        name: 'Tempura Halibut',
        imageUrl: 'https://i.ibb.co/b5vkGqQ/Tempura-halibut.jpg',
        price: 12,
        description: 'Tempura halibut served with lemon sauce.',
      },
    ],
  },
  soupsandsalads: {
    id: 2,
    title: 'SOUPS AND SALADS',
    routeName: 'soupsandsalads',
    items: [
      {
        id: 21,
        name: 'Hot and Sour Soup',
        imageUrl: 'https://i.ibb.co/TqSvr66/Hotand-Sour-Soup.jpg',
        price: 6,
        description:
          'Shredded pork tenderloin, shiitake mushrooms, bamboo shoots, silk tofu and eggs garnished with scallions.',
      },
      {
        id: 22,
        name: 'Miso Soup',
        imageUrl: 'https://i.ibb.co/B2L88Sf/MisoSoup.jpg',
        price: 8,
        description:
          'White miso, silk tofu, mushrooms, and fresh seaweed garnished with scallions.',
      },
      {
        id: 23,
        name: 'Seafood Soup',
        imageUrl: 'https://i.ibb.co/T12WLGP/Seafoodsoup.jpg',
        price: 10,
        description:
          'Shrimp, scallop, fish, mushrooms, snow peas, baby corns garnished with scallions.',
      },
      {
        id: 24,
        name: 'West Lake Soup',
        imageUrl: 'https://i.ibb.co/bvJkZgQ/West-Lake-Soup.jpg',
        price: 12,
        description:
          'Minced Beef, mushrooms, silk tofu and egg whites, garnished with cilantro.',
      },
      {
        id: 25,
        name: 'Seaweed Salad',
        imageUrl: 'https://i.ibb.co/pQPJCmK/Seaweed-Salad.jpg',
        price: 6,
        description: 'Fresh seaweed salad tossed in sesame seed oil.',
      },
      {
        id: 26,
        name: 'Kale Salad',
        imageUrl: 'https://i.ibb.co/18VbWpV/Kalesalad.jpg',
        price: 6,
        description:
          'Organic kale, chard, cilantro, mint, beets and pine nuts served with balsamic vinaigrette.',
      },
      {
        id: 27,
        name: 'Avacado Salad',
        imageUrl: 'https://i.ibb.co/fk8S1DP/Avacadosalad.jpg',
        price: 190,
        description: 'Tomato, cucumber, tobiko & avocado mixed with mayo.',
      },
      {
        id: 28,
        name: 'House Salad',
        imageUrl: 'https://i.ibb.co/CBvZqvy/Housesalad.jpg',
        price: 20,
        description:
          'Iceberg lettuce, shredded carrots, and cherry tomatoes served with ginger vinaigrette.',
      },
    ],
  },
  drinks: {
    id: 3,
    title: 'Drinks',
    routeName: 'drinks',
    items: [
      {
        id: 31,
        name: 'Copper Rose',
        imageUrl: 'https://i.ibb.co/GsNxRwC/Daywalker.jpg',
        price: 12,
        description:
          'Absolut Elyx, cranberry juice, fresh lemon juice, and fresh raspberries.',
      },
      {
        id: 32,
        name: 'Daywalker',
        imageUrl: 'https://i.ibb.co/jG68TCz/Copperrose.jpg',
        price: 12,
        description: 'Breckenridge Vodka, lemon, ginger, grapefruit & soda.',
      },
      {
        id: 33,
        name: 'Passion Whiskey Fizz',
        imageUrl: 'https://i.ibb.co/gvr40L6/Passionwhiskeyfizz.jpg',
        price: 12,
        description:
          'Old forester 1897 bourbon, with thai pepper infused passion fruit puree, and ginger beer',
      },
      {
        id: 34,
        name: 'Master Mai Tai',
        imageUrl: 'https://i.ibb.co/w7t8JPV/Maitai.jpg',
        price: 12,
        description:
          'Dark Rum, Light Rum, Myers Rum, Master Piece Signature Mix ',
      },
      {
        id: 35,
        name: 'Hongkong Highball',
        imageUrl: 'https://i.ibb.co/3mYhF7r/Hongkonghighball.jpg',
        price: 10,
        description:
          'Fresh Pineapple, Fresh Orange, Lemongrass, Mint, Soda and Bitters (non-alcoholic) ',
      },
    ],
  },
  entrees: {
    id: 4,
    title: 'Entrees',
    routeName: 'entrees',
    items: [
      {
        id: 41,
        name: 'Five Star Shrimps',
        imageUrl: 'https://i.ibb.co/tzzMp0L/Fivestarshrimp.jpg',
        price: 20,
        description:
          'Lightly fried shrimp sautéed with fresh garlic, ginger, jalapeños, dried chili peppers, panko, onions. Flambeed with “V.S.O.P. Courvoisier Cognac”.',
      },
      {
        id: 42,
        name: 'Slow Braised Pork',
        imageUrl: 'https://i.ibb.co/r2QbnJX/Slowbraisedpork.jpg',
        price: 20,
        description: 'Served with steamed asparagus.',
      },
      {
        id: 43,
        name: 'Pan Seared Halibut',
        imageUrl: 'https://i.ibb.co/YdRXhTQ/Pan-seared-halibut.jpg',
        price: 25,
        description:
          'Pan seared halibut sautéed with Master Piece Style tomato sauce. Served with broccoli and potatoes.',
      },
      {
        id: 44,
        name: 'Panfried Duck with Mandarin Sauce',
        imageUrl: 'https://i.ibb.co/n6SS55W/Entree.jpg',
        price: 25,
        description:
          'Lightly seasoned tender maple leaf farm duck pan seared than slow braised to perfection. Served with fried potatoes.',
      },
      {
        id: 45,
        name: 'Beef with Black Pepper',
        imageUrl: 'https://i.ibb.co/y4GHVW3/Beefwithblackpepper.jpg',
        price: 26,
        description:
          'Wok-sautéed beef tenderloin and black pepper, finished with broccoli and sesame.',
      },
      {
        id: 46,
        name: 'Soft Shell Crab',
        imageUrl: 'https://i.ibb.co/hMD6GW5/Softshellcrab.jpg',
        price: 28,
        description:
          'Crispy fried soft shell crabs sautéed with sweet onion, fresh ginger, scallions, and black bean in shar char sauce.',
      },
      {
        id: 47,
        name: 'Chili Flounder',
        imageUrl: 'https://i.ibb.co/vHGcCrL/fish.jpg',
        price: 20,
        description:
          'Flounder stir-fried with fresh chili pepper, garlic, sugar snap peas, and scallions in homemade sake wine sauce.',
      },
    ],
  },
  chefs: {
    id: 5,
    title: 'Chef Recommendations',
    routeName: 'chefs',
    items: [
      {
        id: 51,
        name: 'Spicy Garlic Shrimp',
        imageUrl: 'https://i.ibb.co/6yTmTqZ/Spicyshrimp.jpg',
        price: 25,
        description:
          'Shrimp with fresh garlic, scallions, chili paste. Served in spicy tomato sauce.',
      },
      {
        id: 52,
        name: 'Shanghai Style Lobster',
        imageUrl: 'https://i.ibb.co/Z64FvPV/Chef.jpg',
        price: 30,
        description:
          'Lightly fried lobster tail sautéed with fresh ginger, and scallions in white wine sauce, served with lettuce.',
      },
      {
        id: 53,
        name: 'Beijing Duck',
        imageUrl: 'https://i.ibb.co/85qLP6D/Beijingduck.jpg',
        price: 35,
        description: 'Served with pancakes, scallions & cucumbers.',
      },
      {
        id: 54,
        name: 'Shanghai Style “Lion Head” Meat Balls',
        imageUrl: 'https://i.ibb.co/xMZj13R/Lionsheadmeatball.jpg',
        price: 25,
        description: 'Tender, moist, and light meatballs with a savory taste.',
      },
      {
        id: 55,
        name: 'New Zealand Lamb Chop with Black Pepper',
        imageUrl: 'https://i.ibb.co/VqBP1DX/Lambchopwithblackpepper.jpg',
        price: 40,
        description:
          'Sizzling cumin lamb with scallions, served with potatoes.',
      },
      {
        id: 56,
        name: 'Steam Chilean Sea Bass',
        imageUrl: 'https://i.ibb.co/86p90Jz/Steamedseabass.jpg',
        price: 35,
        description:
          'Steamed Chilean sea bass in chili sauce with garlic, dry red peppers, scallions, sesame oil and tomato slices',
      },
    ],
  },
};

export default ONLINE_MENU_ITEMS;
