📘 Travlr Getaways – Full Stack Web Application

Author: Cisem “Misty” Tutkavul
Course: CS-465 Full Stack Development – SNHU
Portfolio Use: CS-499 Capstone ePortfolio Artifact

Travlr Getaways is a full-stack travel booking web application built using the MEAN stack (MongoDB, Express.js, Angular, Node.js).
The application provides both a customer-facing travel booking system and a secure admin dashboard for managing trips, pricing, and customers.

🌐 Features

Customer account registration and login

Search travel packages by location and price

View itineraries before travel

Admin-only dashboard to manage trips and pricing

Secure authentication using JWT tokens

MongoDB Atlas cloud database integration

🏗️ Architecture
Frontend Approaches Used

This project used two frontend methods to understand different web architectures.

1️⃣ Express + Handlebars HTML

Used for customer-facing pages

Server renders HTML dynamically

Good for simple pages and SEO

Advantages

Simple structure

Fast to build

Good for static content

Limitations

Full page reloads

Less interactive UI

2️⃣ Angular Single-Page Application (SPA)

Used for the admin dashboard with standalone Angular components.

Examples from my project:

TripListingComponent

TripCardComponent

TripDataService

AuthService

Advantages

Dynamic UI updates

Reusable components

Faster navigation

Better user experience

Limitations

More complex setup

Requires REST API planning

Using both approaches helped me understand real-world development environments.

🗄️ Why MongoDB (NoSQL)?

MongoDB Atlas was chosen because:

Flexible schema for travel package data

Easy Node.js integration with Mongoose

JSON-style documents match Angular frontend

Cloud scalability

Collections Used:

Trips

Users

Bookings

MongoDB allowed fast feature updates during milestones, such as adding price filters and itinerary details.

⚙️ Functionality
JSON vs JavaScript

JSON is a data format, while JavaScript is a programming language.

Example JSON from backend:

{
  "name": "Paris Adventure",
  "price": 1299,
  "location": "France"
}


Angular receives this JSON using HttpClient and displays it in UI components.

👉 JSON connects frontend and backend by transferring data through REST APIs.

Example endpoints:

GET /api/trips
POST /api/register
POST /api/login

🔧 Refactoring Examples

During development, I refactored code to improve performance and maintainability.

Examples:

Created reusable Angular TripCard component

Moved API calls into TripDataService

Added AuthService for JWT login

Improved Mongoose schema validation

Added middleware for route protection

Benefits of reusable UI components

Faster development

Cleaner code

Easier debugging

Consistent UI

Better scalability

These practices match professional software engineering standards.

🧪 Testing
API Methods and Endpoints

Endpoints were tested using Postman and browser testing.

Common methods:

GET – Retrieve trips

POST – Register or login users

PUT – Update trip information

DELETE – Remove trips

Testing included:

Correct responses

Error handling

Authentication validation

🔐 Security Testing

Admin dashboard required secure login.

Security features implemented:

Password hashing

JWT token authentication

Route protection middleware

Role-based access control

Testing included:

Invalid login attempts

Expired token checks

Unauthorized admin access

Security is essential for real-world full stack applications.

🌟 Reflection
How This Course Helped My Career Goals

This course supported my career path in cybersecurity, IT support, and full stack development.

Along with my certifications (CompTIA A+, Network+, Security+) and experience building my CS-499 ePortfolio, this project helped me develop real-world skills in secure web development.

Skills learned:

Full-stack MEAN architecture

Angular SPA development

REST API design

MongoDB schema modeling

JWT authentication

Debugging frontend/backend integration

GitHub documentation

These skills prepare me for roles such as:

Full Stack Developer

Backend Developer

Security Engineer

IT Software Support Specialist

This also connects with my family’s IT background (my husband Burak’s experience in Active Directory, firewall management, and endpoint security), helping us grow together professionally.

📸 Screenshots (Add Later)

You can add screenshots for your ePortfolio:

Customer trip search page

Admin Angular dashboard

Login security demo

MongoDB Atlas collections

🚀 Future Improvements

Payment gateway integration

Email confirmations

Admin analytics dashboard

Splunk logging integration (for cybersecurity monitoring)

Docker deployment

❤️ Final Thoughts

Travlr Getaways helped me understand how frontend, backend, database, and security all connect in a real production application.
This project is a key artifact in my CS-499 Capstone ePortfolio and demonstrates my readiness for professional software development roles.
