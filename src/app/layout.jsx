import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PopupForm from "../components/PopupForm";
import Loader from "../components/ui/Loader";
import LoadingProvider from "../components/ui/LoadingProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillCurve - Online Courses & Career Development",
  description: "SkillCurve offers premium online courses from top universities, career counseling services, and placement support to help you advance your career.",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      }
    ],
    shortcut: "/favicon.svg",
  },
  appleWebApp: {
    title: "SkillCurve",
    statusBarStyle: "black-translucent",
  },
};

// Move themeColor to viewport export as per Next.js guidelines
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0052CC' },
    { media: '(prefers-color-scheme: dark)', color: '#0052CC' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <LoadingProvider>
          {/* Page transition loader */}
          <Loader />
          
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          
          {/* WhatsApp floating button visible on all pages */}
          <WhatsAppButton />
          
          {/* Popup form that appears after 5 seconds */}
          <PopupForm />
        </LoadingProvider>
      </body>
    </html>
  );
} 