# PulseCity Event Explorer

PulseCity Event Explorer is a React + Vite web app for discovering events, viewing details, and creating local booking records after login.

## Features

- Firebase authentication (email/password + Google OAuth)
- Protected routes for event details, profile, and dashboard
- Event listing from `public/events.json` (upcoming + trending sections)
- Event details page with local reservation form
- User profile update for display name and photo URL
- Dark-themed UI with Tailwind CSS v4, DaisyUI, AOS, Swiper, and Gooey Toast

## Tech Stack

- React 19
- Vite 7
- React Router 7 (`react-router`)
- Firebase Auth
- Tailwind CSS v4 + DaisyUI 5
- AOS + Swiper
- Lucide React + React Icons
- `goey-toast`

## Scripts

- `npm run dev` - start development server
- `npm run build` - production build
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

## Environment Variables

Create a `.env.local` (or `.env`) file in the project root:

```bash
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
```

Variable names must match `src/firebase/firebase.config.js` exactly.

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Add Firebase environment variables.

3. Start development server:

```bash
npm run dev
```

## Build Status

- `npm run build` succeeds.
- Vite reports a large bundle warning (`dist/assets/index-*.js` > 500 kB).

## Code Review Findings (March 16, 2026)

### High

1. Password reset page does not call Firebase reset API.
   `src/pages/ForgetPassword.jsx:12` only toggles local state, shows a success toast, and opens Gmail (`src/pages/ForgetPassword.jsx:21`). This can falsely indicate success even when no reset email was sent.

2. Registration flow has a runtime bug in `setUser(...).catch(...)` usage.
   `src/pages/Register.jsx:68` calls `.catch` on `setUser(...)`, but `setUser` does not return a Promise. This can throw at runtime and break post-registration profile state updates.

### Medium

1. Dashboard booking data is global in localStorage, not scoped to current user.
   `src/pages/Dashboard.jsx:15` reads all `bookings`; `src/pages/EventDetails.jsx:70` writes records without a user ID key. Any signed-in user on the same browser can see all stored bookings.

2. Event data loading has no error/empty-state handling in multiple surfaces.
   `src/components/Slider.jsx:19`, `src/components/EventCards.jsx:11`, `src/components/Trendings.jsx:12`, and route loader `src/router/Route.jsx:43` fetch `events.json` without `catch`/fallback UI.

### Low

1. Debug logging left in production UI.
   `src/components/Navbar.jsx:8` logs `user` on every render.

2. `App.jsx` is effectively unused because routing is mounted directly from `main.jsx`.

## Suggested Next Improvements

1. Wire `ForgetPassword` to `resetPassword` from `AuthContext` and show success/error based on Promise result.
2. Fix registration state update logic around `updateUser` and `setUser`.
3. Scope bookings by authenticated user (e.g., `user.uid`) and filter in dashboard.
4. Add robust error/loading states for all event fetch points.
5. Consider route-based code splitting to reduce the main bundle size.
