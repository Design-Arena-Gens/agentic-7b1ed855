import { resources } from "@/data/resources";
import { Zap } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const latestVerificationISO = resources.reduce((latest, item) => {
    const itemDate = Date.parse(item.lastVerified);
    const latestDate = Date.parse(latest);
    return itemDate > latestDate ? item.lastVerified : latest;
  }, resources[0]?.lastVerified ?? new Date().toISOString());

  const formattedVerification = new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(latestVerificationISO));

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-zinc-200 bg-gradient-to-br from-zinc-100 via-white to-zinc-200 px-8 py-16 shadow-inner shadow-white/40 dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/10" />
      <div className="absolute -bottom-12 right-0 h-60 w-60 rounded-full bg-fuchsia-400/20 blur-3xl dark:bg-fuchsia-500/10" />

      <div className="relative z-10 mx-auto max-w-3xl text-center space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-zinc-900/40 dark:bg-white dark:text-zinc-900 dark:shadow-white/10">
          <Zap className="h-3.5 w-3.5" />
          vibe coding rehberi
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          Tüm vibe coding odaları, toplulukları ve ambient araçlar tek platformda.
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          En güncel canlı odak seansları, lofi akışları ve paylaşmalı üretim
          topluluklarına tek merkezden ulaş. Kurulan her platform{" "}
          <strong className="text-zinc-900 dark:text-zinc-100">
            {formattedVerification}
          </strong>{" "}
          tarihinde doğrulandı.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="#platformlar"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/30 transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:shadow-white/10 dark:hover:bg-zinc-200"
          >
            Platformlara göz at
          </Link>
          <Link
            href="#oner"
            className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Yeni platform öner
          </Link>
        </div>
      </div>
    </section>
  );
}
