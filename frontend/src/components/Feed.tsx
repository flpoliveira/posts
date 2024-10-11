import { useMemo } from "react";
import { CategoryType, PostType } from "../App.interface";
import { Post } from "./Post";

function Feed({
  selectedCategory,
  onCategoryClick,
  onFavoriteClick,
  posts = [],
  categories = [],
}: {
  selectedCategory?: string | null;
  onCategoryClick: (id: string) => void;
  onFavoriteClick: (el: CategoryType, newValue: boolean) => void;
  posts?: Array<PostType>;
  categories?: Array<CategoryType>;
}) {
  const currentCategory = useMemo(
    () => categories.find((category) => category.id === selectedCategory),
    [categories, selectedCategory]
  );

  return (
    <div className="md:py-16 py-8 px-4 md:px-6 h-full w-full">
      <div className="w-full h-full flex flex-col rounded-sm border border-accent [&>div:not(:last-child)]:border-b">
        <div className="border-accent w-full py-5 px-9">
          <span className="text-md font-semibold text-foregroundSecondary">
            {currentCategory
              ? `Found ${posts.length} posts of ${currentCategory?.name}`
              : "No posts found"}
          </span>
        </div>
        <div className="px-4 flex flex-col gap-0 [&>div:not(:last-child)]:border-b">
          {posts.length > 0 ? (
            posts.map((post) => {
              const postCategories = categories.filter((category) =>
                post.categories.includes(category.id)
              );
              return (
                <Post
                  selectedCategory={selectedCategory}
                  key={`${post.id}-post`}
                  description={post.description}
                  date={post.date}
                  categories={postCategories}
                  onCategoryClick={onCategoryClick}
                  onFavoriteClick={onFavoriteClick}
                />
              );
            })
          ) : (
            <div className="min-h-96 flex items-center justify-center">
              <span className="text-md text-foregroundSecondary">
                Select a category to view its posts.
                {currentCategory &&
                  "No posts here? Try exploring another category!"}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { Feed };
