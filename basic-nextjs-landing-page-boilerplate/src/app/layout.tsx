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
