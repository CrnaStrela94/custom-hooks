import { useCounter } from '../hooks/useCounter'

export const UseCounter = () => {
    const { count, increment, decrement, reset, maxValue, minValue, isEven, plusFive } = useCounter()


    return (
        <>
            <h1>count</h1>
            <p>🍆{count}🍆</p>
            <p>is the count even? {isEven ? 'Yes' : 'No'}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
            <button onClick={maxValue}>MaxValue</button>
            <button onClick={minValue}>MinValue</button>
            <button onClick={plusFive}>+5</button>

        </>
    )

}
