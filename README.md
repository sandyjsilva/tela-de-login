# Projeto: Tela de Login Interativa

Este projeto demonstra a evolução de uma página de login estática (HTML/CSS) para um fluxo de navegação completo e interativo, simulando uma mini-aplicação muli-pagina (Login, Cadastro, Recuperação de 
Senha e Confirmação de Cadastro). O design adota o estilo Glassmorphism, com um efeito de fundo desfocado (backdrop-filter: blur), garantindo uma interface moderna e limpa. **Do qual ainda está sendo construída.**


### Estrutura da Aplicação


O projeto é composto por quatro módulos interconectados:

***Login (pvgKyEX):*** Ponto de entrada, com links para Cadastro e Recuperação.

***Cadastro (azdKNdN):*** Formulário completo que usa JavaScript para redirecionar para a Confirmação.

***Recuperação (bNEKppQ):*** Formulário simples para recuperação de senha, com link de volta ao Login.

***Confirmação (emJKZBN):*** Tela de sucesso pós-cadastro, com botão e link para retornar ao Login.

# Nota sobre o JavaScript no CodePen
Devido às restrições de segurança de iframe do CodePen, o redirecionamento pós-cadastro usa window.open(URL, '_blank') para abrir a tela de confirmação em uma nova aba. Em um ambiente de produção (site 
real), seria usado window.location.href = URL; para navegar na mesma janela. **Mas ainda não foi encontrado uma solução para essa etava, talvez se houver uma mudança no ambiente de criação**
