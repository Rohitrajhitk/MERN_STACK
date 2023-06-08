import User from "../model/user.js";
import mongoose from "mongoose";
import Conversation from "../model/Conversation.js";

export const newConversation  = async (request , response) =>{
     try{
        const {senderId , receiverId} = request.body;
       const exist =  await Conversation.findOne({ members : {$all : [receiverId , senderId]}});
       if(exist){
          response.status(200).json('conersation already exists');
          return;
       }
       const newConversation = new Conversation({
            members : [senderId , receiverId]
       })
       await newConversation.save();
       return response.status(200).json('conversation saved successfully');
     }
     catch(error){
          return response.status(500).json(error.message);
     }
}


export const  getConversation = async (request , response) => {
    try{
        const {senderId , receiverId} = request.body;
      let conversation = await Conversation.findOne({members : {$all : [receiverId , senderId]}});
      return response.status(200).json(conversation);
    }catch(error) {
          return response.status(500).json(error.message);
    }   
}