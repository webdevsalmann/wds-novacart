import { Inter, Kanit, Radio_Canada } from 'next/font/google'
import './globals.css'
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Providers from '@/components/providers/Providers';
import { siteMd } from '@/lib/metaData';
import { baseUrl } from '@/lib/config';

const inter = Kanit({ subsets: ['latin'], weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
// const inter = Outfit({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteMd.title,
    template: `%s - ${siteMd.title}`
  },
  description: siteMd.description,
  twitter: {
    card: "summary_large_image"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html >
  )
}
