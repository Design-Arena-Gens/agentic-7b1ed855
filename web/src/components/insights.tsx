import { resources } from "@/data/resources";
import { TrendingUp, UsersRound, Waves } from "lucide-react";

const sections = [
  {
    icon: TrendingUp,
    label: "Trend Odakları",
    value: `${resources.filter((item) => item.popularity >= 85).length}`,
    description: "Popülerlik skoru 85+ olan platformlar",
  },
  {
    icon: UsersRound,
    label: "Topluluk Gücü",
    value: `${resources
      .filter((item) => ["community", "focus-room", "workspace"].includes(item.type))
      .length}`,
    description: "Canlı topluluk deneyimi sunan alanlar",
  },
  {
    icon: Waves,
    label: "Ambiyans Kaynakları",
    value: `${resources.filter((item) => ["playlist", "toolkit"].includes(item.type)).length}`,
    description: "Lofi, ambient ve ses atmosferi sağlayan araçlar",
  },
];

export function Insights() {
  return (
    <section className="grid gap-4 md:grid-cols-3" aria-label="Platform istatistikleri">
      {sections.map(({ icon: Icon, label, value, description }) => (
        <div
          key={label}
          className="rounded-[28px] border border-zinc-200 bg-white/60 px-6 py-6 shadow-sm shadow-zinc-200/40 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-zinc-300/40 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white shadow-sm shadow-zinc-900/30 dark:bg-white dark:text-zinc-900">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                {label}
              </p>
              <p className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                {value}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {description}
          </p>
        </div>
      ))}
    </section>
  );
}
