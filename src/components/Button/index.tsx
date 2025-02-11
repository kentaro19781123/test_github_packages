import "../../index.css"
import { Func1 } from "./Func1"
import { Func2 } from "./Func2"

export const Button: React.FC = () => {
  const Args = ["a", "b", "c"]
  console.log(Args)
  return (
    <>
      <button
        type="button"
        className="bg-white text-3xl text-packages-color xl:text-xl"
      >
        ButtonButton
      </button>
      <Func2 />
      <Func1 />
      {Args.map((x) => (
        <p key={x}>{x}</p>
      ))}
    </>
  )
}
