import { HomeProvider } from "./context";
import { Main } from "./features/Main/loadabled";

function Home() {
  return (
    <HomeProvider>
      <Main />
    </HomeProvider>
  );
}

export default Home;
