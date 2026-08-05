import Channel from "./components/channel";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans bg-linear-70 from-zinc-300 to-white dark:bg-black">
      <main className="grid grid-cols-5 grid-rows-3 gap-10 w-full max-w-[75%] h-[90%] flex-col items-center justify-between p-8 sm:items-start border-2">
        <Channel name="Channel 1" image_source="/../../cat.jpg" />
        <Channel name="Channel 2" image_source="/../../cat.jpg" />
        <Channel name="Channel 3" image_source="/../../cat.jpg" />
        <Channel name="Channel 3" image_source="/../../cat.jpg" />
        <Channel name="Channel 3" image_source="/../../cat.jpg" />
        <Channel name="Channel 3" image_source="/../../cat.jpg" />
      </main>
    </div>
  );
}
