import { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { useAppTheme } from "../theme/useAppTheme";
import { Box, BoxProps } from "./Box";
import { IconButton } from "./IconButton";

type SearchInputProps = {} & Pick<
  TextInputProps,
  "value" | "onChangeText" | "placeholder"
>;

export function SearchInput({
  value,
  onChangeText,
  placeholder,
}: SearchInputProps) {
  const { colors, textVariants } = useAppTheme();
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Box
      {...boxStyle}
      style={{
        borderColor: isFocused ? colors.primary : colors.gray1,
        //borderWidth: 2,
      }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          ...textVariants.text16,
          color: colors.text,
          height: "100%",
          width: "100%",
          flexShrink: 1,
        }}
      />
      <IconButton iconName="Search-outline" onPress={() => {}} />
    </Box>
  );
}

const boxStyle: BoxProps = {
  flexDirection: "row",
  padding: "s8",
  justifyContent: "space-between",
  backgroundColor: "gray1",
  height: 70,
  alignItems: "center",
  borderRadius: "rounded",
  borderWidth: 2,
  paddingLeft: "s16",
};
