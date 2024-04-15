import { Link, useOutletContext, useParams } from "react-router-dom";

export function Book(){
    const {id} = useParams();
    const obj = useOutletContext();
    return <>
        <h1>BOOK {id} {obj.hello}</h1>
    </>
}