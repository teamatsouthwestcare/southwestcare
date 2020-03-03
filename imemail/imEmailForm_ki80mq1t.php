<?php
if(substr(basename($_SERVER['PHP_SELF']), 0, 11) == "imEmailForm") {
	include '../res/x5engine.php';
	$form = new ImForm();
	$form->setField('First name', @$_POST['imObjectForm_80_1'], '', false);
	$form->setField('Last name', @$_POST['imObjectForm_80_2'], '', false);
	$form->setField('Email address', @$_POST['imObjectForm_80_3'], '', false);
	$form->setField('Phone number', @$_POST['imObjectForm_80_4'], '', false);
	$form->setField('Partner type', @$_POST['imObjectForm_80_5'], '', false);
	$form->setField('Website', @$_POST['imObjectForm_80_6'], '', false);
	$form->setField('', @$_POST['imObjectForm_80_7'], '', false);

	if(@$_POST['action'] != 'check_answer') {
		if(!isset($_POST['imJsCheck']) || $_POST['imJsCheck'] != '7942C99CC275DA2D48ECD74A2961EA8D' || (isset($_POST['imSpProt']) && $_POST['imSpProt'] != ""))
			die(imPrintJsError());
		$form->mailToOwner('jamesmichaelmoore@email.com', 'jamesmichaelmoore@email.com', 'Partner Enquiry', '', false);
		@header('Location: ../index.php');
		exit();
	} else {
		echo $form->checkAnswer(@$_POST['id'], @$_POST['answer']) ? 1 : 0;
	}
}

// End of file