'use client'
import { connectDB } from "@/util/database.js"

export default async function List(요청,응답){
    let db = (await connectDB).db('forum')
    let result = await db.collection('post').find().toArray()
    let date=new Date();
    let year= date.getFullYear();
    let month=date.getMonth();
    let day=date.getDate();
    let yo=date.getDay();
    
    응답.status(200).json(`현재 날짜는 : ${year}년 ${month}월 ${day}일 ${yo}입니다.`)  
          
    
}