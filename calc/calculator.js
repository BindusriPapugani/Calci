let inp = document.getElementById("inp")
function func(val)
{
    console.log(val);
    inp.value += val    
}
function res()
{
    inp.value = eval(inp.value)
}
function clr()
{
    inp.value = ""
}