import "@/styles/globals.css";
import type { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  return <section className="pt-20">{children}</section>;
}
