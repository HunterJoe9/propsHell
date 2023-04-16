import { useState } from "react";
import Child from "./components/Child";
import ChildFriend from "./components/ChildFriend";
import { createContext } from "react";

export const AppContext = createContext();

function App() {
  const [gift, setGift] = useState(1000);
  return (
    <AppContext.Provider value={{ gift, setGift }}>
    <div className=" bg-red-200">
      <div>App : {gift}</div>
      <Child />
      <ChildFriend gift={gift}/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
