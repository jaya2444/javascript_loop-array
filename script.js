// const prompt = require("prompt-sync")();
// let n = parseInt(prompt("Enter the number"));
// let sum = 0;
// ;
// for(let i = 1; i<= n;i++ ){
//     sum = sum + i;
//     console.log("sum =",sum);

// }




// question-24-Imagine you're on a fun journey of exploring numbers! You're interested
//  in finding out all the even numbers up to a certain value. Even numbers are those that 
//  are divisible by 2 without leaving a remainder. Your task is to print all the even numbers from 1 up to the number you choose.
// Take a number N from the user as input, and print even numbers up to N.
// let n = parseFloat(prompt());
// for (let i=1; i <n; i++ ){
//     if(i%2==0){
//       console.log(i);
//     }
// }

// question-25-Write a program to print the sum of odd numbers up to N.
// let n = parseFloat(prompt());
// let sum=0;
// for(let i=1; i <n; i++ ){
//         if(i%2!=0){
//           sum = sum + i;
//         }
//     }console.log(sum) ; 

// question-26-Write a program to take two integers M, and N and print the sum of numbers in the range M to N.
// let m = parseFloat(prompt());
// let n = parseFloat(prompt());
// let sum =0 ;
// for(let i =m ;i<=n;i++){
//     sum = sum + i ;
// }console.log (sum);

// question-27-Write a program to calculate the sum of the following series where N is input from the user. 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N
// Example value of N
// let n= parseFloat(prompt());
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += 1 / i;
// }console.log(sum);

// question-28-Write a program to take a number from the user and print the number of digits in the given number. (can you do it without  loop O(1) )
// let n = parseInt(prompt());
// let m = 0;
// while (n !== 0) {
//     let a = n % 10;
//     n = parseInt(n / 10);
//     m++;
// }
// console.log(m);

// questiom-29-Write a program to take a number from the user and print the sum of the digits of the given number.
//  let n= parseInt(prompt());
//  let m=0;
//  while(n>0){
//     let a=n%10;
//     m=m+a ;
//     n=n/10;
//  }console.log(parseInt(m));

// question-30-Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.
// let n = parseFloat(prompt());
// let rev = 0;
// while (n > 0) {
//    let digit = n % 10;
//    rev = rev * 10 + digit;
//    n = (n / 10) | 0;
// } 
// console.log(rev);

// question-31-factors question
// let num = parseInt(prompt("Enter a number:"));
// console.log("Factors of " + num + " are:");
// for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         console.log(i);
//     }
// }





// question-33-Write a program to take a number from the user and then determine if that number is a special type of number called a 'perfect number'.
// A perfect number is a number where the sum of all its factors (excluding the number itself) is equal to the number itself. Print Yes if the number is a perfect number else print No. 
// let num = parseInt(prompt());
// let sum=0;
// for(let i=1 ; i<num;i++){
//    if(num%i==0){
//       sum=sum+i;
//    }
// }if(sum==num){
//     console.log ("yes");
// }else{
//    console.log("no");
// }

// question-34-Write a program to print all the numbers from the given array using a loop. 
// L = {23, 45, 32, 25, 46,33, 71, 90}
// let input = prompt();
// let L = [23,45,32,25,46,33,71,90];

// console.log("Numbers in the array:");
// for (let i = 0; i < L.length; i++) {
//     console.log(L[i]);
// }

// question-35-Write a program to create an array of natural numbers till 20 and print it.
// let arr = [];
// let c =1
// for (let i = 0; i <= 20; i++) {
//     arr[i]=c;
//     c++;
// }
// for (let i=0 ; i<20 ; i++){
// console.log(arr[i]);
// }

// question-36-Write a program to reverse the array and print the reversed array.
// let n = prompt("Enter the value of n");
// let a = [];
// for (let i = 0; i < n; i++) {
//     a[i] = prompt();
// }
// console.log("Original array:", a);
// console.log("Reversed array:");
// for (let i = n - 1; i >= 0; i--) {
//     console.log(a[i]);
// }

