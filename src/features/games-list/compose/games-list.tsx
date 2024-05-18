"use client";
import { Card } from "@/src/shared/ui/Card/Card";
import { useGamesList } from "../model/games-list-model";
import { ListLayout } from "../ui/list-layout";

export function GamesList() {
  const list = useGamesList();
  return (
    <ListLayout>
      {list.map((game) => (
        <Card {...game} key={game.title} />
      ))}
    </ListLayout>
  );
}
