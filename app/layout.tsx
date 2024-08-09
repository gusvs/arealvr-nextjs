"use client";
import "./globals.css";
import { Header } from "@/src/widgets/Header/Header";
import BurgerMenu from "../src/widgets/BurgerMenu/BurgerMenu";
import ButtonScrollUp from "@/src/shared/ui/ButtonScrollUp/ButtonScrollUp";
import Script from "next/script";
import { ReactNode, Suspense, useState } from "react";
import YandexMetrika from "@/src/shared/lib/YandexMetrika/YandexMetrika";
import { OrderModal } from "@/src/features/make-order/ui/order-modal/order-modal";

export default function RootLayout(
  {
    children
  }: {
    children: ReactNode;
  }) {

  const [opened, setOpened] = useState(false);

  return (
    <html lang="en">
    <body>
    <Script id="metrika-counter" strategy="afterInteractive">
      {`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(69118057, "init", {
        defer: true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
      });
      `}
    </Script>
    <Suspense fallback={<></>}>
      <YandexMetrika />
    </Suspense>
    <BurgerMenu />
    <Header />
    {children}
    <ButtonScrollUp />
    {/*<ButtonOrder onShowModal={() => {*/}
    {/*  setOpened(true);*/}
    {/*}} />*/}
    {opened && <OrderModal closingModal={() => setOpened(false)} isOpen={opened} />}
    </body>
    </html>
  );
}
