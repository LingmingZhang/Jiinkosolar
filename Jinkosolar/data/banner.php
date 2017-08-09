<?php
	header("Content-Type:application/json;charset=utf-8");
	$conn = mysqli_connect("127.0.0.1","root","","jinkosolar");
    //3:设置编码
    mysqli_query($conn,"SET NAMES UTF8");
    
    //创建sql并发送
    $sql="SELECT * FROM banner";
    $result=mysqli_query($conn,$sql);
    //抓取
    $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode($rows);
?>