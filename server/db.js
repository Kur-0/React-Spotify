import mongoose from "mongoose";

export default async function conectDB(){
    mongoose.connect("mongodb+srv://chloesonvesso:Cms2407$@cluster0.pfyny.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0")


    return mongoose.connection
}