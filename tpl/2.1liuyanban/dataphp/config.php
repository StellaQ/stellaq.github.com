<?php
//在现代浏览器中，出于安全考虑，通过脚本进行跨站HTTP请求被严格限制，只允许访问同一站点内的数据。
//header("Access-Control-Allow-Origin: *");被用在PHP中，用来允许跨站HTTP请求。
//header("Access-Control-Allow-Origin: *");
header('Content-Type:text/html; charset=utf-8');

//常量参数
define('DB_HOST','localhost');
define('DB_USER','root');
define('DB_PASSWORD','1325879km');
define('DB_NAME','test');

//第一步，连接MYSQL服务器
//$conn=@mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) or die('数据库连接失败，错误信息'.mysql_error());

//第二步，连接指定的数据库，设置字符集
//@mysql_select_db(DB_NAME,$conn) or die('数据库找不到，错误信息：'.mysql_error());
//@mysql_query('SET NAMES UTF8')or die('字符集设置错误'.mysql_error());

$conn = @new mysqli(DB_HOST, DB_USER,DB_PASSWORD,DB_NAME);
if ($conn->connect_errno) {
    die('数据库连接失败，错误信息:'. $conn->connect_errnor);
}
$conn->set_charset("utf8");

?>
