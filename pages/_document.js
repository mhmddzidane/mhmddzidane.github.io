import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/icon/z.png" />
      </Head>
      <body>
        <script src="https://accounts.google.com/gsi/client" async defer />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
