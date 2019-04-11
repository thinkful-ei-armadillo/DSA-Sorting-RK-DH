//MERGE SORT 
//Given the following list of numbers 21, 1,     26, 45,    29, 28, 2, 9,       16, 49,   39, 27,    43, 34,    46, 40

// What is the resulting list that will be sorted after 3 recursive calls to mergesort?  
//  21  , 1   26, 45,    29, 28, 2, 9,       16, 49, 39, 27, 43, 34, 46, 40

// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
//1 , 2 , 9 , 21  , 26 , 28,  45        16 , 27 , 39 ,49       34 , 43    46 ,  40

// What are the first 2 lists to be merged?
//  21 , 1

// Which two lists would be merged on the 7th merge?
// 29, 28       2, 9,

//QUICK SORT

// Understanding quicksort
// 1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step 
// has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about 
// the partition step? Explain your answer.


// The pivot could have been 17, but could not have been 14

// The pivot could have been either 14 or 17

// Neither 14 nor 17 could have been the pivot --- every number on the left is less and bigger on the right so can be either or .

// The pivot could have been 14, but could not have been 17

                                      j 10   3      9            14, 17  13
// 2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9,     12 
//show the resulting list after the second partitioning 
//according to the quicksort algorithm.
10  3  9  12         19 14 17 16  13 15
3  9 10 12      19  14  17  16  13  15


// When using the last item on the list as a pivot
3  9 10 12      19  14  17  16  13  15


// When using the first item on the list as a pivot
12  13  10 3  9     14   15 16 19  17
 10  3  9  12  13  14 15  16  19  17