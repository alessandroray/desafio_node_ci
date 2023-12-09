function isEven(number) 
{
    if (number < 0) throw new Error("Number must be positive");
    if (typeof number !== "number") throw new Error("Number must be a number");
        return number %2 == 0
}

function primeNumber(number)
{
   if(number <= 1) return false;
   for (d = 2; d*d <= number; d++) {
     if (number%d == 0)   // d divide n
       return false;
    }
   return true;
}

module.exports = {isEven, primeNumber}
