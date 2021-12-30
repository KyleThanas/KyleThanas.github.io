<?php
$servername = "localhost";
$username = "root";
$password = "";

// 创建连接
$conn = new mysqli($servername, $username, $password);

// 检测连接
if ($conn->connect_error) {
    die("mysql连接失败: " . $conn->connect_error);
}
echo "mysql连接成功";
?>
