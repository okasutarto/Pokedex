                                # Pokedex

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Table of Contents

Introduction
Getting Started
Repository Structure
Dependencies
Key Code Components
Conclusion

## 1. Introduction

The Pokedex repository is a web-based application built using Vue 3, a progressive JavaScript framework for building user interfaces. The repository contains the source code, documentation, and related resources for developing and maintaining the Pokedex web app. This technical documentation will provide detailed insights into the project's architecture, dependencies, build processes, and key code components.

## 2. Getting Started

See [Vite Configuration Reference](https://vitejs.dev/config/).

Clone the repository to your local machine using the following command:

```sh
git clone https://github.com/okasutarto/Pokedex.git
```

Install the necessary dependencies by running the following command in the project root directory:

```sh
npm install
    or
yarn install
```

Once the dependencies are installed, you can start the development server by running the following command:

```sh
npm run dev
    or
yarn dev
```

Open a web browser and navigate to http://localhost:5173 to access the Pokedex web app.

## 3. Architecture Overview

The Pokedex web app follows a component-based architecture, leveraging the capabilities of Vue 3. This architecture allows for modular development, code reuse, and separation of concerns. The following are the main components of the Pokedex architecture:

## /src:

This is the main directory of the Pokedex web app and contains the majority of the source code. It includes the following subdirectories and files:

### /src/assets:

This directory contains static assets such as images, icons, and other media files used in the application.

### /src/components:

The components directory contains reusable UI components that are used across different views. These components encapsulate specific functionality and can be composed together to build more complex interfaces. Examples of components in the Pokedex web app include Pokemon cards, badge, Pokemon Details, and more. Organizing components in this directory promotes code reusability and maintainability.

### /src/plugins:

This directory houses custom plugins used in the Pokedex web app. It includes the following subdirectories:

#### /src/plugins/axios:

This directory contains configuration and setup files related to Axios, the HTTP client library used for making API requests. It may include an instance of Axios with default settings, request interceptors, or other customizations.

#### /src/plugins/pinia:

This directory includes the setup files for Pinia, a state management system for Vue. It may contain code related to the creation of the Pinia store and initialization of plugins or middleware.

### /src/router:

This directory contains the setup and configuration files for the Vue Router, which handles navigation within the Pokedex web app. It defines the routes, their corresponding components, and any route guards or middleware required for navigation.

### /src/views:

The views directory contains the top-level views or pages of the application. Each view corresponds to a specific URL route and is responsible for rendering the UI and managing the presentation logic for that particular page.

### Additional Directories:

The repository may contain other directories and files to support the project's functionality, configuration, or documentation. These directories and files can vary depending on the specific requirements of the Pokedex web app.

## 4. Dependencies

The Pokedex repository relies on several key dependencies:

### Vue 3:

The core Vue.js framework for building user interfaces.

### Vue Router:

The official router for Vue.js, used for managing navigation within the application.

### Pinia:

The official state management library for Vue.js, used for managing application-level state.

### Axios:

A popular HTTP client library used for making API requests.

### Bootstrap:

A CSS framework used for styling and layout.

For a complete list of dependencies and their versions, refer to the package.json file in the repository.

## 5. Key Code Components

The Pokedex repository contains several key code components that play crucial roles in the application. Understanding these components is essential for effective contribution and development. Here are some important components:

### Homepage :

The Homepage view serves as the landing page of pokedex web app.

### Dashboard:

The dashboard view serves as the main entry point of the application. It displays a collection of Pokemon cards, showcasing basic information about each Pokemon.

## FavPokemon :

The FavPokemon view is a page in the Pokedex web app that allows users to mark and manage their favorite Pokemon. It provides a way for users to keep track of their preferred Pokemon and easily access them for future reference.

### Card:

The Card component represents an individual Pokemon card displayed in the dashboard view. It encapsulates the rendering of the card's layout, including the Pokemon's name, image, and type.

### PokemonModal:

The PokemonModal component provides comprehensive information about a specific Pokemon. It displays details such as the Pokemon's description, type, and base stats. The PokemonModal view utilizes the Pokemon API to fetch and present the relevant data.

### ImageModal :

The ImageModal component is a key code component in the Pokedex web app that is responsible for displaying a modal window with an enlarged image of a Pokemon. When a user interacts with a Pokemon card or clicks on an image, the ImageModal component is triggered to show the selected image in a larger format, providing a better view of the Pokemon.

### Badge:

The Badge component is a key code component in the Pokedex web app that is responsible for displaying a badge or label associated with a specific attribute or characteristic of a Pokemon. Badges provide visual indicators that help users quickly identify and understand certain types of a Pokemon.

### Navbar :

The Navbar component is a key code component in the Pokedex web app that provides a navigation bar or menu at the top of the application. It allows users to navigate between different sections or views of the app and provides access to important features or functionality.

## 6. Conclusion

This documentation has provided an in-depth overview of the Pokedex repository, covering its architecture, dependencies, build processes, and key code components. Understanding these aspects is crucial for developers looking to contribute to the project or gain a comprehensive understanding of the codebase. For further details and specific instructions, refer to the documentation and README file in the repository. Happy coding!

# ---------------------------------------------------------------------------

                        # Pokedex Web App Documentation

Welcome to the documentation for the Pokedex Web App. This documentation provides an overview of the features and functionality of the Pokedex Web App, how to navigate through the app, and how to use its various components.

## Table of Contents

Introduction
Getting Started
Dashboard
Pokemon Details
Error Handling
Frequently Asked Questions (FAQ)
Conclusion

## 1. Introduction

The Pokedex Web App is a web-based application that allows users to explore and discover information about different Pokemon species. It provides a comprehensive database of Pokemon, including details such as their types, abilities, stats, evolutions, and more. With a user-friendly interface and intuitive design, the app aims to provide an enjoyable and informative experience for Pokemon enthusiasts.

## 2. Getting Started

To access the Pokedex Web App, open the following URL in a web browser: https://pokedex-oka.vercel.app/#/. The app can be used on various devices, including desktops, laptops, tablets, and mobile phones, with a responsive design optimized for different screen sizes.

## 3. Dashboard

Upon opening the app, you will be directed to the homepage. The dashboard displays a collection of Pokemon cards, each representing a different Pokemon species. The cards provide a preview of the Pokemon, including its name, image, primary type, and secondary type.

To view more details about a specific Pokemon, click on details button. This will navigate you to the Pokemon details modal / Pop-up Dialog.

To filter pokemons by type, use the filter by type feature located at the top of the page. Select the type of the Pokemons you are looking for, and the app will display the matching results.

## 4. Pokemon Details

The Pokemon details page provides comprehensive information about a specific Pokemon species. Here, you can find details such as the Pokemon's description, Pokemon's types, general information , base stats, and more. The page also displays an image of the Pokemon for easy identification.

To navigate back to the dashboard, click on the close button at the bottom or "X" button located at the top of the pop up dialog.

## 5. Error Handling

In case of any errors or issues while using the Pokedex Web App, the app will display appropriate error messages to assist you. If you encounter any problems or have questions, please refer to the FAQ section or contact the support team for further assistance.

## 6. Frequently Asked Questions (FAQ)

### Q1. Can I use the Pokedex Web App on my mobile phone?

A1. Yes, the Pokedex Web App is designed to be mobile-friendly and can be accessed on various devices, including mobile phones.

### Q2. Is the app regularly updated with new Pokemon?

A2. The Pokedex Web App relies on an external Pokemon data source, and the data is periodically updated. However, for the most up-to-date information, it is recommended to check the official Pokemon sources.

### Q3. Can I contribute to the Pokedex Web App or report issues?

A3. The Pokedex Web App is an open-source project. You can find the source code and contribute to it on the GitHub repository : https://github.com/okasutarto/Pokedex. If you encounter any issues or have suggestions, feel free to create an issue on GitHub.

## 7. Conclusion

The Pokedex Web App is a powerful tool for exploring and discovering information about various Pokemon species. With its intuitive interface and extensive database, it provides an enjoyable experience for Pokemon enthusiasts of all ages. We hope this documentation has provided you with a clear understanding of the app's features and functionality. If you have any further questions or need assistance, please refer to the FAQ section or contact the support team. Enjoy exploring the world of Pokemon!
