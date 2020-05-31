flag=0
function clickz(val)
{  
    
    if(flag==1)
    {
        clearz()
    }
    flag=0
    console.log(val);
    document.getElementById("screen").value += val;
    
  

}
function clearz()
{
    document.getElementById('screen').value="";
}
function clickeq()
{   flag = 0
    var text= document.getElementById("screen").value
    var result= eval(text)
    document.getElementById("screen").value=result
    flag=1
    
}
