import { ReactNode } from "react";
export function GamesLayout({
  pageInfo,
  pageOptions,
  pageContent,
}: {
  pageInfo: ReactNode;
  pageOptions: ReactNode;
  pageContent: ReactNode;
}) {
  return (
    <>
      {pageInfo}
      {pageOptions}
      {pageContent}
    </>
  );
}
