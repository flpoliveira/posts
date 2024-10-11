import { FilterButton } from "./FilterButton";

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
        <FilterButton
          type={"secondary"}
          label="Cooking"
          onFilterClick={() => null}
          onFavoriteClick={() => null}
        />
        <FilterButton
          type={"primary"}
          label="Latest Tech News"
          onFilterClick={() => null}
          onFavoriteClick={() => null}
          isFavorited
        />
        <FilterButton
          type={"primary"}
          onFilterClick={() => null}
          onFavoriteClick={() => null}
          label="Travel and Adventure"
        />
      </div>
    </div>
  );
}

export { Post };
