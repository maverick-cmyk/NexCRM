import {Router} from 'express'; import bcrypt from 'bcryptjs'; import jwt from 'jsonwebtoken'; import User from '../models/User.js'; import {requireAuth} from '../middleware/auth.js';
const r=Router();
function issue(user){return jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:'1d'});}
r.post('/register',async(req,res,next)=>{try{
 const {name,email,password}=req.body;
 if(!name?.trim()||!email?.trim()||!password)return res.status(400).json({success:false,message:'Name, email and password are required.'});
 if(password.length<8)return res.status(400).json({success:false,message:'Password must be at least 8 characters.'});
 const normalized=email.trim().toLowerCase(); if(await User.findOne({email:normalized}))return res.status(409).json({success:false,message:'Email already registered.'});
 const u=await User.create({name:name.trim(),email:normalized,passwordHash:await bcrypt.hash(password,12)});
 res.status(201).json({success:true,token:issue(u),user:{id:u._id,name:u.name,email:u.email}});
}catch(e){next(e)}});
r.post('/login',async(req,res,next)=>{try{
 const email=req.body.email?.trim().toLowerCase(),u=email?await User.findOne({email}):null;
 if(!u||!req.body.password||!(await bcrypt.compare(req.body.password,u.passwordHash)))return res.status(401).json({success:false,message:'Invalid email or password.'});
 res.json({success:true,token:issue(u),user:{id:u._id,name:u.name,email:u.email}});
}catch(e){next(e)}});
r.get('/me',requireAuth,async(req,res,next)=>{try{const u=await User.findById(req.user.id).select('name email');if(!u)return res.status(401).json({success:false,message:'Account not found.'});res.json({success:true,user:{id:u._id,name:u.name,email:u.email}})}catch(e){next(e)}});
export default r;
