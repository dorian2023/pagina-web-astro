import { useProgressiveNumber } from '../hooks/useProgressiveNumber';
import { useEffect } from 'preact/hooks';

export const CountUp = (
    { initial, final, duration, decimal} :
    { initial:number, final:number, duration?:number, decimal?:number}
) => {
    const [ count, setCount] = useProgressiveNumber(initial, duration, decimal);

    useEffect(() =>{
        setCount(final)
    },[])

    return <span>{count}</span>
}