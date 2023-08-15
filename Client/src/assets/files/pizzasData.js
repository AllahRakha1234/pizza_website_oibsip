const pizzasData = [
  {
    name: "Margherita Cheezy",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 199,
        medium: 299,
        large: 399,
      },
    ],
    category: "veg",
    // image: "../../assets/images/dashboardImgs/margherita.jpg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0uUNniauz6Q5kzGP8lVToENJJEIwS47EZrhI6OojU-DWCNU7JSOHMWFlxeno9aH0Buvc&usqp=CAU",
    description: "Classic delight with 100% real mozzarella cheese",
  },
  {
    name: "Farmhouse Crispy",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 229,
        medium: 399,
        large: 599,
      },
    ],
    category: "veg",
    // image: "../../assets/images/dashboardImgs/farmhouse.jpg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qJeTBXWfoRTtdoLv0TlmPg_LXo5heyt5Hg&usqp=CAU",
    description:
      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
  },
  {
    name: "Veggie Paradise",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 180,
        medium: 290,
        large: 460,
      },
    ],
    category: "veg",
    description:
      "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
    // image: "../../assets/images/dashboardImgs/veggie_paradise.jpg",
    image: "https://media.istockphoto.com/id/496571982/photo/pizza-served-on-wooden-plate-isolated-on-white.jpg?s=612x612&w=0&k=20&c=DD6O1UUUhtrW5T8aI1rzagh5yL1XxPA_-NCJUWx_fJo="
  },
  {
    name: "Delicious Golden Boti",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 249,
        medium: 349,
        large: 599,
      },
    ],
    category: "nonveg",
    // image: "../../assets/images/dashboardImgs/chicken_golden_delight.jpg",
    // image: "../../../public/logo192.png",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhP5_8ZJheowPaFEH6lmQyzWGZXb9T1nCbQ&usqp=CAU",
    description:
      "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
  },
  {
    name: "Chicken Pepperoni",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 320,
        medium: 580,
        large: 800,
      },
    ],
    category: "nonveg",
    // image: "/images/cheesepepperoni.jpg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwOgOMfuyGOhXmOlIFnJR0o5EMs_0J5v9Fw&usqp=CAU",
    description:
      "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
  },
  {
    name: "Chicken Fajita",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 250,
        medium: 380,
        large: 500,
      },
    ],
    category: "nonveg",
    // image: "/images/IndianTandooriChickenTikka.jpg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJ8nNffdxr8sOMW_N5-t4pZfkz4nGBAzORw&usqp=CAU",
    description:
      "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
  },
];
module.exports = pizzasData;
