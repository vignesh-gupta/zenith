import ForumList from "@/components/ForumList";

export default function Home() {
  return (
    <main className="lg:px-32 md:px-24 px-5">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl mt-8 font-extrabold text-black">
          Contribute Your <br />{" "}
          <span className="text-blue-600">Knowledge and Skills</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
            Get Started
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full">
            Explore Now
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-black max-w-5xl">
          What is zenith?
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-5xl">
        the point in the sky directly above an observer.
        </p>
        </div>
        <div>
          <ForumList />
        </div>
    </main>
  );
}
