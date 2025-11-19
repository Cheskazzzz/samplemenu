import Image from "next/image";

export default function DocsPage() {
  return (
    <main className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-start pt-20">
      <div className="container mx-auto px-6 py-12 flex flex-col items-center gap-8">
        <Image src="/season.jpg" alt="Season" width={640} height={480} className="rounded-xl shadow-lg" />
        <h1 className="text-3xl font-bold">Chiikawa</h1>
        <p className="max-w-2xl text-center text-muted-foreground">
          Chiikawa finds a rabbit on top of some pudding, enjoys a huge pancake, reads a book about Egypt, encounters a real live sphinx, and more.
        </p>
      </div>
    </main>
  );
}
