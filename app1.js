

 






 
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, this is the root path!');
});
  
  app.get('/api/items', (req, res) => {
      const items = [
     
          {
              id: 1,
              name: "Laptop",
              price:40000,
              image: "http://localhost:3000/images/item1.jpeg",
              rating: 4.5,
              color: "Silver"
            },
            {
              id: 2,
              name: "Smartphone",
              price:20000,
              image: "http://localhost:3000/images/item2.jpeg",
                       rating: 4.2,
              color: "Purple"
              
            },
            {
              id: 3,
              name: "Wireless Headphones",
              price:5000,
              image: "http://localhost:3000/images/item3.jpeg",
                   rating: 4.8,
              color: "Blue"
            },
            {
              id: 4,
              name: "Fitness Tracker",
              price:3000,
              image: "http://localhost:3000/images/item4.jpeg",
                   rating: 4.0,
              color: "Black"
            },
            {
              id: 5,
              name: "TV",
              price:40000,
              image: "http://localhost:3000/images/item5.jpeg",
                  rating: 4.6,
              color: "Black"
             
            },
            {
              id: 6,
              name: "Coffee Maker",
              price:10000,
              image: "http://localhost:3000/images/item6.jpeg",
                  rating: 3.9,
              color: "Brown"
             
            },
            {
              id: 7,
              name: "Gaming Console",
              price:2000,
              image: "http://localhost:3000/images/item7.jpeg",
          rating: 4.5,
              color: "Teal"
            },
            {
              id: 8,
              name: "Smartwatch",
              price:3000,
              image: "http://localhost:3000/images/item8.jpeg",
                 rating: 4.2,
              color: "Blue"
            },
            {
              id: 9,
              name: "Bluetooth Speaker",
              price:3000,
              image: "http://localhost:3000/images/item9.jpeg",
                  rating: 3.7,
              color: "Black"
            },
            {
              id: 10,
              name: "Digital Camera",
              price:40000,
              image: "http://localhost:3000/images/item10.jpeg",
              rating: 4.1,
              color: "Silver"
            },
            {
              id: 11,
              name: "Desk Chair",
              price:400,
              image: "http://localhost:3000/images/item11.jpeg",
                rating: 4.8,
              color: "Black"
            },
            {
              id: 12,
              name: "Wireless Mouse",
              price:400,
              image: "http://localhost:3000/images/item12.jpeg",
               rating: 3.5,
              color: "Silver"
            },
            {
              id: 13,
              name: "Portable Charger",
              price:800,
              image: "http://localhost:3000/images/item13.jpeg",
              rating: 4.6,
              color: "White"
            },
            {
              id: 14,
              name: "Backpack",
              price:900,
              image: "http://localhost:3000/images/item14.jpeg", 
                   rating: 3.8,
              color: "Green"
            },
            {
              id: 15,
              name: "External Hard Drive",
              price:400,
              image: "http://localhost:3000/images/item15.jpeg",
              rating: 4.3,
              color: "Black"
            },
            {
              "id": 16,
              name: "Wireless Keyboard",
              price:400,
              image: "http://localhost:3000/images/item16.jpeg",
              rating: 4.0,
              color: "Black"
            },
            {
              id: 17,
              name: "Printer",
              price:40000,
              image: "http://localhost:3000/images/item17.jpeg",
              rating: 3.5,
              color: "White"
            },
            {
              id: 18,
              name: "Noise-Canceling Headphones",
              price:40000,
              image: "http://localhost:3000/images/item18.jpeg",
              rating: 4.7,
              color: "Black"
            },
            {
              id: 19,
              name: "Tablet",
              price:20000,
              image: "http://localhost:3000/images/item19.jpeg",
              rating: 4.2,
              color: "White"
            },
            {
              id: 20,
              name: "Smart Thermostat",
              price:40000,
              image: "http://localhost:3000/images/item20.jpeg",
              rating: 4.9,
              color: "Silver"
            }
        ];
  
    // Generate HTML table
    const htmlTable = `
      <html>
        <head>
          <style>
            table {
              font-family: Arial, sans-serif;
              border-collapse: collapse;
              width: 100%;
            }
            th, td {
              border: 1px solid #dddddd;
              text-align:left;
              padding: 8px;
            }
            th {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
          <h2>Product List</h2>
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Rating</th>
              <th>Color</th>
            </tr>
            ${items.map(item => `
              <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td><img src="${item.image}" alt="${item.name}" style="max-width: 50px;"></td>
                <td>${item.rating}</td>
                <td>${item.color}</td>
              </tr>
            `).join('')}
          </table>
        </body>
      </html>
    `;
  
    res.send(htmlTable);
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  