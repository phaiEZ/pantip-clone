import '@/styles/global.css';

import { unstable_setRequestLocale } from 'next-intl/server';

import Footer from '@/components/Footer';
import { AppConfig } from '@/utils/AppConfig';

export function generateStaticParams() {
  return AppConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <html lang={props.params.locale}>
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <body>
        {props.children}
        <Footer></Footer>

      </body>
    </html>
  );
}
