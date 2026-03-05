# Event Explorer

## 📖 Project Overview
**Event Explorer** is a dynamic web application designed to help users discover, explore, and reserve spots for local events. Whether you are looking to connect with people, experience something new, or focus on personal growth, Event Explorer provides a seamless platform to find what's happening around you. 

The application features a robust authentication system, an interactive event browsing experience, a dedicated user dashboard for tracking reservations, and customizable user profiles.

## ✨ Key Features
* **User Authentication:** Secure email/password and Google login integration powered by Firebase. Includes a password reset feature.
* **Event Discovery:** Browse upcoming and trending events with an interactive image slider and animated cards.
* **Event Details & Reservations:** View comprehensive event details (date, time, location, fee) and reserve a seat instantly. Reservations are managed via local storage.
* **User Dashboard:** A personalized space where users can view and track all their booked events.
* **Profile Management:** Users can view and update their display name and profile picture.
* **Protected Routes:** Critical pages like the Dashboard, Profile, and Event Details are restricted to authenticated users.
* **Responsive UI/UX:** A fully responsive, dark-themed interface built with Tailwind CSS and DaisyUI, featuring smooth scroll animations (AOS) and toast notifications.

## 🛠️ Technologies Used
* **Frontend Framework:** React (Vite)
* **Routing:** React Router v6/v7 (`createBrowserRouter`)
* **Styling & UI:** * Tailwind CSS v4
  * DaisyUI (Dark theme configured)
  * Lucide React & React Icons (Iconography)
* **Authentication:** Firebase Auth
* **Animations & Carousels:** * AOS (Animate On Scroll)
  * Swiper.js
* **Notifications:** Goey-Toast
* **State Management:** React Context API (`AuthProvider`), Local Storage (for bookings)

## 📂 File Structure

```text
src/
├── components/
│   ├── EventCard.jsx       # Individual card for upcoming events
│   ├── EventCards.jsx      # Grid container for upcoming events
│   ├── Footer.jsx          # Global site footer
│   ├── Loader.jsx          # Loading spinner for async operations
│   ├── Navbar.jsx          # Global navigation and user menu
│   ├── Slider.jsx          # Swiper carousel for featured events
│   ├── Trending.jsx        # Individual card for trending events
│   └── Trendings.jsx       # Grid container for trending events
├── context/
│   └── AuthProvider.jsx    # Firebase authentication context and state
├── layouts/
│   └── HomeLayout.jsx      # Main layout wrapper (Navbar + Outlet + Footer)
├── pages/
│   ├── Dashboard.jsx       # User's booked events display
│   ├── ErrorPage.jsx       # Custom 404 Not Found page
│   ├── EventDetails.jsx    # Detailed view and reservation form for a specific event
│   ├── ForgetPassword.jsx  # Password reset page
│   ├── Home.jsx            # Landing page (Slider, Events, Info sections)
│   ├── Login.jsx           # User sign-in page
│   ├── MyProfile.jsx       # User profile management page
│   └── Register.jsx        # User registration page
├── router/
│   ├── PrivateRoute.jsx    # Wrapper to protect authenticated routes
│   └── Route.jsx           # Centralized routing configuration
├── App.jsx                 # Base App component
├── index.css               # Global styles, Tailwind imports, DaisyUI config
└── main.jsx                # Application entry point and Provider wrappers
