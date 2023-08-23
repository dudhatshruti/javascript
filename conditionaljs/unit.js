let unit = 200,amount;
if(unit <= 100)
{
    amount= 50+(unit*0.6);
}
else if(unit >101 && unit >=300)
{         
    amount=110+((unit-100)*0.8)
}
else
{
    amount=50+60+160+((unit-300)*0.9);
    if(amount >=300)
    {
        amount = amount*1.15;
    }
}
console.log(amount);
