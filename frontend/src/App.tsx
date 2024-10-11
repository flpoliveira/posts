import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Feed } from "./components/Feed";
import { Sidebar } from "./components/Sidebar";
import { useMemo, useState } from "react";
import { api } from "./system/api";
import { CategoryType, PostType } from "./App.interface";

function App() {
  const queryClient = useQueryClient();
  const [categoryFilter, setCategoryFilter] = useState<"all" | "favorite">(
    "all"
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    () => {
      const selectedCategory = localStorage.getItem("selectedCategory");
      return selectedCategory || null;
    }
  );

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await api.get("/categories");
      return response?.data as Array<CategoryType>;
    },
  });

  const favoriteCategory = useMutation({
    mutationFn: async (el: CategoryType) => {
      return await api.put(`/categories/${el.id}`, el);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });

  const filteredCategories = useMemo(() => {
    return categoryFilter === "all"
      ? categories
      : categories?.filter((category) => category.favorite);
  }, [categories, categoryFilter]);

  const { data: posts } = useQuery({
    queryKey: ["posts", selectedCategory],
    queryFn: async () => {
      const response = await api.get(`/categories/${selectedCategory}/posts`);
      return response?.data as Array<PostType>;
    },
    enabled: !!selectedCategory,
  });

  function handleCategoryClick(id: string) {
    setSelectedCategory(id);
    localStorage.setItem("selectedCategory", id);
  }

  return (
    <div className="w-screen h-full flex min-h-screen md:flex-row flex-col">
      <Sidebar
        categories={filteredCategories}
        categoryFilter={categoryFilter}
        onChangeCategoryFilter={setCategoryFilter}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
        onFavoriteClick={(el, vl) => {
          favoriteCategory.mutate({
            ...el,
            favorite: vl,
          });
        }}
      />
      <Feed
        categories={categories}
        posts={posts}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
        onFavoriteClick={(el, vl) => {
          favoriteCategory.mutate({
            ...el,
            favorite: vl,
          });
        }}
      />
    </div>
  );
}

export default App;
