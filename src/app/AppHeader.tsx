import AppTitle from "./AppTitle";
import AppNavigation from "./AppNavigation";
import AppColorModePicker from "./AppColorModePicker";

export default function AppHeader() {
  return (
    <header
      id="header"
      className="flex flex-row flex-wrap sm:flex-nowrap items-center py-2"
    >
      <AppTitle title="React Evolution" />
      <AppNavigation />
      <AppColorModePicker />
    </header>
  );
}
