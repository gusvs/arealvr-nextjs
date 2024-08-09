import Main from "./main/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AREAL VR - Виртуальная реальность в Челябинске",
  description:
    "Максимальное погружение в десятки виртуальных миров на любой вкус! Отличное место для любого праздника, у нас вы найдете много игровых локаций, красивые фотозоны и вкусный кофе!"
};

export default function Home() {
  return <Main />;
}
