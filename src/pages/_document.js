import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="es">
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="66a968ad-70de-4703-81be-84844ed28395"
        data-blockingmode="auto"
        type="text/javascript"
      ></Script>
      <Script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/66a968ad-70de-4703-81be-84844ed28395/cd.js"
        type="text/javascript"
      ></Script>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
