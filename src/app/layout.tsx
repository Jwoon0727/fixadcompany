import './globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr" suppressHydrationWarning={true}>
      <head>
        <title>픽스애드 - FIXAD</title>
        <meta
          name="description"
          content="진심이 만든 전략, 오래 찾는 마케팅. 픽스애드는 SEO, 퍼포먼스 마케팅, 콘텐츠 전략으로 비즈니스의 지속 가능한 성장을 만듭니다."
        />
      </head>
      <body>
        <div className="root">{children}</div>
      </body>
    </html>
  )
}
