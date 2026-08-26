import { RootProviderWrapper } from "@/components/RootProviderWrapper";
import "./global.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | eSchool Guru",
    default: "eSchool Guru",
  },
  description: "Dokumentasi aplikasi eSchool Mobile untuk guru dan staf",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProviderWrapper>
          {children}
        </RootProviderWrapper>
      </body>
    </html>
  );
}
