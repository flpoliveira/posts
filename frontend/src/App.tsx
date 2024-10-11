import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Feed } from "./components/Feed";
import { Sidebar } from "./components/Sidebar";
import { useMemo, useState } from "react";
import { api } from "./system/api";

function App() {
  const queryClient = useQueryClient();
  const [categoryFilter, setCategoryFilter] = useState<"all" | "favorite">(
    "all"
  );

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await api.get("/categories");
      return response?.data as Array<{
        id: string;
        name: string;
        favorite: boolean;
      }>;
    },
  });

  const favoriteCategory = useMutation({
    mutationFn: async (el: { id: string; name: string; favorite: boolean }) => {
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

  return (
    <div className="w-full h-full flex min-h-[100vh] md:flex-row flex-col">
      <Sidebar
        categories={filteredCategories}
        categoryFilter={categoryFilter}
        onChangeCategoryFilter={setCategoryFilter}
        onCategoryClick={(id) => console.log(id)}
        onFavoriteClick={(el, vl) => {
          favoriteCategory.mutate({
            ...el,
            favorite: vl,
          });
        }}
      />
      <Feed />
    </div>
  );
}

export default App;
