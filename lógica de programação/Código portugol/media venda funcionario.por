programa
{
	
	funcao inicio()
	{
		real venda1, venda2, venda3, venda4, media
		cadeia nome
		
		escreva("Digite seu nome: ")
		leia(nome)
		escreva("Digite as vendas de janeiro: ")
		leia(venda1)
		escreva("Digite as vendas de fevereiro: ")
		leia(venda2)
		escreva("Digite as vendas de março: ")
		leia(venda3)
		escreva("Digite as vendas de abril: ")
		leia(venda4)
		media = (venda1+venda2+venda3+venda4)/4

		escreva("O vendedor "+ nome +" vendeu em janeiro: "+venda1+" em fevereiro: "+venda2+" em março: "+venda3+" e em abril: "+venda4+" com uma média de vendas de:"+media)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 356; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */