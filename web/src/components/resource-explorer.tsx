"use client";

import { resources, tags as allTags } from "@/data/resources";
import { useMemo, useState } from "react";
import { FilterBar, Filters } from "@/components/filter-bar";
import { ResourceCard } from "@/components/resource-card";

const defaultFilters: Filters = {
  query: "",
  tags: [],
  type: "all",
  access: "all",
  sort: "popularity",
  view: "grid",
};

const parseDateScore = (dateString: string) => {
  const parsed = Date.parse(dateString);
  return Number.isNaN(parsed) ? 0 : parsed;
};

const trendingTag =
  allTags
    .map((tag) => ({
      tag,
      score: resources.reduce(
        (acc, item) =>
          acc +
          (item.tags.includes(tag)
            ? item.popularity / (2024 - Number(item.launched) + 2)
            : 0),
        0,
      ),
    }))
    .sort((a, b) => b.score - a.score)[0]?.tag ?? allTags[0];

export function ResourceExplorer() {
  const [filters, setFilters] = useState<Filters>({
    ...defaultFilters,
    tags: [trendingTag],
  });

  const filteredResources = useMemo(() => {
    const { query, tags, type, access, sort } = filters;
    const normalizedQuery = query.trim().toLowerCase();

    const matches = resources
      .filter((resource) => {
        const matchesQuery =
          !normalizedQuery ||
          resource.name.toLowerCase().includes(normalizedQuery) ||
          resource.description.toLowerCase().includes(normalizedQuery) ||
          resource.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

        const matchesTags =
          tags.length === 0 || tags.every((tag) => resource.tags.includes(tag));

        const matchesType = type === "all" || resource.type === type;
        const matchesAccess = access === "all" || resource.access === access;

        return matchesQuery && matchesTags && matchesType && matchesAccess;
      })
      .sort((a, b) => {
        if (sort === "popularity") {
          return b.popularity - a.popularity;
        }
        if (sort === "name") {
          return a.name.localeCompare(b.name, "tr");
        }
        if (sort === "latest") {
          return parseDateScore(b.lastVerified) - parseDateScore(a.lastVerified);
        }
        return 0;
      });

    return matches;
  }, [filters]);

  return (
    <section id="platformlar" className="space-y-6">
      <FilterBar
        filters={filters}
        onFiltersChange={setFilters}
        highlightedTag={trendingTag}
        totalCount={resources.length}
        matchCount={filteredResources.length}
      />

      <div
        className={
          filters.view === "grid"
            ? "grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            : "flex flex-col gap-4"
        }
      >
        {filteredResources.length === 0 ? (
          <div className="col-span-full rounded-3xl border border-dashed border-zinc-300 bg-white/60 p-12 text-center text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-400">
            Aradığın vibe henüz listede değil. Aşağıdan paylaş, hemen ekleyelim.
          </div>
        ) : (
          filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))
        )}
      </div>
    </section>
  );
}
