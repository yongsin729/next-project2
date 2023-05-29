import {connectDB} from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Detail(props){
    const client=await connectDB;
  const db=client.db("forum")
  let result=await db.collection('post').findOne({ _id:new ObjectId(props.params.id)})
  console.log(props)
    return(
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}
//props는 파일명에[] 자리에 입력한 값을 가져옴