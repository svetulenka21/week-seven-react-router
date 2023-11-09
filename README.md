# DIY Shop App

This is a simple React application for a DIY (Do It Yourself) shop. It allows users to browse and purchase various DIY items such as beads, charms, figurines, chain pendants, and bracelets. The project is structured using React Router for navigation and consists of components for different sections of the app.

## How to Use

1. Clone the repository.

2. Install dependencies using 'npm install'.

3. Run the application with 'npm start'.

4. Open the browser and navigate to 'http://localhost:3000' to view 
   the DIY shop.

## Project Structure

### App Component (App.js)

The main component that sets up the navigation using React Router. It includes links to the Shop, DIY, and Contact pages. The Routes component defines the routes for each page.

### Buttons Component (Buttons.js)

A reusable component that displays buttons for different DIY categories such as beads, charms, figurines, chain pendants, and bracelets. Clicking on these buttons filters the displayed products based on the selected category.


### Products Component (Products.js)

This component receives an array of products as a prop and renders them in a card format. Each product card includes an image, name, and price.


### Shop Component (Shop.js)

The main shop page that integrates the Buttons and Products components. It manages the state of displayed products based on the selected category.


### Data (data.js)

An array of DIY products with details such as id, name, searchTerm, price, and image. This data is imported into the Shop component for displaying products.

### Index File (index.js)

The entry point of the application where the App component is rendered using React Strict Mode. Performance metrics can be measured using the reportWebVitals function.



* Feel free to customize and enhance the project based on your requirements. Happy DIY shopping!