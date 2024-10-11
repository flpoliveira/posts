import { Button } from "./Button";

function Post() {
  return (
    <div className="py-8 px-4 flex flex-col gap-4 border-accent">
      <span className="text-primary text-md font-semibold">
        Sunday, April 3d 2024
      </span>
      <span className="text-foregroundSecondary text-md font-normal">
        Cooking delicious and nutritious meals on weeknights can often feel like
        a daunting task. However, with a few simple strategies, it’s possible to
        whip up satisfying dinners in no time. One key is to plan ahead and keep
        a stock of versatile ingredients like pasta, canned tomatoes, and frozen
        vegetables. These staples can be quickly transformed into a variety of
        dishes, from hearty pasta bakes to stir-fries.
      </span>
      <div className="flex flex-wrap gap-2">
        <Button
          type={"secondary"}
          onClick={() => null}
          label="Cooking"
          onClickIcon={() => null}
        />
        <Button
          type={"primary"}
          onClick={() => null}
          label="Latest Tech News"
          onClickIcon={() => null}
          isFavorite
        />
        <Button
          type={"primary"}
          onClick={() => null}
          label="Travel and Adventure"
          onClickIcon={() => null}
        />
      </div>
    </div>
  );
}

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
