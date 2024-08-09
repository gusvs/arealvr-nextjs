import {
  GamesFilter,
  GamesList,
  GamesProvider,
} from "@/src/features/games-list";
import { Metadata } from "next";
import { PageInfo } from "./ui/games-page-info";
import { GamesLayout } from "./ui/games-layout";

export const metadata: Metadata = {
  title: "Наши игры | Areal VR",
  description: "Большой выбор игр на любой вкус как для одного игрока, так и на компанию",
};

export default function GamesPage() {
  return (
    <section>
      <GamesProvider>
        <GamesLayout
          pageInfo={<PageInfo />}
          pageOptions={<GamesFilter />}
          pageContent={<GamesList />}
        />
      </GamesProvider>
    </section>
  );
}