// question-37-Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.
// let n = prompt("enter n ");
// let num = prompt("enter target");
// let a=[] , found=0 ;
// for (let i=0;i<n;i++){
//    a[i]=prompt();
// }console.log("array:", a);
// for (let i=0;i<n;i++){
//    if(num==a[i]){
//     found = 1; 
//     break;
//    }
// } if (found==1){
//    console.log("yes");
// }else {
//    console.log("no");
// }

// question-38-Write a program to print the sum of all the odd numbers and even numbers in the given array.
// Note: In the output, you should print odd numbers sum and even numbers sum in this order only.
// let n = prompt("Enter n: ");
// let a = [], even = 0, odd = 0;
// for (let i = 0; i < n; i++) {
//    a[i] = parseInt(prompt());
// }
// console.log("Array:", a);
// for (let i = 0; i < n; i++) {
//    if (a[i] % 2 == 0) {
//       even += a[i];
//    } else {
//       odd += a[i];
//    }
// }
// console.log("Sum of even numbers:", even);
// console.log("Sum of odd numbers:", odd);

// question-39-Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user.
// let n = prompt("enter n ");
// let a = [] ;
// for (let i = 0; i < n; i++) {
//    a[i] = parseInt(prompt());
// }console.log("array",a);
// let k=0 , b=[]; 
// for(let i=0; i<n; i++){
//    if (a[i]==-1){
//      break;
//    }
//    let c=0;
//    for(let j=i+1; j<n; j++){
//       if(a[i]==a[j]){
//          c+=1;
//          if(c==1){
//             b[k]=a[i];
//             k++;
//          }else{
//             a[j]=-1;
//          }
//       }
//    }
// } console.log(b);

// question-40-Write a program to take two sorted arrays of size M, N from the user as input and merge them into a single sorted array of size M+N (Do not use sorting)
// let m = parseInt(prompt("Enter m "));
// let n = parseInt(prompt("Enter n"));
// let a = [] ,  b = [];
// for (let i = 0; i < m; i++) {
//     a[i] = parseInt(prompt("Enter element " ));
// }
// console.log("Array a:", a);
// for (let i = 0; i < n; i++) {
//     b[i] = parseInt(prompt("Enter element " ));
// }
// console.log("Array b:", b);
// let i = 0, j = 0, k = 0;
// let c = [];
// while (i < m && j < n) {
//     if (a[i] < b[j]) {
//         c[k] = a[i];
//         i++;
//     } else {
//         c[k] = b[j];
//         j++;
//     }
//     k++;
// }
// while (i < m) {
//     c[k] = a[i];
//     i++;
//     k++;
// }while (j < n) {
//     c[k] = b[j];
//     j++;
//     k++;
// }

// console.log("Merged Sorted Array:", c);

// question-41-Write a program to take value N from the user and print the following pattern based on the user input.
// array = [2, 3, 5, 2, 1]
// let n = parseInt(prompt("Enter n: "));
// let a = [] ;
// for (let i = 0; i < n; i++) {
//    a[i] = parseInt(prompt("Enter element "));
// }let max =0 ;
// for (let i = 0; i < n; i++) {
//    if (max < a[i]) {
//       max = a[i];
//    }
// }let b = [];
// for(let i=0; i<n; i++){
//       b[max-j]= (">");
//    }
//    for(let j=0; j<a[i]; j++){
//       b[i]= (">");
//    }
// for (let i = 0; i < n; i++) {
//    console.log(b[i]);
//    }


// const prompt = require("prompt-sync")();

// question-01-Take an array from the user as input and reverse it before printing it to the user. 
// let n = prompt("enter n ");
// let a = [] ;
// for (let i = 0; i < n; i++) {
//    a[i] = parseInt(prompt());
// }console.log("array",a);
// for (let i=0;i<n/2;i++){
//     let t = a[i];
//     a[i] = a[n-i-1];
//     a[n-i-1] = t;
// }console.log("reverse array",a);

