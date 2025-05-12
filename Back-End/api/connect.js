// JavaScript assincrono
// await async
// Promise Fullfilled
import { MongoClient } from "mongodb"



const URI = "mongodb+srv://PHzinnUser:SenhaUsadaParaAulaDaHash100525@cluster0.vw2wu0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("PHtify")
// const songCollection = await db.collection("songs").find({}).toArray()

// console.log(songCollection)