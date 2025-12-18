import { Resource } from "@/data/resources";
import Link from "next/link";
import { ArrowUpRight, Globe, Music4, Users } from "lucide-react";

const gradients = [
  "from-sky-500 via-cyan-500 to-emerald-400",
  "from-orange-500 via-pink-500 to-fuchsia-500",
  "from-lime-500 via-teal-400 to-sky-500",
  "from-purple-500 via-indigo-500 to-sky-500",
  "from-yellow-500 via-orange-500 to-red-500",
];

const tagColors: Record<string, string> = {
  pomodoro: "bg-rose-100 text-rose-700",
  accountability: "bg-slate-100 text-slate-700",
  community: "bg-blue-100 text-blue-700",
  ambient: "bg-emerald-100 text-emerald-700",
  "deep-work": "bg-indigo-100 text-indigo-700",
  hosts: "bg-lime-100 text-lime-700",
  professional: "bg-stone-100 text-stone-700",
  coworking: "bg-violet-100 text-violet-700",
  global: "bg-sky-100 text-sky-700",
  lofi: "bg-fuchsia-100 text-fuchsia-700",
  youtube: "bg-red-100 text-red-700",
  "24-7": "bg-amber-100 text-amber-700",
  interactive: "bg-cyan-100 text-cyan-700",
  frontend: "bg-emerald-100 text-emerald-800",
  "pair-programming": "bg-purple-100 text-purple-700",
  "night-owls": "bg-slate-100 text-slate-700",
  events: "bg-teal-100 text-teal-700",
  cohort: "bg-amber-100 text-amber-700",
  startup: "bg-orange-100 text-orange-700",
  ship: "bg-green-100 text-green-800",
  retro: "bg-pink-100 text-pink-700",
  "voice-chat": "bg-blue-100 text-blue-700",
  analytics: "bg-sky-100 text-sky-700",
  aesthetic: "bg-rose-100 text-rose-700",
  soundscapes: "bg-indigo-100 text-indigo-700",
  extension: "bg-zinc-100 text-zinc-700",
  browser: "bg-amber-100 text-amber-700",
  radio: "bg-stone-100 text-stone-700",
  "open-source": "bg-emerald-100 text-emerald-800",
  workshops: "bg-purple-100 text-purple-700",
  europe: "bg-blue-100 text-blue-700",
  zoom: "bg-slate-100 text-slate-700",
  immersive: "bg-lime-100 text-lime-700",
  "3d": "bg-cyan-100 text-cyan-700",
  "virtual-office": "bg-fuchsia-100 text-fuchsia-700",
  customizable: "bg-amber-100 text-amber-700",
  "creative-coding": "bg-emerald-100 text-emerald-700",
  live: "bg-purple-100 text-purple-700",
  visuals: "bg-orange-100 text-orange-700",
  spaces: "bg-indigo-100 text-indigo-700",
  "indie-hackers": "bg-teal-100 text-teal-700",
  neon: "bg-pink-100 text-pink-700",
  loops: "bg-blue-100 text-blue-700",
  asmr: "bg-rose-100 text-rose-700",
  keyboard: "bg-stone-100 text-stone-700",
};

const typeLabels: Record<Resource["type"], string> = {
  "focus-room": "Odak Odası",
  "live-stream": "Canlı Yayın",
  community: "Topluluk",
  playlist: "Playlist / Radyo",
  toolkit: "Araç",
  bootcamp: "Program",
  workspace: "Sanal Ofis",
};

function getBadgeColor(tag: string) {
  return tagColors[tag] ?? "bg-gray-100 text-gray-700";
}

function hashGradient(id: string) {
  const hash = Array.from(id).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return gradients[hash % gradients.length];
}

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm shadow-zinc-200/40 backdrop-blur transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-300/40 dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-none dark:hover:border-zinc-700">
      <div className="flex items-start gap-4">
        <div
          className={`relative flex h-16 w-16 flex-none items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${hashGradient(resource.id)}`}
        >
          <span className="text-lg font-semibold uppercase text-white">
            {resource.name
              .split(" ")
              .slice(0, 2)
              .map((chunk) => chunk[0])
              .join("")}
          </span>
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              {typeLabels[resource.type]}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                resource.access === "free"
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200"
                  : resource.access === "freemium"
                    ? "bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200"
                    : "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200"
              }`}
            >
              {resource.access === "free"
                ? "Ücretsiz"
                : resource.access === "freemium"
                  ? "Freemium"
                  : "Ücretli"}
            </span>
            <span className="rounded-full bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800/60 dark:text-zinc-400">
              Güncellendi {resource.lastVerified}
            </span>
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {resource.name}
          </h3>
          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {resource.description}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        <div className="flex flex-wrap gap-2">
          {resource.tags.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${getBadgeColor(tag)}`}
            >
              {tag.replace("-", " ")}
            </span>
          ))}
        </div>

        <div className="grid gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-zinc-400" />
            <span>
              Topluluk dili:{" "}
              <strong className="text-zinc-700 dark:text-zinc-200">
                {resource.languages.join(", ")}
              </strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-zinc-400" />
            <span>
              Bölge:{" "}
              <strong className="text-zinc-700 dark:text-zinc-200">
                {resource.region ?? "Global"}
              </strong>
            </span>
          </div>
          {resource.type === "playlist" || resource.tags.includes("lofi") ? (
            <div className="flex items-center gap-2">
              <Music4 className="h-4 w-4 text-zinc-400" />
              <span>
                Ambiyans:{" "}
                <strong className="text-zinc-700 dark:text-zinc-200">
                  {resource.tags
                    .filter((tag) =>
                      ["lofi", "ambient", "soundscapes", "radio", "asmr"].includes(tag),
                    )
                    .join(", ") || "Oda atmosferi"}
                </strong>
              </span>
            </div>
          ) : null}
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Öne çıkanlar
          </h4>
          <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            {resource.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-zinc-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          Popülerlik Skoru{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-200">
            {resource.popularity}/100
          </span>
        </div>
        <Link
          href={resource.url}
          target="_blank"
          className="inline-flex items-center gap-1 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          Platformu Aç
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
