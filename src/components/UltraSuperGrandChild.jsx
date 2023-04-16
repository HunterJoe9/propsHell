import { AppContext } from "../App";
import { useContext } from "react";

const UltraSuperGrandChild = () => {
    const { gift, setGift } = useContext(AppContext);

    const onClickAdd = () => {
        setGift(gift + 1);
      };
    return (
      <div>
        <div className="w-40 h-40 bg-purple-300">UltraSuperGrandChild : {gift}</div>
        <button onClick={onClickAdd}>증가</button>
      </div>
    )
};

export default UltraSuperGrandChild;