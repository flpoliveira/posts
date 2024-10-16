## Requirements

We want you to develop entirely new view of posts list. Posts are accessible by category. Posts can have many categories.

- When clicking on a category, category's posts are displayed. Selected category should be maintained if user reloads the page in the browser
- When clicking on a star icon, category is marked as favorite
- User can view **All categories** or filter by **Favorite categories**

Dev this task just like you'd dev a fully fledged application feature, that you plan to maintain long term. Use any libraries you want. We value excellent UX, attention to details, code quality, readability and performance. The more skills you show us, the better.

## Starting the backend

The project requires **node >=18.19**, so check if you have the correct version. Install yarn globally `npm install -g yarn`, then install the dependencies with `yarn` on the backend folder.

Run `yarn` in backend folder to install dependencies. Run the server with `yarn start`. The API is served at [http://localhost:9000](http://localhost:9000/), and you can go to `/docs` to explore the API documentation.

## Starting the frontend

The project requires **node >=16**, so check if you have the correct version. Install the dependencies using `npm i` in the frontend folder.

Run `npm run dev` in the frontend folder to start the development server. Everything will be hosted locally at [http://localhost:5173](http://localhost:5173/), though Vite may assign a different port. Be sure to check the terminal for the correct address.

### Packages used in the frontend project

- @tanstack/react-query: For efficient data fetching and caching, especially when selecting between different categories.
- tailwindcss: For styling, ensuring design consistency with the Figma file. (Tailwind is compiled into standard CSS during the build process.)
- date-fns: For handling date and time formatting.
- axios: For making HTTP requests.
