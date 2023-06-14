Como usar a hospedagem surge no plano grátis (free) e hospedar react? confira:  
**Passo 1 crie sua conta se ainda não tiver uma (se tiver vá ao passo 2).**  
Para isso vai precisar do node (versão mais recente) localmente.  
Você vai precisar instalar o surge com o comando abaixo:  
sudo npm install -g surge  
(No ubuntu - minha versão ainda é 18.04).  
Após a instalação crie sua conta rodando o comando:  
surge  
Entre com seu email e senha.  
Vá lá no seu email e faça a verificação.  
**Passo 2 envie seu projeto.**  
No diretório de seu projeto rode o comando abaixo:  
surge  
O comando acima dá inicio ao seu projeto.  

Os passos acima já garante que sua hospedagem está ok.  
Para atualizar seu projeto rode o comando:  
surge /home/user/project nome-do-site-surge.sh  
Esse nome-do-site-surge.sh   é o nome que vc tem ao rodar o comando surge no diretório do projeto.  
Mas se esqueceu por que foi tudo tão rápido é só rodar o comando abaixo e ver todos os sites que vc tem no surge.  
surge list  
E se vc quiser aprender (ou precisar) rode:  
surge --help  que vai ver mais opções...  
O projeto webpack-react é um projeto desenvolvido com webpack + react.  
link: https://faint-ducks.surge.sh/  
