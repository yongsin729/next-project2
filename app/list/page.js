import { connectDB } from "@/util/database.js"
import Link from "next/link";
import DetailLink  from "./DetailLink";
export default async function List() {
  const db = (await connectDB).db('forum')
  let result = await db.collection('post').find().toArray()
  return (
    <div className="list-bg">
      {
        result.map((a, i)=>
          <div className="list-item">
            <Link href={'/detail/' + result[i]._id}><h4>{a.title}</h4></Link>
            <DetailLink></DetailLink>
            <Link href={'/edit/'+ result[i]._id}>✏️</Link>
            <p>1월 1일</p>
          </div>
        )
      }
    </div>
  )
}

//app안에  api 폴더를 만들든 ,pages를 만들든, 선택 . 