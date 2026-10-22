import mongoose from 'mongoose';
export default mongoose.model('Deal',new mongoose.Schema({
 title:{type:String,required:true,trim:true,maxlength:120},company:{type:String,trim:true,default:''},
 value:{type:Number,min:0,default:0},stage:{type:String,enum:['Qualification','Proposal','Negotiation','Won','Lost'],default:'Qualification'},
 closeDate:{type:Date},owner:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}
},{timestamps:true}));
