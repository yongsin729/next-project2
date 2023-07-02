import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props){

    let db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({_id:new ObjectId(props.params.id)})//findOne부분에서 가져오고 싶은 데이터 선택가능. 
    await db.collection('post').updateOne({_id:result},{$set:{title:'바보'}})
    return(
        <div className="p-20">
            <h4>수정페이지</h4>
        <form action="/api/post/new" method="POST">
          <input name="title" defaultValue={result.title}/>
          <input name="content" defaultValue={result.content}/>
          <button type="submit">전송</button>
        </form>
      </div>
    )
}