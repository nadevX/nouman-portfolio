import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {

  metadataBase: new URL(
    "https://your-domain.com"
  ),

  title:
    "Nouman | AI Engineer | Machine Learning & Computer Vision",

  description:
    "Malik Muhammad Nouman Amjad is an AI Engineer specializing in Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, and AI research.",

  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning",
    "Computer Vision",
    "Artificial Intelligence",
    "Generative AI",
    "Vision Transformers",
    "Medical AI",
    "Python",
    "TensorFlow",
    "Keras",
  ],

  authors: [
    {
      name:
        "Malik Muhammad Nouman Amjad",
    },
  ],

  creator:
    "Malik Muhammad Nouman Amjad",


  icons: {

    icon:
      "/logo.png",

    apple:
      "/logo.png",

  },


  openGraph: {

    title:
      "Nouman | AI Engineer",

    description:
      "Artificial Intelligence portfolio showcasing Machine Learning, Deep Learning, Computer Vision, and AI research projects.",

    url:
      "https://your-domain.com",

    siteName:
      "Nouman AI",

    images: [

      {
        url:
          "/logo.png",

        width:
          512,

        height:
          512,

        alt:
          "Nouman AI Logo",
      },

    ],

    locale:
      "en_US",

    type:
      "website",

  },


  twitter: {

    card:
      "summary_large_image",

    title:
      "Nouman | AI Engineer",

    description:
      "AI Engineer specializing in Machine Learning, Deep Learning, and Computer Vision.",

    images:
      [
        "/logo.png",
      ],

  },


};


export const viewport: Viewport = {

  width:
    "device-width",

  initialScale:
    1,

  themeColor:
    "#030712",

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html
      lang="en"
      data-scroll-behavior="smooth"
    >

      <body>


        {children}



        {/* SEO Structured Data */}

        <script

          type="application/ld+json"

          dangerouslySetInnerHTML={{

            __html: JSON.stringify({

              "@context":
                "https://schema.org",

              "@type":
                "Person",

              "name":
                "Malik Muhammad Nouman Amjad",

              "jobTitle":
                "AI Engineer",

              "description":
                "AI Engineer specializing in Machine Learning, Deep Learning, Computer Vision, and Artificial Intelligence.",

              "url":
                "https://your-domain.com",

              "sameAs":

                [

                  "https://github.com/Nadevx",

                  "https://pk.linkedin.com/in/maliknoumanamjad"

                ]

            })

          }}

        />


      </body>


    </html>

  );

}