# ShopEasy
An E-Commerce Project - Ecommerce offers business a whole range of opportunities, from marketing opportunities to increasing your products ranges to generating more sales and with an optimised and well developed website you can not only achieve these goals but also offer your customers a round the clock, convenient service, that can boost your business.
<br>
As your business grows it’s very likely you’ll want to grow your product range and your target audience, as well as develop your business for customer requirements and consumer demand. An ecommerce site let’s you scale your business accordingly, allowing you to add more lines, add more payment options and even grow when you choose to ship to, without having to worry about changing your location or moving to a larger premises
<hr>

## ScreenShots
<b>HomePage-Featured Products</b><br>
![SS1](https://user-images.githubusercontent.com/54816974/178766100-fcbf33f9-76ec-4fab-8018-65d466c2119e.jpg)
<br>
<b>Product Screen</b>
![SS2](https://user-images.githubusercontent.com/54816974/178766189-e157f48e-9317-46e0-94f6-ee1229dfa5b4.jpg)
<br>
Register Screen
![SS9](https://user-images.githubusercontent.com/54816974/178766351-b5665e98-52ca-42d6-9047-24eb5789a866.jpg)
<br>
SignIn Screen
![SS7](https://user-images.githubusercontent.com/54816974/178766555-82e2466d-896c-4c1b-8836-d86c0cce2d71.jpg)
<br>
Cart Screen
![SS3](https://user-images.githubusercontent.com/54816974/178766287-ba3d8cd2-5bf3-4e49-9d2c-957ccf1065dd.jpg)
<br>
Shipping Screen
![ss4](https://user-images.githubusercontent.com/54816974/178766400-fd8b625a-3377-441b-9a1a-5ca56cb11a2d.jpg)
<br>
Payment Method Screen
![SS5](https://user-images.githubusercontent.com/54816974/178766449-4d355be7-20f8-4e3b-898e-91e83018e8b9.jpg)
<br>
Place Order Screen
![SS6](https://user-images.githubusercontent.com/54816974/178766505-a5ca4fc5-e647-4505-832f-c1e46a5ac74a.jpg)


## Tasks

### Website templates
- create index.html
- create header main footer
- style elements


### Products
- create products div
- add products attributes
- add link, image, name, price

### Create React App
- npx create-react-app frontend
- npm start
- Remove unused files
- copy index.html content to app.js
- copy styles.css content to index.css
- replace class with classname

### Create Rating and Product Component
- creating components/Rating.js
- create div.rating
- style div.rating, span and last span
- create product component
- use rating component

### Build Product Screen
- Install react-router-dom
- User BrowserRouter and Route for HomeScreen
- Create HomeScreen.js
- Add product list code there
- Create ProductScreen.js
- Add new Route from product details to App.js
- create 3 columns for product image, info and action

### Create Node.JS Server
- run npm init in root folder
- Update package.json set type:module
- Add.js to imports
- npm install express
- create server.js
- add start command as node backend/server.js
- require express
- create route for / return backend is ready
- move product.js from frontend to backend
- create route for /api/products
- return products
- run npm start

### Load products from Backend
- edit HomeScreen.js
- define products, loading and error.
- create useEffect
- define async fetchData and call it
- install axios
- get data from /api/products
- show them in the list
- create loading component
- create Message Box Component
- Use them in HomeScreen

### Install ESlint For Code linting
- install VSCode eslint extension
- npm install -D eslint
- run ./node_modules/.bin/eslint --init
- Create ./frontend/.env
- Add SKIP_PREFLIGHT_CHECK=true

### Add Redux to Home Screen
- npm install redux react-redux
- Create store.js
- initState={products:[]}
- reducer = {state,action}=> switch LOAD_PRODUCTS:{products:action.payload}
- export default createStore(reducer, initState)
- Edit HomeScreen.js
- shopName = useSelector(state=>state.products)
- const dispatch =useDispatch()
- useEffect(()=>dispatch({type:LOAD_PRODUCTS,payload:data}))
- add store to index.js

### Add Redux to Product Screen
- create product detail constants, actions and reducers
- add reducer to store.js
- use action in ProductScreen.js
- add /api/v1/product/:id to backend api

### Handle Add to Cart Button
- Handle Add to cart in ProductScreen.js
- Create CartScreen.js

### Implement Add to Cart Action
- create addToCart constants, actions and reducers
- add reducer to store.js
- use action in CartScreen.js
- render cartItems.length

### Build Cart Screen
- Create 2 columns for cart item and cart action
- cartItems.length === 0 ? cart is empty
- show item, image, qty and price
- Proceed to checkout button
- Implement remove from cart action

### Implement Remove from Cart Action
- create removeFromCart constants, actions and reducers
- add reducer to store.js
- use action in CartScreen.js

### Connect to MongoDB
- npm install mongoose
- connect to mongodb
- create config.js
- npm install dotenv
- export MONGODB_URL
- create models/userModel.js
- create userSchema and userModel
- create models/productModel.js
- create productSchema and productModel
- create userRoute
- Seed sample data

### Create Sample Products in MongoDB
- create models/productModel.js
- create productSchema and productModel
- create productRoute
- seed sample data

### Create Sign-in Backend
- Create /signin api 
- check email and password
- generate jwt token
- install json web token
- install dotenv
- return token and data
- test it using postman

### Design SignIn Screen
- Create SigninScreen
- Render email and password fields
- Create signin constants, actions and reducers
- Update Header based on user login

### Implement SignIn Action
- Create SignIn constants, actions and reducers
- add reducer to store.js
- use action in SigninScreen.js

### Create Register Screen and Backend API
- Create API for /api/v1/users/register
- insert new user to database
- return usern info and token
- create RegisterScreen
- Add fields
- Style fields
- Add screen to App.js

### Create Shipping Screen
- Create CheckoutSteps.js component
- Create Shipping Fields
- Implement Shipping Constant, actions and reducers

### Create Payment Screen
- Create Payment Fields
- Implement Shipping Constant, actions and reducers

### Design Place Order Screen
- Design order summary fields
- Design order action

### Create backend Place Order API
- createOrder API
- create orderModel
- create orderRouter
- create post order route

### Implement PlaceOrder Action
- Handle place order button click
- create place order constants, action and reducer

### Create Order Screen
- Build Order API for /api/v1/orders/:id
- create OrderScreen.js
- dispatch order details action in useEffect
- load data with useSelector
- show data like place order screen
- create order details constant, action and reducer

### Add PayPal Button
- get client id from paypal
- set it in .env file
- create route from /api/v1/paypal/clientId
- create getPaypalClientID in OrderScreen.js
- add paypal checkout script in OrderScreen.js
- show paypal button

### Implement Order Payment
- update order after payment
- create payorder in api.js
- create route for /:id/pay in orderRouter.js
- rerender after pay order

### Display Orders History
- create customer orders api
- create api for getMyOrder
- show orders in profile screen
- style orders

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
