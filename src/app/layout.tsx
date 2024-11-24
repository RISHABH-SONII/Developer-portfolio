import type { Metadata } from "next";
import "./globals.css";
import { generateKeywords } from "@/utils/generateKeyword";
import { MantineProvider } from "@mantine/core";
import { GoogleAnalytics } from "@next/third-parties/google";

const baseUrl = "https://localhost:3000";
export const metadata: Metadata = {
  title: "Jhan Gonzales - Portfolio | Web Developer & Designer",
  description:
    "Explore the portfolio of Jhan Gonzales, a web developer and designer specializing in creating modern, responsive, and user-friendly websites. Discover projects, skills, and insights in web development, design, and more.",
  keywords: generateKeywords(),
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
    languages: {
      en: baseUrl,
    },
  },
  openGraph: {
    title: "Jhan Gonzales - Portfolio | Web Developer & Designer",
    description:
      "Showcasing projects, skills, and expertise in web development and design. Discover the work and experience of Jhan Gonzales.",
    url: "http://localhost:3000",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {" "}
        <MantineProvider
          theme={{
            fontFamily: "Poppins, sans-serif",
            headings: { fontFamily: "GoogleSans, sans-serif" },
          }}
        >
          {children}
        </MantineProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jhan Gonzales",
              // url: process.env.NEXT_PUBLIC_LIVE_URL ?? "http://localhost:3000",
              url: "http://localhost:3000",
              sameAs: [
                "https://www.linkedin.com/in/your-profile",
                "https://github.com/your-github",
                "https://twitter.com/your-twitter",
              ],
              description:
                "Brief summary about you, your skills, and expertise.",
              mainEntity: [
                {
                  "@type": "SiteNavigationElement",
                  name: "About",
                  url: `${process.env.NEXT_PUBLIC_LIVE_URL}/about`,
                  description: "Learn more about my background and experience.",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Portfolio",
                  url: `${process.env.NEXT_PUBLIC_LIVE_URL}/portfolio`,
                  description: "Explore my projects and accomplishments.",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Contact",
                  url: `${process.env.NEXT_PUBLIC_LIVE_URL}/contact`,
                  description:
                    "Get in touch with me for collaboration or inquiries.",
                },
              ],
            }),
          }}
        ></script>
        <GoogleAnalytics gaId="" />
      </body>
    </html>
  );
}
