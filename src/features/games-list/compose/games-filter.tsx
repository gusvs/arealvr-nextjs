"use client";
import { UiSelectField } from "@/src/shared/ui/form/ui-select-field";
import { filterOptions } from "../constants";
import { useFilters } from "../model/games-filters-model";
import { FiltersLayout } from "../ui/filters-layout";

export function GamesFilter() {
  const { data, updateOption } = useFilters();
  return (
    <FiltersLayout>
      <UiSelectField
        idKey="id"
        labelKey="label"
        value={data.item}
        options={filterOptions}
        onChange={updateOption}
      />
    </FiltersLayout>
  );
}