// question-2-Take an array from the user as input and print the mean, median, and mode of the array 
// let n = parseInt(prompt("Enter n: "));
// let a = [];

// for (let i = 0; i < n; i++) {
//     a[i] = parseInt(prompt("Enter element : "));
// }

// console.log("Array:", a);

// let sum = 0;
// for (let i = 0; i < n; i++) {
//     sum += a[i];
// }
// let mean = sum / n;

// a.sort((a, b) => a - b);
// let median;

// if (n % 2 === 0) {
//     median = (a[n / 2 - 1] + a[n / 2]) / 2;
// } else {
//     median = a[parseInt(n / 2)];
// }

// let max = 0, mode = -1;

// for (let i = 0; i < n; i++) {
//     let c = 0;
//     for (let j = 0; j < n; j++) {
//         if (a[i] === a[j]) {
//             c++;
//         }
//     }
//     if (c > max) {
//         max = c;
//         mode = a[i];
//     }
// }

// console.log("Mean:", mean);
// console.log("Median:", median);
// console.log("Mode:", mode);

// question-3-Take an array of size N and a number K from the user as input, and print the elements of an array in a rotated manner with a gap of K. Eg, let us say the array is - 3, 6, 7, 5, 10. And the value of k = 3. The output should be - 7, 3, 10, 6, 5. If k = 2, the output should be - 6, 5, 3, 10, 7
// let n = parseInt(prompt("Enter n: "));
// let k = parseInt(prompt("Enter n: "));
// let a = [];

// for (let i = 0; i < n; i++) {
//     a[i] = parseInt(prompt("Enter element : "));
// }
// console.log("Array:", a);
// let c=0 , b=[] , p=0;
// for (let i=0;i<n;i=p){
//     for(let j=0;j<n;j++){
//         if( a[j]!=-1){
//             c+=1;
//             if (c==k){
//               b[p]=a[j];
//               a[j]=-1;
//               p++;c=0;
//             }
//         }
//     }
// }console.log("roted array:",b);
    
// question-4-Take an array from the user as input and find duplicate elements in an array.
// let n = prompt("enter n ");
// let a = [] ;
// for (let i = 0; i < n; i++) {
//    a[i] = parseInt(prompt());
// }console.log("array",a);
// let k=0 , b=[]; 
// for(let i=0; i<n; i++){
//    if (a[i]==-1){
//      break;
//    }
//    let c=0;
//    for(let j=i+1; j<n; j++){
//       if(a[i]==a[j]){
//          c+=1;
//          if(c==1){
//             b[k]=a[i];
//             k++;
//          }else{
//             a[j]=-1;
//          }
//       }
//    }
// } console.log(b);

// question-5-Take two sorted arrays from the user as input and Merge them into a single sorted array 
// let m = parseInt(prompt("Enter m "));
// let n = parseInt(prompt("Enter n"));
// let a = [] ,  b = [];
// for (let i = 0; i < m; i++) {
//     a[i] = parseInt(prompt("Enter element " ));
// }
// console.log("Array a:", a);
// for (let i = 0; i < n; i++) {
//     b[i] = parseInt(prompt("Enter element " ));
// }
// console.log("Array b:", b);
// let i = 0, j = 0, k = 0;
// let c = [];
// while (i < m && j < n) {
//     if (a[i] < b[j]) {
//         c[k] = a[i];
//         i++;
//     } else {
//         c[k] = b[j];
//         j++;
//     }
//     k++;
// }
// while (i < m) {
//     c[k] = a[i];
//     i++;
//     k++;
// }while (j < n) {
//     c[k] = b[j];
//     j++;
//     k++;
// }

// console.log("Merged Sorted Array:", c);

