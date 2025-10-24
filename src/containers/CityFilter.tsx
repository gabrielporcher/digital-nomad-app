import { useState } from "react";
import { ScrollView } from "react-native";
import { Box } from "../components/Box";
import { CategoryPill } from "../components/CategoryPill";
import { SearchInput } from "../components/SearchInput";
import { Category } from "../types";

type CityFilterProps = {
  categories: Category[];
};

export function CityFilter({ categories }: CityFilterProps) {
  const [name, setName] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  return (
    <Box>
      <SearchInput
        value={name}
        onChangeText={setName}
        placeholder="Qual o seu destino?"
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box mt="s16" gap="s8" flexDirection="row">
          {categories.map((category) => (
            <CategoryPill
              category={category}
              active={category.id === selectedCategoryId}
              key={category.id}
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
