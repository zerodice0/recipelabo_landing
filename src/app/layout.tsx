import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recipe Labo - Personal Recipe Management App | レシピラボ | 레시피 라보",
  description: "Systematically manage your own recipes and discover new dishes with ingredients you have. Recipe version management, cooking logs, ingredient-based search and more. | あなただけのレシピを体系的に管理し、手持ちの食材で新しい料理を発見しましょう。 | 당신만의 레시피를 체계적으로 관리하고, 보유한 재료로 새로운 요리를 발견해보세요.",
  keywords: ["recipe", "cooking", "app", "recipe management", "ingredient search", "cooking log", "レシピ", "料理", "アプリ", "레시피", "요리", "앱", "레시피 관리", "재료 검색", "요리 로그"],
  authors: [{ name: "Recipe Labo Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Recipe Labo - Personal Recipe Management App",
    description: "Systematically manage your own recipes and discover new dishes with ingredients you have.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR", "ja_JP"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recipe Labo - Personal Recipe Management App",
    description: "Systematically manage your own recipes and discover new dishes with ingredients you have.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/recipe_labo.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
