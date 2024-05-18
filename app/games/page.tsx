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
