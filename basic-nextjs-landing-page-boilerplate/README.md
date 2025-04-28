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

1. Create a folder on drive to save your project and open it in your Command Line.

2. Run your first command

npx create-next-app@latest basic-nextjs-landing-page-boilerplate --typescript

after this command, and the set of questions as follows:

Yes to ESLint
No to Tailwind CSS
Yes to having code inside a 'src/' directory
Yes to App Router
No to Turbopack
Yes to import alias
  then enter for default @/*

3. Install missing packages

npm install styled-components
npm install --save-dev babel-plugin-styled-components


3. Open up or create a new file for each subsequent section following the project file system structure and replace or add in their corresponding code blocks below:

⸻

/src/app/page.tsx

import Layout from '@/app/layout';

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

import { ReactNode } from 'react';
import StyledComponentsRegistry from '@/lib/registry';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Tiny Global Village',
  description: 'Landing page boilerplate with Next.js, TypeScript, and Styled-Components.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {/* ✅ Global styles applied here inside the registry */}
          <Header />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}



⸻

/src/components/Header.tsx

'use client';
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

'use client';
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


/src/lib/registry.tsx

'use client';

import { useState } from 'react';
import { StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  const [styledComponentsStyleSheet] = useState(() => new (require('styled-components')).ServerStyleSheet());

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}

4. Test out by running the command and start building.

npm run dev
```
