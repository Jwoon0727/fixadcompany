import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr" suppressHydrationWarning={true}>
      <head>
        <title>픽스애드 - FIXAD</title>
        <meta
          name="description"
          content="진심이 만든 전략, 오래 찾는 마케팅.
픽스애드는 SEO · 글로벌 플랫폼 · 콘텐츠 전략을 통해 브랜드가 발견되고 선택되는 구조를 만듭니다."
        />
        <meta
          name="naver-site-verification"
          content="632ee8d841c3e6fc51d7a0324d9671535e7f2ef3"
        />
      </head>
      <body>
        <div className="root">{children}</div>
      </body>
    </html>
  );
}
