import mongoose from 'mongoose';
export default mongoose.model('Lead',new mongoose.Schema({
 name:{type:String,required:true,trim:true,maxlength:100}, email:{type:String,trim:true,lowercase:true,default:''},
 company:{type:String,trim:true,default:''}, source:{type:String,enum:['Website','Referral','Social Media','Advertisement','Other'],default:'Website'},
 status:{type:String,enum:['New','Contacted','Qualified','Converted','Unqualified'],default:'New'},
 value:{type:Number,min:0,default:0}, owner:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}
},{timestamps:true}));
