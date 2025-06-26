WTWR - What To Wear App - Full Stack application

The WTWR app is a weather-based clothing recommendation application that helps users decide what to wear based on current weather conditions. The app provides personalized clothing suggestions by analyzing the temperature and weather data for the user's location.

Key Features:
- Weather Integration: Uses a weather API to fetch real-time weather data and temperature information
- Smart Clothing Recommendations: Filters and displays clothing items based on current weather conditions (hot, warm, cold)
- User Authentication: Complete user registration and login system with JWT token-based authentication
- Personal Wardrobe Management: Registered users can add, view, and delete their own clothing items
- Social Features: Users can like/unlike clothing items from other users
- Profile Management: Users can edit their profile information including name and avatar
- Responsive Design: Mobile-friendly interface with hamburger menu for smaller screens
- Temperature Unit Toggle: Switch between Fahrenheit and Celsius temperature displays

Technologies and Techniques Used
Frontend Technologies:
- React: Component-based UI library with functional components and hooks
- React Router: Client-side routing for navigation between pages
- React Context API: State management for current user and temperature unit preferences
- Custom Hooks: useFormAndValidation for form handling and validation
- CSS: Styling and responsive design
- Vite: Modern build tool for faster development

Backend Technologies:
- Node.js: JavaScript runtime environment
- Express.js: Web application framework for building REST APIs
- MongoDB: NoSQL database for data storage
- Mongoose: Object Data Modeling (ODM) library for MongoDB
- JWT (JSON Web Tokens): Secure user authentication and authorization
- bcrypt: Password hashing for security
- CORS: Cross-Origin Resource Sharing middleware
- Validator: Data validation library

Development Tools:
- ESLint: Code linting with Airbnb configuration
- Prettier: Code formatting
- Nodemon: Development server with hot reload

API Integration:
- Weather API: External service for fetching real-time weather data
- RESTful API Design: HTTP methods (GET, POST, PATCH, DELETE) for CRUD operations

Key Programming Techniques:
- Component-based architecture with reusable React components
- State management using React hooks (useState, useEffect, useContext)
- Asynchronous programming with Promises and async/await
- Form validation with custom validation logic
- Protected routes requiring authentication
- Error handling with try-catch blocks and proper error responses
- Token-based authentication with localStorage persistence
- Responsive design principles for mobile compatibility

This project demonstrates a complete full-stack application with modern web development practices, secure authentication, and real-world API integration.

Live page [here](https://gorgo.blinklab.com)

Backend code [here](https://github.com/joja-peaches/se_project_express)