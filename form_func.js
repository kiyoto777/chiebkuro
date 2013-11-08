// SelectBox Function
function Sbox_func(Form_names,names){
 var Sbox_obj   = eval('document.'+Form_names+'.'+names);
 var Sbox_index = Sbox_obj.selectedIndex;
 var Sbox_value = Sbox_obj[Sbox_index].value;
 var Sbox_text  = Sbox_obj[Sbox_index].text;
 return {Sbox_value:Sbox_value,Sbox_text:Sbox_text};
}
// Radio bottun Function
function Radio_func(Form_names,names){
 var Radio_obj   = eval('document.'+Form_names+'.'+names);
 var Radio_value;
 for(i=0;i<Radio_obj.length;i++){
  if(Radio_obj[i].checked){
   Radio_value   = Radio_obj[i].value;
   break;
  }
 }
return {Radio_value:Radio_value};
}
// Textbox Function
function Tbox_func(Form_names,names){
 var Tbox_obj    = eval('document.'+Form_names+'.'+names);
 var Tbox_value  = Tbox_obj.value;
return {Tbox_value:Tbox_value};
}
// Checkbox Function
function Cbox_func(Form_names,names){
 var Cbox_obj   = eval('document.'+Form_names+'.elements["'+names+'"]');
 var Cbox_value, Cbox_check;
  if(Cbox_obj.checked){
   Cbox_check   = "1";
  }else{
   Cbox_check   = "0";
  }
  Cbox_value = Cbox_obj.value;
return {Cbox_check:Cbox_check,Cbox_value:Cbox_value};
}

