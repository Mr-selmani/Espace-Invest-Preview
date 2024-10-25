import "./globals.css"; 

export const metadata = {
  title: "Espace Invest",
  description: "Espace Invest is your go to tool to simplify your data collection boosting your productivity and perfecting your client management.  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
        {children}
      </body>
    </html>
  );
}
