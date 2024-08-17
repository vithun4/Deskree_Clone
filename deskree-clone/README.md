# Deskree Clone - Application Details

This `README.md` covers details specific to the application code within the `app` folder of the Deskree Clone project.

## Folder Structure

- **`components/`**: Contains reusable UI components like `Navbar`, `Footer`, and `BentoGrid`.
- **`pages/`**: Holds the page components for different routes.
- **`lib/`**: Contains utility functions used throughout the app.
- **`globals.css`**: Custom global styles and Tailwind CSS configuration.

## Global Styles

The global styles are defined in `globals.css`, which includes:

- Tailwind CSS base, components, and utilities.
- Custom CSS variables for color schemes.
- Font import for Mulish.

## Key Components

- **Navbar**: The top navigation bar, with a black background and responsive design.
- **Footer**: The bottom section of the page, containing links to various site sections.
- **FlipWords**: A dynamic component that animates between different words in a headline.

## Development

To start developing, ensure you are in the root of the project and run:

```bash
npm run dev
```

This will start the development server and allow you to view changes live.

## Theming

The app uses a dark theme with specific color codes:

- **Primary Color**: `#516CFD` for highlighting elements.
- **Background Color**: Black (`#000000`) with white text.

## Deployment

Ensure the build is optimized before deploying:

```bash
npm run build
npm start
```

This will compile the project into a production-ready build.

---

For any further questions, refer to the main `README.md` in the root of the repository or contact the project maintainer.
