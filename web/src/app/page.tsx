import { Hero } from "@/components/hero";
import { Insights } from "@/components/insights";
import { ResourceExplorer } from "@/components/resource-explorer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 pb-24 pt-12 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-10">
        <Hero />
        <Insights />
        <ResourceExplorer />
        <SuggestionBox />
      </div>
    </main>
  );
}

function SuggestionBox() {
  return (
    <section
      id="oner"
      className="rounded-[36px] border border-dashed border-zinc-300 bg-white/70 p-10 shadow-sm shadow-zinc-200/40 dark:border-zinc-700 dark:bg-zinc-900/60 dark:shadow-none"
    >
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Listede eksik mi var?
        </h2>
        <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-300">
          Vibe coding yaptığın odaları, Twitch kanallarını ya da ambient web
          uygulamalarını paylaşırsan 24 saat içinde doğrulayıp ekliyoruz.
          Sadece aşağıdaki formu doldurman yeterli.
        </p>
        <form
          className="grid gap-4 text-left"
          action="https://airtable.com/shrgeneric"
          method="get"
          target="_blank"
        >
          <div className="grid gap-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              Platform Linki
            </label>
            <input
              name="platform"
              required
              placeholder="https://"
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 shadow-sm focus:border-zinc-400 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              Neden vibe?
            </label>
            <textarea
              name="note"
              rows={3}
              placeholder="Öne çıkan vibe özelliklerinden bahset..."
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 shadow-sm focus:border-zinc-400 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/30 transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:shadow-white/10 dark:hover:bg-zinc-200"
          >
            Formu aç
          </button>
        </form>
      </div>
    </section>
  );
}
