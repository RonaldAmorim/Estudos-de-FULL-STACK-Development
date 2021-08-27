^d:: reload
return

; "^" Control, 
; "<+" shift esquerdo
; "!" Alt

; Para inserir um <ELEMENTO NOVO> em um array TECLAS: SHIFT-ESQUERDO + CONTROL + INSERT
	<+^INS::
		Send, {RIGHT},{SPACE}
		Send, '
	return

; para inserir um <CONSOLE.LOG> TECLAS: INSERT
	INS::
		Sleep 500
		Send, console.log{SHIFTDOWN}9{SHIFTUP}
		Sleep 100
		Send, {SHIFTDOWN}´{SHIFTUP}
		Sleep 100
		Send, {SPACE}
	return

; Insere um console.log com <TEMPLATE STRING> copiando o conteúdo
	^!INS::
		Sleep 500
		Send, {CTRLDOWN}x{CTRLUP}
		Sleep 50
		Send, console.log{SHIFTDOWN}9{SHIFTUP}
		Sleep 50
		Send, {SHIFTDOWN}´{SHIFTUP}
		Sleep 50
		Send, {SPACE}
		Send, {CTRLDOWN}v{CTRLUP}
	return

; inserir um consolo.log copiando um valor selecionado TECLAS ALT+INSERT: 
	!INS::
		Sleep 500
		Send, {CTRLDOWN}c{CTRLUP}{CTRLDOWN}{ENTER}{CTRLUP}
		Sleep 100
		Send, console.log(
		Sleep 100
		Send, {CTRLDOWN}v{CTRLUP}
	return

; Adicionando um <PLACE HOLDER> LEFT SHIFT + INSERT
	<+INS::
		Sleep 50
		Send, {SHIFTDOWN}4{SHIFTUP}{SHIFTDOWN}[{SHIFTUP}{SHIFTDOWN}]{SHIFTUP}
		Send, {LEFT}
	return
	
; transformando em <NUMBER>
	!=::
		Sleep 500
		Send, {CTRLDOWN}x{CTRLUP}
		Sleep 100
		Send, Number({CTRLDOWN}v{CTRLUP})
		Sleep 100
	return

; transformando em <STRING>
	!-::
		Sleep 500
		Send, {CTRLDOWN}x{CTRLUP}
		Sleep 100
		Send, String(
		Sleep 100
		Send, {CTRLDOWN}v{CTRLUP}
		Sleep 100
	return

; Inserindo uma FUNCTION
	^INS::
		Sleep 500
		Send, function () {SHIFTDOWN}[{SHIFTUP}{ENTER}{UP}{HOME}{CTRLDOWN}{RIGHT}{CTRLUP}{RIGHT}
		return

; Mostrando o resultado na saída do console F8
	!ENTER::
		Sleep 100
		Send, {F8}
		return

; Códigos não utilizados
	; Send, String(``{SPACE} ; cria uma template string