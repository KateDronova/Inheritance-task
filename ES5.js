new StringBuilder(str)   // constructor takes starting string, if not passed starts with '';
plus(...str)             // takes infinite number of strings and concat with stored string;
minus(n)                 // cut last n chars from stored string;
multiply(int)            // repeat stored strings n times;
divide(n)                // leaves first k chars of stored string, where k = Math.floor(str.length / n);
remove(str)              // remove taken string str from stored; Prohibited to use String.prototype.replace(); 
sub(from, n)             // leaves substring starting from and with length n;
get()                    // returns stored value;

// EXAMPLE:
let strBuilder = new StringBuilder('Hello'); // 'Hello';
strBuilder
  .plus(' all', '!')                         // 'Hello all!'
  .minus(4)                                  // 'Hello '
  .multiply(3)                               // 'Hello Hello Hello '
  .divide(4)                                 // 'Hell';
  .remove('l')                               // 'He';
  .sub(1,1)                                  // 'e';
  .get();                                    // -> 'e';