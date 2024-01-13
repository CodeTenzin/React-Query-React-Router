import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TaskContext from "./tasks/tasksContext";
import useCounterStore from "./counter/store";

const NavBar = () => {
  // const { counter } = useCounterStore();
  // using arrow func to select a aprticular property.
  // instead of an object {counter} we get the actual
  // counter property, "counter".
  const counter = useCounterStore((s) => s.counter);
  // now this component is only dependent on this property,
  //and rerender only when it changes and not the reset property.

  // nav bar will rerender every time any value in the
  // counter store changes.Like increment and reset.
  console.log("Render NavBar");

  // Eg: want to rerender nav bar everytime only the counter
  // property changes.
  // changed above:const { counter } = useCounterStore(s => s.);

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};
export default NavBar;
