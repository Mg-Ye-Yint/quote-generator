import { NextResponse } from 'next/server'
import {quotes} from "@/helper/quotes" 

export async function GET (req: Request, { params: { category } }: { params: { category: string } }) {
   const filteredData = quotes.filter((quote)=>quote.category === category)
   const randomIndex = Math.floor(Math.random() * filteredData.length)
   
    if(filteredData.length < 1){
      return NextResponse.json({error: "quote not found"}, {status: 404});
    } 
   return NextResponse.json(filteredData);
}




