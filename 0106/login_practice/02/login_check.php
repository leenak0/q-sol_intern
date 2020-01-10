<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
session_start();
$id=$_POST['id'];
$pw=$_POST['pw'];
$mysqli=mysqli_connect("localhost","admin","1234","db");
 
$check="SELECT * FROM account WHERE id='$id'";
$result=$mysqli->query($check); 
if($result->num_rows==1){
    $row=$result->fetch_array(MYSQLI_ASSOC); //하나의 열을 배열로 가져오기
    if($row['password']==$pw){
        $_SESSION['id']=$id;           //로그인 성공 시 세션 변수 만들기
        if(isset($_SESSION['id']))    //세션 변수가 참일 때
        {
            header('Location: main.php');   //로그인 성공 시 페이지 이동
        }
        else{
            echo "세션 저장 실패";
        }            
    }
    else{
        echo "wrong id or pw";
    }
}
else{
    echo "wrong id or pw";
}
?>