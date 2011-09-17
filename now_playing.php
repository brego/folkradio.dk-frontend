<?php

header('Content-Type: application/json; charset=utf-8');

$random_time = rand(20, 40);
$tracks      = array();

$tracks[] = array('artist' => 'Trio Mio', 'track' => 'Bryllupsvals til Mari og Johnny', 'album' => 'Stories Around A Holy Goat', 'cover_id' => 1, 'time_left' => $random_time);
$tracks[] = array('artist' => 'Trio Mio', 'track' => 'Etna/Philostratus revenge', 'album' => 'Stories Around A Holy Goat', 'cover_id' => 1, 'time_left' => $random_time);
$tracks[] = array('artist' => 'Trio Mio', 'track' => 'Øresundsmarsch', 'album' => 'Stories Around A Holy Goat', 'cover_id' => 1, 'time_left' => $random_time);

$tracks[] = array('artist' => 'Tumult', 'track' => 'Kærlighedstræet', 'album' => 'Aldrig Får Jeg Fred', 'cover_id' => 2, 'time_left' => $random_time);
$tracks[] = array('artist' => 'Tumult', 'track' => 'Jeg Går Ud Og Jeg Går Ind', 'album' => 'Aldrig Får Jeg Fred', 'cover_id' => 2, 'time_left' => $random_time);
$tracks[] = array('artist' => 'Tumult', 'track' => 'Norrsken', 'album' => 'Aldrig Får Jeg Fred', 'cover_id' => 2, 'time_left' => $random_time);

$tracks[] = array('artist' => 'Kætter Kvartet', 'track' => 'Var Det Det Det Var', 'album' => 'Den sidste Schottish ', 'cover_id' => 3, 'time_left' => $random_time);
$tracks[] = array('artist' => 'Kætter Kvartet', 'track' => 'Wha\'m no\'e glæ\'e', 'album' => 'Den sidste Schottish ', 'cover_id' => 3, 'time_left' => $random_time);
$tracks[] = array('artist' => 'Kætter Kvartet', 'track' => 'Hegnhopperen', 'album' => 'Den sidste Schottish ', 'cover_id' => 3, 'time_left' => $random_time);

print json_encode($tracks[array_rand($tracks)]);

?>