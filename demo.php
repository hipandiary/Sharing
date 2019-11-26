<?php
/* 
对数值升降序
*/
// $num1=[1,2,3,4]; 
// rsort($num1);     
// // var_dump($num1);
// foreach ($num1 as $key => $value) {
//     echo " $value\n";
// }

// $num1 = $_POST["num1"];
// echo "$num1";

$nums=[2,7,11,15,9];
$target=9;
for ($i=0; $i < count($nums); $i++) { 
    // echo $i;
    for ($j=$i+1; $j < count($nums); $j++) { 
        // echo $j;
       if ($nums[$j]==$target-$nums[$i]) {
            $re = [$i , $j];
            return $re;
           
       }    
    }
}
?>
