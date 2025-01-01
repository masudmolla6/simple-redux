import { useAppDispatch, useAppSelector } from "./app/hooks"
import { decrement, increment } from "./feature/counter/CounterSlice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Simple Redux</h1>
      <div className="flex gap-10 justify-center items-center h-screen">
        <button className="btn btn-accent" onClick={()=>dispatch(increment())}>Increment</button>
        <h1 className="text-2xl text-orange-500">{count}</h1>
        <button className="btn btn-primary" onClick={()=>dispatch(decrement())}>Decrement</button>
      </div>
    </>
  )
}

export default App
