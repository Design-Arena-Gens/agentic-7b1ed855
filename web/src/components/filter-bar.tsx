"use client";

import {
  accessFilters,
  resourceTypes,
  tags as tagCatalog,
  ResourceType,
  AccessModel,
} from "@/data/resources";
import { useMemo, useState } from "react";
import { Filter, Grid, ListFilter, Rows3, Search, Sparkles } from "lucide-react";

export type SortKey = "popularity" | "latest" | "name";

export interface Filters {
  query: string;
  tags: string[];
  type: ResourceType | "all";
  access: AccessModel | "all";
  sort: SortKey;
  view: "grid" | "row";
}

const sortOptions: { value: SortKey; label: string; description: string }[] = [
  { value: "popularity", label: "Trend Skoru", description: "Toplulukta öne çıkanlar" },
  { value: "latest", label: "Yeni Eklenenler", description: "Son doğrulanma tarihine göre" },
  { value: "name", label: "A-Z", description: "Alfabetik sıralama" },
];

interface FilterBarProps {
  filters: Filters;
  onFiltersChange: (next: Filters) => void;
  highlightedTag?: string;
  totalCount: number;
  matchCount: number;
}

export function FilterBar({
  filters,
  onFiltersChange,
  highlightedTag,
  totalCount,
  matchCount,
}: FilterBarProps) {
  const [tagSearch, setTagSearch] = useState("");

  const filteredTags = useMemo(() => {
    if (!tagSearch) {
      return tagCatalog;
    }
    return tagCatalog.filter((tag) =>
      tag.toLowerCase().includes(tagSearch.trim().toLowerCase()),
    );
  }, [tagSearch]);

  return (
    <section className="w-full space-y-6 rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm shadow-zinc-200/50 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-none">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            vibe coding evreni
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {matchCount} platform {matchCount < totalCount ? `(${totalCount} toplam)` : ""}
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() =>
              onFiltersChange({ ...filters, view: "grid" })
            }
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
              filters.view === "grid"
                ? "border-transparent bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "border-zinc-200 text-zinc-600 hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600"
            }`}
          >
            <Grid className="h-4 w-4" />
            Izgara
          </button>
          <button
            onClick={() =>
              onFiltersChange({ ...filters, view: "row" })
            }
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
              filters.view === "row"
                ? "border-transparent bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "border-zinc-200 text-zinc-600 hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600"
            }`}
          >
            <Rows3 className="h-4 w-4" />
            Liste
          </button>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-[1fr_auto_auto] md:items-center">
        <label className="relative flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <Search className="mr-2 h-4 w-4 text-zinc-400" />
          <input
            value={filters.query}
            onChange={(event) =>
              onFiltersChange({ ...filters, query: event.target.value })
            }
            placeholder="Platform, atmosfer veya topluluk ara..."
            className="w-full border-none bg-transparent py-1 text-sm text-zinc-700 outline-none placeholder:text-zinc-400 focus:outline-none dark:text-zinc-100"
          />
        </label>

        <div className="flex items-center gap-2">
          <Filter className="hidden h-4 w-4 text-zinc-400 md:block" />
          <select
            value={filters.type}
            onChange={(event) =>
              onFiltersChange({
                ...filters,
                type: event.target.value as Filters["type"],
              })
            }
            className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
          >
            <option value="all">Tüm formatlar</option>
            {resourceTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            value={filters.access}
            onChange={(event) =>
              onFiltersChange({
                ...filters,
                access: event.target.value as Filters["access"],
              })
            }
            className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
          >
            <option value="all">Tüm erişimler</option>
            {accessFilters.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            value={filters.sort}
            onChange={(event) =>
              onFiltersChange({
                ...filters,
                sort: event.target.value as Filters["sort"],
              })
            }
            className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            <ListFilter className="h-3.5 w-3.5" />
            filtrele
          </div>
          <button
            onClick={() =>
              onFiltersChange({
                query: "",
                tags: highlightedTag ? [highlightedTag] : [],
                type: "all",
                access: "all",
                sort: "popularity",
                view: "grid",
              })
            }
            className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 transition hover:text-zinc-600 dark:hover:text-zinc-200"
          >
            sıfırla
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <input
              value={tagSearch}
              onChange={(event) => setTagSearch(event.target.value)}
              placeholder="Etiket ara..."
              className="w-40 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs text-zinc-600 shadow-sm focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
            />
            <Sparkles className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-300" />
          </div>
          <div className="flex flex-wrap gap-2">
            {filteredTags.map((tag) => {
              const active = filters.tags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => {
                    const nextTags = active
                      ? filters.tags.filter((item) => item !== tag)
                      : [...filters.tags, tag];
                    onFiltersChange({ ...filters, tags: nextTags });
                  }}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                    active
                      ? "bg-zinc-900 text-white shadow-sm shadow-zinc-400/30 dark:bg-white dark:text-zinc-900 dark:shadow-none"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                  }`}
                >
                  #{tag.replace("-", " ")}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