// question-6-Given an unsorted array of size N that contains only non-negative integers, find a contiguous subarray that adds to a given number S. In case of multiple subarrays, return the subarray which comes first on moving from left to right. Let us say the array is - 3, 6, 7, 5, 10. And the value of S = 12. The output should be - 7, 5
// let n = parseInt(prompt("Enter n: "));
// let s = parseInt(prompt("Enter S: "));
// let a = [];
// for (let i = 0; i < n; i++) {
//     a[i] = parseInt(prompt(`Enter element ${i + 1}: `));
// }
// console.log("Array:", a);
// let found = 0; 
// for (let i = 0; i < n; i++) {
//     let k = 0;
//     for (let j = i + 1; j < n; j++) {
//         k = a[i] + a[j];
//         if (s === k) {
//             found=1; 
//             for (let b = i; b <= j; b++) {
//                 console.log(a[b]); 
//             }
//             break; 
//         } else if (s < k) {
//             break; 
//         }
//     }
//     if (found==1) {
//         break; 
//     }
// }
// if (found!=1) {
//     console.log("No subarray found with the given sum.");
// }

// question-7-Take two sorted arrays from the user as input and find the Union and Intersection of the arrays.
// let m = parseInt(prompt("Enter m: "));
// let n = parseInt(prompt("Enter n: "));
// let a = [];
// let b = [];
// for (let i = 0; i < m; i++) {
//     a[i] = parseInt(prompt(`Enter element : `));
// }
// console.log("Array A:", a);
// for (let i = 0; i < n; i++) {
//     b[i] = parseInt(prompt(`Enter element : `));
// }
// console.log("Array B:", b);
// let union = [] , intersection = [] ,i = 0, j = 0;
// while (i < m && j < n) {
//     if (a[i] < b[j]) {
//         union.push(a[i]);
//         i++;
//     } else if (a[i] > b[j]) {
//         union.push(b[j]);
//         j++;
//     } else {
//         union.push(a[i]);
//         intersection.push(a[i]);
//         i++;
//         j++;
//     }
// }
// while (i < m) {
//     union.push(a[i]);
//     i++;
// }
// while (j < n) {
//     union.push(b[j]);
//     j++;
// }
// console.log("Union:", union);
// console.log("Intersection:", intersection);

// question-8-Take two sorted arrays of size m and n from the user as input and return the median of the two sorted arrays.
// let n = parseInt(prompt("Enter n"));
// let m = parseInt(prompt("Enter m"));
// let a = [];
// let b = [];
// for (let i = 0; i < n; i++) {
//     a[i] = parseInt(prompt("Enter value for array a"));
// }
// console.log("Array a:", a);
// for (let i = 0; i < m; i++) {
//     b[i] = parseInt(prompt("Enter value for array b"));
// }
// console.log("Array b:", b);
// let medianA;
// if (n % 2 === 0) {
//     medianA = (a[n / 2 - 1] + a[n / 2]) / 2;
// } else {
//     medianA = a[Math.floor(n / 2)]
// }let medianB;
// if (m % 2 === 0) {
//     medianB = (b[m / 2 - 1] + b[m / 2]) / 2;
// } else {
//     medianB = b[Math.floor(m / 2)];
// }
// console.log("Median of array a:", medianA);
// console.log("Median of array b:", medianB);

// question-9-Take a sorted array from the user as input and find a number using Binary Search the array.
// let sortedArray = [];
// let num = parseInt(prompt("Enter the number you want to find:"));
// for (let i = 0; i < 5; i++) {
//     sortedArray[i] = parseInt(prompt("Enter a number for the sorted array:"));
// }
// let low = 0;
// let high = sortedArray.length - 1;
// let found = false;
// while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (sortedArray[mid] === num) {
//         found = true;
//         break;
//     } else if (sortedArray[mid] < num) {
//         low = mid + 1;
//     } else {
//         high = mid - 1;
//     }
// }
// if (found) {
//     console.log("Number found at index:", mid);
// } else {
//     console.log("Number not found in the array.");
// }

// question-11-Read here how to construct a magic square of odd numbers and then write a program to input an odd number and print the corresponding magic square.
// let n = parseInt(prompt("enter n"));
// let a=[];
// for (let i=0; i<n; i++){
//     a[i]=parseInt(prompt());
// }console.log("array",a);
// for(let i=0; i<n; )
