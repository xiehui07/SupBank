(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24220701"],{"34c3":function(s,e,a){"use strict";a.r(e);var r=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"card",attrs:{id:"signup"}},[a("p",{staticClass:"title"},[s._v("Sign Up")]),a("el-form",{ref:"signup_form",attrs:{"label-position":s.labelPosition,rules:s.rules,"label-width":"80px",model:s.signup_form}},[a("el-form-item",{attrs:{label:"Username",prop:"username"}},[a("el-input",{model:{value:s.signup_form.username,callback:function(e){s.$set(s.signup_form,"username",e)},expression:"signup_form.username"}})],1),a("el-form-item",{attrs:{label:"Email Address",prop:"emailaddress"}},[a("el-input",{model:{value:s.signup_form.emailaddress,callback:function(e){s.$set(s.signup_form,"emailaddress",e)},expression:"signup_form.emailaddress"}})],1),a("el-form-item",{attrs:{label:"Password",prop:"password"}},[a("el-input",{attrs:{"show-password":""},model:{value:s.signup_form.password,callback:function(e){s.$set(s.signup_form,"password",e)},expression:"signup_form.password"}})],1),a("el-form-item",{attrs:{label:"Verification Code",prop:"vcode"}},[a("el-input",{model:{value:s.signup_form.vcode,callback:function(e){s.$set(s.signup_form,"vcode",e)},expression:"signup_form.vcode"}})],1),a("el-form-item",[a("el-button",{staticClass:"sendcode-btn",attrs:{type:"primary"},on:{click:s.send_code}},[s._v("Send Code")]),a("el-button",{staticClass:"signup-btn",attrs:{type:"primary"},on:{click:s.sign_up}},[s._v("Sign Up")])],1)],1)],1)},t=[],i={name:"signup",data:function(){return{labelPosition:"top",signup_form:{username:"",emailaddress:"",password:"",vcode:""},rules:{username:[{required:!0,message:"不能为空"},{min:3,max:20,message:"长度在 3 到 20 个字符"}],emailaddress:[{required:!0,message:"不能为空"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],password:[{required:!0,message:"不能为空"},{min:6,max:20,message:"长度在 6 到 20 个字符"}],vcode:[{required:!0,message:"不能为空"},{min:6,max:6,message:"长度为 6 个字符"}]}}},methods:{send_code:function(){var s=this;this.$axios({method:"post",url:"/user/sendCode",data:{email:this.signup_form.emailaddress}}).then(function(e){"success"===e.data.status.Ack?s.$message({message:"验证码发送成功",type:"success"}):s.$message.error(e.data.status.ErrorMessage)}).catch(function(){s.$message.error("验证码发送失败")})},sign_up:function(){var s=this;this.$axios({method:"post",url:"/user/register",data:{email:this.signup_form.emailaddress,username:this.signup_form.username,password:this.signup_form.password,verificationCode:this.signup_form.vcode}}).then(function(e){"success"===e.data.status.Ack?(s.$message({message:"注册成功",type:"success"}),s.$router.push({path:"/signin"})):s.$message.error(e.data.status.ErrorMessage)}).catch(function(){s.$message.error("请求发送失败")})}}},o=i,n=(a("5cbc"),a("2877")),u=Object(n["a"])(o,r,t,!1,null,"6faf1232",null);e["default"]=u.exports},"5cbc":function(s,e,a){"use strict";var r=a("de90"),t=a.n(r);t.a},de90:function(s,e,a){}}]);
//# sourceMappingURL=chunk-24220701.afb88908.js.map