import { ThemedText } from "@/src/cp/ThemedText";
import { ThemedView } from "@/src/cp/ThemedView";
import { TProductAttr } from "@/src/model/product";
import { useContextProduct } from "@/src/state/product/ctx";
import { FlatList, View } from "react-native";

type ProductListProps = {
  product: TProductAttr;
};
export function ProductListScreen() {
  const { state } = useContextProduct();
  const separator = () => {
    //add a seperator component for each item with green color:
    return <Divider width={1} color="#848483" />;
  };
  const handleEmpty = () => {
    return <ThemedText type="defaultSemiBold">No data present!</ThemedText>;
  };
  const ItemRenderer = ({ product }: ProductListProps) => {
    return (
      <ThemedView key={product.id}>
        <ThemedText type="defaultSemiBold">{product.name}</ThemedText>
        <ThemedText type="default">{`Preço: R$ ${product.price} Reais`}</ThemedText>
      </ThemedView>
    );
  };
  return (
    <ThemedView>
      <FlatList
        data={state.products}
        renderItem={({ item }) => <ItemRenderer product={item} />}
        ItemSeparatorComponent={separator}
        ListEmptyComponent={handleEmpty}
        keyExtractor={(item) => item.id}
      />
    </ThemedView>
  );
}
interface DividerProps {
  width?: number;
  orientation?: "horizontal" | "vertical";
  color?: string;
  dividerStyle?: any;
}
const Divider: React.FC<DividerProps> = ({
  width = 1,
  orientation = "horizontal",
  color = "#DFE4EA",
  dividerStyle,
}) => {
  const dividerStyles = [
    { width: orientation === "horizontal" ? "100%" : width },
    { height: orientation === "vertical" ? "100%" : width },
    { backgroundColor: color },
    dividerStyle,
  ];
  return <View style={dividerStyles} />;
};
