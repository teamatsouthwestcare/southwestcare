<?php
include("../res/x5engine.php");
$nameList = array("ct4","jtn","5ae","85g","vm6","fg2","5eu","gyn","sw2","6jw");
$charList = array("R","K","4","A","C","H","G","3","6","Y");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
