import Item from "./Item";
import { HelpCentre, Business, Links, Support } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={HelpCentre} title="HelpCentre" />
      <Item Links={Business} title="Business" />
      <Item Links={Links} title="Links" />
      <Item Links={Support} title="Support" />
    </div>
  );
};

export default ItemsContainer;
