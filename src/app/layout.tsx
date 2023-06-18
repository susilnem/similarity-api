import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";

const poppins = Poppins({ weight: ["500", "600", "700"], subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", poppins.className)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers>{children}</Providers>
        <div className="h-40 md:hidden"></div>
      </body>
    </html>
  );
}
