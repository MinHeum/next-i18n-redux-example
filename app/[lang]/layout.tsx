import { i18n } from "../../i18n-config";

// for redux
import { Providers } from "@/lib/providers";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <Providers>
      <html lang={params.lang}>
        <body>{children}</body>
      </html>
    </Providers>
  );
}

export const metadata = {
  title: "i18n within app directory - Vercel Examples",
  description: "How to do i18n in Next.js 13 within app directory",
};
