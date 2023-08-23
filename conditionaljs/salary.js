let sal=25000,hra,da
if(sal<=5000)
{
    hra=(sal*8)/100
    da=(sal*20)/100
}
else if(sal>5000 && sal<=10000)
{
    hra=(sal*12)/100
    da=(sal*30)/100
}
else if(sal>10000 && sal<=15000)
{
    hra=(sal*15)/100
    da=(sal*40)/100
}
else
{
    hra=(sal*20)/100
    da=(sal*50)/100
}
console.log("gross sal=",sal+hra+da)