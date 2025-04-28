# 🚀 Next.js + TypeScript + Styled-Components Boilerplate

This project provides a clean starting point for modern web applications built with:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)

It includes a basic landing page with a navigation bar, a main content body, and a footer — all fully typed and styled.

---

## 📂 Project Structure

```bash
your-project/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   ├── pages/
│   │   └── index.tsx
│   ├── styles/
│   │   └── GlobalStyle.ts
│   └── types/
│       └── index.d.ts
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json



⸻

🛠️ Setup Instructions

1. Clone the Repository

git clone https://github.com/your-username/your-project.git
cd your-project

2. Install Dependencies

npm install

or

yarn install

3. Run the Development Server

npm run dev

or

yarn dev

Open your browser at http://localhost:3000

⸻

📦 Example package.json

{
  "name": "nextjs-typescript-styled-components-boilerplate",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "styled-components": "^6.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "babel-plugin-styled-components": "^2.1.0"
  }
}



⸻

🧱 Boilerplate Code

/src/pages/index.tsx

import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to Your Next.js + TypeScript + Styled-Components Project!</h1>
      <p>Start building something amazing today.</p>
    </Layout>
  );
}



⸻

/src/components/Layout.tsx

import Header from './Header';
import Footer from './Footer';
import GlobalStyle from '@/styles/GlobalStyle';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}



⸻

/src/components/Header.tsx

import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1rem;
  background-color: #1e1e1e;
  color: white;
  text-align: center;
`;

export default function Header() {
  return (
    <Nav>
      Navigation Bar
    </Nav>
  );
}



⸻

/src/components/Footer.tsx

import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: #1e1e1e;
  color: white;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterContainer>
      Footer Content
    </FooterContainer>
  );
}



⸻

/src/styles/GlobalStyle.ts

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #fafafa;
    color: #333;
  }
`;

export default GlobalStyle;



⸻

🖥️ Additional Commands

Command	Description
npm run dev	Start development server
npm run build	Build for production
npm start	Start production server
npm run lint	Run ESLint (if configured)



⸻

🌟 Optional Enhancements
	•	Add ESLint & Prettier for formatting and linting
	•	Setup absolute imports via tsconfig.json
	•	Customize the favicon and metadata
	•	Implement SEO-friendly <Head> component
