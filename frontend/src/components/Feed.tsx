import { Post } from "./Post";

function Feed() {
  return (
    <div className="md:py-16 py-8 px-4 md:px-6 h-full w-full">
      <div className="w-full h-full flex flex-col rounded-sm border border-accent">
        <div className="border-b border-accent w-full py-5 px-9">
          <span className="text-md font-semibold text-foregroundSecondary">
            Found 6 posts of Cooking
          </span>
        </div>
        <div className="px-4 flex flex-col gap-0 [&>div:not(:last-child)]:border-b">
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}

export { Feed };
