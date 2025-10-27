# Projeto: Tela de Login Interativa

Este projeto demonstra a evolução de uma página de login estática (HTML/CSS) para um fluxo de navegação completo e interativo, simulando uma mini-aplicação muli-pagina (Login, Cadastro, Recuperação de 
Senha e Confirmação de Cadastro). O design adota o estilo Glassmorphism, com um efeito de fundo desfocado (backdrop-filter: blur), garantindo uma interface moderna e limpa. **Do qual ainda está sendo construída.**

## Resultado Esperado da interface do app:

<img width="400" height="200" alt="image" src="https://github.com/user-attachments/assets/21976f06-7a15-4b9d-923a-cc41334aaea0" />
<img width="400" height="200" alt="image" src="https://github.com/user-attachments/assets/1c7add9c-3d0f-45a1-b111-013e8383fbfd" />
<img width="400" height="200" alt="image" src="https://github.com/user-attachments/assets/da34ed5f-ae64-4c36-9a5b-89ece5077f12" />
<img width="400" height="200" alt="image" src="https://github.com/user-attachments/assets/ba47df63-4a0e-4ec7-bd3a-0a23f6d2bc42" />




### Estrutura da Aplicação


O projeto é composto por quatro módulos interconectados:

***Login (pvgKyEX):*** Ponto de entrada, com links para Cadastro e Recuperação.

***Cadastro (azdKNdN):*** Formulário completo que usa JavaScript para redirecionar para a Confirmação.

***Recuperação (bNEKppQ):*** Formulário simples para recuperação de senha, com link de volta ao Login.

***Confirmação (emJKZBN):*** Tela de sucesso pós-cadastro, com botão e link para retornar ao Login.

| Links | (CodePens) |
| :-- | -- |
| Módulo | Link|
| Login | https://codepen.io/sandyjsilva/pen/pvgKyEX |
| Cadastro | https://codepen.io/sandyjsilva/pen/azdKNdN |
| Recuperação | https://codepen.io/sandyjsilva/pen/bNEKppQ |
| Confirmação | https://codepen.io/sandyjsilva/pen/emJKZBN |



## Nota sobre o JavaScript no CodePen
Devido às restrições de segurança de iframe do CodePen, o redirecionamento pós-cadastro usa window.open(URL, '_blank') para abrir a tela de confirmação em uma nova aba. Em um ambiente de produção (site 
real), seria usado window.location.href = URL; para navegar na mesma janela. **Mas ainda não foi encontrado uma solução para essa etava, talvez se houver uma mudança no ambiente de criação**


