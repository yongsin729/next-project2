export default async function Handler(요청,응답){
    
        응답.status(200).json(요청.body) 
    
  }