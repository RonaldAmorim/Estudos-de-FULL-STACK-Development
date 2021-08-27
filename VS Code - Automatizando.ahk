#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

^d:: reload
return

; "^" Control, 
; "<+" shift esquerdo
; "!" Alt

; Para inserir um elemento novo em um array TECLAS: SHIFT-ESQUERDO + CONTROL + INSERT
	<+^INS::
		Send, {RIGHT},{SPACE}
		Send, '
	return

; para inserir um console.log TECLAS: INSERT
	INS::
		Sleep 500
		Send, console.log{SHIFTDOWN}9{SHIFTUP}
		Sleep 100
		Send, {SHIFTDOWN}´{SHIFTUP}
		Sleep 100
		Send, {SPACE}
	return

; inserir um consolo.log copiando um valor selecionado TECLAS ALT+INSERT: 
	!INS::
		Send, {CTRLDOWN}c{CTRLUP}{CTRLDOWN}{ENTER}{CTRLUP}
		Sleep 100
		Send, console.log(
		Sleep 100
		Send, {CTRLDOWN}v{CTRLUP}
	return

; Adicionando um place holder LEFT SHIFT + INSERT
	<+INS::
		Send, {SHIFTDOWN}4{SHIFTUP}{SHIFTDOWN}[{SHIFTUP}
	return
	
; transformando em number
	!=::
		Sleep 500
		Send, {CTRLDOWN}x{CTRLUP}
		Sleep 100
		Send, Number({CTRLDOWN}v{CTRLUP})
		Sleep 100
	return

; transformando em string
	!-::
		Sleep 500
		Send, {CTRLDOWN}x{CTRLUP}
		Sleep 100
		Send, String(
		Sleep 100
		Send, {CTRLDOWN}v{CTRLUP}
		Sleep 100
	return

; Códigos não utilizados
	; Send, String(``{SPACE} ; cria uma template string