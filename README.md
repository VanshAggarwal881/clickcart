# ClickCart
ClickCart is a dynamic product management application built with React, allowing users to view, add, edit, and delete products. 
Initially, the app fetched data from the Fake Store API, but it was enhanced to store data in local storage, 
enabling complete CRUD (Create, Read, Update, Delete) functionality without reliance on external APIs.  


# Features
**Product Showcase:** Displays products with categories fetched from a Fake Store API.
**Seamless Navigation:** Uses React Router DOM for routing between pages without reloading.
**CRUD Functionality:** Add, edit, and delete products with ease. Data is stored locally in the browser via local storage.
**Context API:** Centralized state management using React's useContext for managing product data across the application.
**Dynamic Filtering:** Allows filtering of products by category.
**Responsive UI:** A clean and responsive design for an optimal user experience.  

# Technologies Used
*React:* The core JavaScript library for building the UI.
*React Router DOM:* For routing between different pages (home, product details, add, and edit).
*Axios:* To fetch product data initially from the Fake Store API.
*Context API:* For global state management of product data.
*Local Storage:* To store product data and persist across sessions.
*TailwindCSS:* For styling the application.  

# How It Works
1. Initial API Fetch: Initially, the product data was fetched from the Fake Store API.
2. Local Storage Transition: The data was moved to local storage to allow the addition, deletion, and modification of products.
3. Add/Edit/Delete Products: Users can add new products, edit existing ones, or delete products, with changes reflected immediately in the UI and stored in local storage.
4. Filter by Categories: Products are organized into categories, and users can filter the products displayed by category.
