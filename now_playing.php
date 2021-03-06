<?php
require('/usr/share/php-getid3/getid3.php');
require('./dbconf.php');

header('Content-Type: application/json');

$getID3 = new getID3;

// get latest filename

$conn = mysql_connect($dbconf['host'], $dbconf['user'], $dbconf['pass']);
mysql_select_db($dbconf['base']);
$q = mysql_query("SELECT filename FROM plays ORDER BY id DESC LIMIT 1");

$filename = mysql_result($q, 0, 0);

$fileinfo = $getID3->analyze($filename);

$jsoninfo = array(	'artist' => utf8_encode($fileinfo['tags']['id3v2']['artist'][0]), 
			'track' => utf8_encode($fileinfo['tags']['id3v2']['title'][0]), 
			'album' => utf8_encode($fileinfo['tags']['id3v2']['album'][0]), 
			'cover_id' => 2, 
			'time_left' => 10);

print json_encode($jsoninfo);

?>

