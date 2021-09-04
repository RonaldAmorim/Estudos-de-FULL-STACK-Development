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
		Sleep, 100
		return

; Inserindo um ALERT
	^<+a::
		Send, alert{SHIFTDOWN}9{SHIFTUP}'
		return

; Inserindo um PROMPT
	^!a::
		Send, prompt{SHIFTDOWN}9{SHIFTUP}'
		return

; Inserindo um GETELEMENT.BYID
	^<+i::
		Send, document.getElementById{SHIFTDOWN}9{SHIFTUP}'
		return

; Inserindo um BOTÃO
	^!b::
		Send, input:sub
		Sleep, 200
	 	Send, {TAB}
		Send, {RIGHT}{SPACE}
		Send, id
		Sleep, 200
	 	Send, {TAB}
		return

; Inserindo um TEXT
	^!t::
		Send, input:tex
		Sleep, 200
	 	Send, {TAB}
		Send, {RIGHT}{RIGHT}{RIGHT}{RIGHT}{RIGHT}{RIGHT}
		;Send, id
		;Sleep, 200
	 	;Send, {TAB}
		return

; Mostrando o resultado na saída do console F8
	!ENTER::
		Sleep 100
		Send, {F8}
		return

; Comentário em HTML
	<+^;::
		Sleep 100
		Send, {SHIFTDOWN},{SHIFTUP}{SHIFTDOWN}1{SHIFTUP}--{Space}{Left}{Space}
		Send, htmlComment
		Send, {SHIFTDOWN}{CTRLDOWN}{LEFT}{SHIFTUP}{CTRLUP}
		return
; Comentário no CSS
	^!;::
		Sleep 100
		Send, /*
		Send, {SPACE}
		Send, */
		Send, {CTRLDOWN}{LEFT}{CTRLUP}
		Send, cssComment		
		Send, {Space}{left}{SHIFTDOWN}{CTRLDOWN}{LEFT}{SHIFTUP}{CTRLUP}
		return

; Inserindo um FOR de ITERAÇÂO
	^!f::
		Send, {CTRLDOWN}{ENTER}{CTRLUP} ; pode précopiar a variável objeto da iteração
		Send, for{SPACE}{SHIFTDOWN}9{SHIFTUP}let{SPACE}i{SPACE}={SPACE}0;{SPACE}i{SPACE}{SHIFTDOWN},{SHIFTUP}{SPACE}x{SPACE}{BACKSPACE};{SPACE}i{SHIFTDOWN}={SHIFTUP}{SHIFTDOWN}={SHIFTUP}{RIGHT}{SPACE}{END}{SHIFTDOWN}[{SHIFTUP}{ENTER}
		Send, {UP}{CTRLDOWN}{RIGHT}{CTRLUP}{CTRLDOWN}{RIGHT}{CTRLUP}{CTRLDOWN}{RIGHT}{CTRLUP}{CTRLDOWN}{RIGHT}{CTRLUP}{CTRLDOWN}{RIGHT}{CTRLUP}{CTRLDOWN}{RIGHT}{CTRLUP}{CTRLDOWN}{RIGHT}{CTRLUP}{CTRLDOWN}{RIGHT}{CTRLUP}{SHIFTDOWN}{LEFT}{SHIFTUP}
; Códigos não utilizados
	; Send, String(``{SPACE} ; cria uma template string