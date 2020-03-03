<?php
if(substr(basename($_SERVER['PHP_SELF']), 0, 11) == "imEmailForm") {
	include '../res/x5engine.php';
	$form = new ImForm();
	$form->setField('First name', @$_POST['imObjectForm_87_1'], '', false);
	$form->setField('Last name', @$_POST['imObjectForm_87_2'], '', false);
	$form->setField('Email address', @$_POST['imObjectForm_87_3'], '', false);
	$form->setField('Phone number', @$_POST['imObjectForm_87_4'], '', false);
	$form->setField('', @$_POST['imObjectForm_87_5'], '', false);

	if(@$_POST['action'] != 'check_answer') {
		if(!isset($_POST['imJsCheck']) || $_POST['imJsCheck'] != 'AAA362DAB1F8C5BF6FBD98B9EC19E502' || (isset($_POST['imSpProt']) && $_POST['imSpProt'] != ""))
			die(imPrintJsError());
		$form->mailToOwner('jamesmichaelmoore@email.com', 'jamesmichaelmoore@email.com', 'Recruitment Email', '', false);
		$form->mailToCustomer('team@southwestcare.co.uk', $_POST['imObjectForm_87_3'], 'Thanks for the message !', 'Hiya !

This is an automated reply to say we are currently a touch busy matching incredible candidates with worthy companies so, stick with us and we\'ll get in touch later on today !

Kind regards,

The South West Care Team ', false);
		@header('Location: ../index.php');
		exit();
	} else {
		echo $form->checkAnswer(@$_POST['id'], @$_POST['answer']) ? 1 : 0;
	}
}

// End of file