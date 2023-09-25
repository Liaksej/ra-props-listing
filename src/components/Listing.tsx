import { JsonDataStructure } from "@/app/page";
import { Item } from "@/components/Item";

interface ListingProps {
  items: JsonDataStructure[];
}

export const Listing = ({ items = [] }: ListingProps) => {
  if (items.length === 0) return null;

  return (
    <div className="item-list">
      {items.map((item) => {
        return <Item key={item.listing_id} item={item} />;
      })}
    </div>
  );
};
