import Provider from "@/components/Provider";
import { Inter } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS Blog",
  description: "CRUD Nextjs -MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
