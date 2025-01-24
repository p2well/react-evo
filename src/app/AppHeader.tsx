import AppNavigation from "./AppNavigation";
import AppColorModePicker from "./AppColorModePicker";

export default function AppHeader() {
  return (
    <header
      id="header"
      className="flex flex-row flex-wrap sm:flex-nowrap items-center py-2"
    >
      <div className="font-medium text-lg text-nowrap px-4 py-2">
        React Evolution
      </div>
      <AppNavigation />
      <AppColorModePicker />
    </header>
  );
}
