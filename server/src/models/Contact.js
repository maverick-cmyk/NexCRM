import mongoose from 'mongoose';
export default mongoose.model('Contact',new mongoose.Schema({
 name:{type:String,required:true,trim:true,maxlength:100},email:{type:String,trim:true,lowercase:true,default:''},
 phone:{type:String,trim:true,default:''},company:{type:String,trim:true,default:''},jobTitle:{type:String,trim:true,default:''},
 owner:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}
},{timestamps:true}));
