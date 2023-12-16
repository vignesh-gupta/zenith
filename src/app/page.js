import ForumList from "@/components/forum/ForumCardList";
import prisma from "@/lib/prisma";

export default async function Home() {
  return (
    <main className="px-5 lg:px-32 md:px-24">
      <div className="flex flex-col items-center text-center">
        <h1 className="mt-8 text-4xl font-extrabold text-black md:text-5xl lg:text-7xl">
          Contribute Your <br />{" "}
          <span className="text-blue-600">Knowledge and Skills</span>
        </h1>
        <div className="flex flex-col gap-3 mt-8 sm:flex-row">
          <button className="px-6 py-2 text-white bg-blue-600 rounded-full">
            Get Started
          </button>
          <button className="px-6 py-2 text-blue-600 border border-blue-600 rounded-full">
            Explore Now
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="max-w-5xl text-lg font-semibold text-black md:text-xl lg:text-2xl">
          What is zenith?
        </h1>
        <p className="max-w-5xl mt-4 text-lg text-gray-500">
          the point in the sky directly above an observer.
        </p>
      </div>
      <div>
        <ForumList />
      </div>
    </main>
  );
}
