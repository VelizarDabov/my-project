'use client'
import { Provider } from "react-redux";
import "./globals.css";
import { store } from "./store/store";
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
// 
export default function RootLayout({ children }) {
  return (
    <Provider store={store} >
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
}
