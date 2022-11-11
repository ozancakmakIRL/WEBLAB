'use strict';

const fs = require('fs');

module.exports = {
    isPrime: function isPrime(n)
    {
        // Corner case
        if (n <= 1)
            return false;
      
        // Check from 2 to n-1
        for (let i = 2; i < n; i++)
            if (n % i == 0)
                return false;
      
        return true;
    },
    logPrimes: function logPrimes(topNumber) {
        var num = "";
        for (let index = 1; index < topNumber; index++) {
            if(this.isPrime(index)){
                num = index + " "
                fs.appendFile('asal.txt',num, function(err){
                    if(err) throw err;
                    console.log('Saved!');
                });
            }
            
        }
    }
}
 
