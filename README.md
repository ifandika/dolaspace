# DolaSpace

---

## Introduction

**DolaSpace** is an interactive learning platform dedicated to preserving and promoting the cultural heritage of **Tari Dolalak** — a traditional dance originating from Purworejo, Central Java, Indonesia.

The application is developed as a **web-based platform**, meaning it can be accessed from any device, anytime, and anywhere. The interface is fully **responsive**, adapting seamlessly to desktop and mobile screens.

This documentation provides a technical overview of the project: its architecture, tech stack, folder structure, integrations, and development workflow.

---

## Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| **Build Tool** | [Vite](https://vite.dev/guide/) | Fast build & dev server |
| **UI Library** | [React.js v19](https://react.dev/reference/react) | Component-based frontend |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/docs/installation/using-vite) | Utility-first CSS via Vite plugin |
| **Routing** | [React Router](https://reactrouter.com/home) | Client-side navigation |
| **Charts** | [Google Charts](https://developers.google.com/chart) | Data visualization |
| **Language** | JavaScript (not TypeScript) | Chosen for simplicity and faster iteration |
| **Database** | None | Data stored statically (see Storage section) |

---

## How to Develop
Follow these steps to set up the project locally:

### 1. Clone or download the project
```bash
$ git clone <repository-url>
$ cd dolaspace
```

### 2. Open with a code editor
Recommended: Visual Studio Code.

### 3. Install dependencies
```bash
$ npm install

# Install the additional libraries used in this project:
$ npm install react-router-dom
$ npm install tailwindcss @tailwindcss/vite
$ npm install react-google-charts
```

### 4. Run the development server
```bash
$ npx vite
# or
$ npm run dev
```

### 5. Open in your browser
```text
http://localhost:5173/
```

---

## Storage
DolaSpace does not use a database (no MySQL, PostgreSQL, MongoDB, etc.).

All data is stored in static files inside src/data/. When a user submits new data (e.g., a comment), it is held in React state (or a static file) rather than persisted to a database.

> Limitation: Any new input will be lost on page refresh, since it is not stored persistently. This is intentional for the current version — a backend may be added in future iterations.

---

## Project Structure
Below is the folder and file structure of DolaSpace, with a brief explanation for each item.

```text
dolaspace/
├── node_modules/                # Installed npm packages (React, Vite, etc.)
├── public/                      # Publicly served static files
├── src/                         # Main source code
│   ├── assets/                  # All project resources
│   │   ├── documentation/       # Photos documenting Tari Dolalak
│   │   ├── dolalak/             # Images of Tari Dolalak costume components
│   │   └── video/               # Overview video of Tari Dolalak
│   │                            # (source: "Romansa Purworejo" on YouTube)
│   ├── components/              # Reusable JSX components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── VideoHero.jsx
│   │   ├── GalleryGrid.jsx
│   │   └── ...
│   ├── data/                    # Static data files (.js)
│   ├── hooks/                   # Custom React hooks (e.g., for comments)
│   ├── pages/                   # Page-level components (routed views)
│   │   ├── Home.jsx
│   │   ├── Chatbot.jsx
│   │   ├── Dolalak.jsx
│   │   ├── NotFound.jsx
│   │   └── History.jsx
│   ├── App.jsx                  # App entry — defines all routes
│   ├── index.css                # Global styles + Tailwind directives
│   └── main.jsx                 # React root — mounts App to index.html
├── .env                         # Environment variables (e.g., Gemini API key)
├── .gitignore                   # Files/folders excluded from Git
├── .oxlintrc.json               # Linter configuration
├── index.html                   # Entry HTML file served to users
├── package-lock.json            # Locked dependency versions
├── package.json                 # Project metadata & scripts
├── README.md                    # This documentation
└── vite.config.js               # Vite configuration
```

---

## SDLC — Waterfall Model
DolaSpace was developed using the Waterfall methodology — a linear, sequential approach where each phase must be completed before moving to the next.

###	Phase	Description
| No | Phase | Description |
|---|---|---|
| 1 | Requirements Analysis | Gather all needs: what features must exist (gallery, chatbot, chart, history page). Determine target users (students, cultural enthusiasts). |
| 2 | System Design | Design the UI/UX, sitemap, data flow, and component hierarchy. Choose the tech stack (React + Vite + Tailwind v4). |
| 3 | Implementation | Write the actual code: build components, set up routing, integrate Google Charts, connect to Gemini API, and embed Google Calendar. |
| 4 | Testing | Verify every feature works: routing, responsiveness, chatbot replies, chart rendering, and form submissions. Fix bugs found. |
| 5 | Deployment | Publish to a hosting platform (Vercel/Netlify). Set environment variables and ensure the production build runs correctly. |
| 6 | Maintenance | Data stored statically (see Storage section) | Ongoing: update content, fix bugs, add new features, and monitor performance. |

---

## Routing Pages
DolaSpace uses React Router for client-side navigation.

- http://localhost:5173/	=> Homepage: landing page with hero video, gallery, chart, and comment section
- http://localhost:5173/about-us	=> About Us: information about the DolaSpace platform
- http://localhost:5173/history	=> History: detailed history of Tari Dolalak
- http://localhost:5173/dolalak	=> Components: costume components and attributes of Tari Dolalak
- http://localhost:5173/chatbot	=> Chatbot: interactive AI assistant powered by Gemini

---

## Integrations
DolaSpace integrates with four external services.
### 1. Google Calendar
Used in the Events section of the homepage. Displays a live embedded calendar showing upcoming Tari Dolalak events in Purworejo.

### 2. Google Gemini AI - gemini-3-flash-preview
Powers the Chatbot page. Users can ask questions about Tari Dolalak in natural language, and the AI responds in a friendly, culturally-aware tone.

### 3. Google Charts
Used in the Data section. Renders interactive charts (pie and line) that visualize public interest in Tari Dolalak across regions and years.

### 4. WhatsApp
Integrated into the Help / Support section. Users can reach the admin directly via WhatsApp for assistance.

---

## Compatibility

### Devices
| Device | Supported |
|---|---|
| Desktop / Web | Yes |
| Android / iOS / Tablet (browser) | Yes |
| Smart TV (browser) | Yes |

### Browsers
| Browser | Supported |
|---|---|
| Google Chrome | Yes |
| Microsoft Edge | Yes |
| Safari | Yes |
| Mozilla Firefox | Yes |

---

## Reference
[1] https://react.dev/reference/react
[2] https://tailwindcss.com/docs/installation/using-vite
[3] https://vite.dev/guide/
[4] https://developers.google.com/chart
[5] https://reactrouter.com/home