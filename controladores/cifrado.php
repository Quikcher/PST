<?php
function cifrar($U_Password){
	return openssl_encrypt($U_Password, 'aes-256-cbc', 'sistemaintegralllavecifrada', 0, 'SIVector');
}

function descifrar($U_PasswordCifrada){
	return openssl_decrypt($U_PasswordCifrada, 'aes-256-cbc', 'sistemaintegralllavecifrada', 0, 'SIVector');
}
?>