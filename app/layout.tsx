import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../public/globals.css";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import ConfigureAmplifyClientSide from "./amplify-cognito-config";
import SessionProvider from './providers'
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ERP_INNMINDS",
  description: "my firts erp",
};

export default async function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* <ConfigureAmplifyClientSide /> */}
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
