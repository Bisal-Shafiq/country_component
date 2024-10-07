import Link from "next/link";

export default function  CountryName( {parans} : {parans:{country_name:string}}){
    return(
        <h1>Country Name : {parans.country_name}</h1>
    )
}