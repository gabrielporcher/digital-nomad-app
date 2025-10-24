import { ScrollView } from "react-native";
import { Box } from "../components/Box";
import { CategoryPill } from "../components/CategoryPill";
import { SearchInput } from "../components/SearchInput";
import { Category } from "../types";

type CityFilterProps = {
  categories: Category[];
  cityName: string;
  onChangeCityName: (name: string) => void;
  selectedCategoryId: string | null;
  onChangeSelectedCategoryId: (id: string | null) => void;
};

export function CityFilter({
  categories,
  cityName,
  onChangeCityName,
  selectedCategoryId,
  onChangeSelectedCategoryId,
}: CityFilterProps) {
  return (
    <Box>
      <Box paddingHorizontal="padding">
        <SearchInput
          value={cityName}
          onChangeText={onChangeCityName}
          placeholder="Qual o seu destino?"
        />
      </Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box mt="s16" gap="s8" flexDirection="row" paddingHorizontal="padding">
          {categories.map((category) => (
            <CategoryPill
              category={category}
              active={category.id === selectedCategoryId}
              onPress={() =>
                onChangeSelectedCategoryId(
                  category.id === selectedCategoryId ? null : category.id
                )
              }
              key={category.id}
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
