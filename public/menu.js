// const menuItems = [
//   {
//     name: "Veg-Thali",
//     price: "₹100",
//     description: "Rice, Two types of curry items, Papad, Chutney",
//     image: "https://food.annapurnaderoyal.com/wp-content/uploads/2021/07/veg-thali-1.jpg"
//   }, 
//     {
//     name: "Chiken-Thali",
//     price: "₹250",
//     description: "Rice, Chicken curry, Two types of curry items, Papad, Chutney ",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzp2VKxhNs9vBANV5xmRvO5vwAACjuv5MEAe_qz38_X8YdQGBbGw3RUfKyfkPpM85FPU&usqp=CAU"
//   }, 
//     {
//     name: "Shorshe Ilish",
//     price: "₹320",
//     description: "Hilsa fish in mustard gravy",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWC7f3wNileHnxx8-xOSn-qqMceoDSx9cdGg&s" // make sure image is in the right path
//   },
//   {
//     name: "Luchi & Aloo Dum",
//     price: "₹120",
//     description: "Soft puris served with spicy potato curry",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBybRNgy66rYf-5m1AKR68X4qtPimukgNS6w&s"
//   },
//   {
//     name: "Mishti Doi",
//     price: "₹80",
//     description: "Traditional Bengali sweet yogurt",
//     image: "https://i.pinimg.com/736x/46/4e/67/464e6713c6aa5900997b1ef99ae07003.jpg"
//   }
// ];
// const menuContainer = document.getElementById("menu-container");

// menuItems.forEach(item => {
//   const menuCard = document.createElement("div");
//   menuCard.className = "col-md-4 mb-4";

//   menuCard.innerHTML = `
//     <div class="card h-100 shadow">
//       <img src="${item.image}" class="card-img-top" alt="${item.name}">
//       <div class="card-body">
//         <h5 class="card-title">${item.name}</h5>
//         <p class="card-text">${item.description}</p>
//         <p class="card-text text-muted"><strong>${item.price}</strong></p>
//       </div>
//     </div>
//   `;

//   menuContainer.appendChild(menuCard);
// });
// public/menu.js or link this in your HTML
fetch("http://localhost:3000/menu/all")
  .then(res => res.json())
  .then(menuItems => {
    const menuContainer = document.getElementById("menu-container");

    menuItems.forEach(item => {
      const menuCard = document.createElement("div");
      menuCard.className = "col-md-4 mb-4";

      menuCard.innerHTML = `
        <div class="card h-100 shadow">
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <p class="card-text text-muted"><strong>${item.price}</strong></p>
          </div>
        </div>
      `;

      menuContainer.appendChild(menuCard);
    });
  });

