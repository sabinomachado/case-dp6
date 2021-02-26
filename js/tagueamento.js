// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//Implementação do Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
    ga('create', '​UA-12345-6', 'auto');
    ga('send', 'pageview');

        // 1º Item do Arquivo Instruções.pdf <MENU>
            let Econtato = document.getElementsByClassName('menu-lista-link menu-lista-contato')[0]
            Econtato.addEventListener('click', function(){
            ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
        });

        // 2º Item do Arquivo Instruções.pdf <DOWNLOAD>   
            let download = document.getElementsByClassName('menu-lista-link menu-lista-download')[0]
            download.addEventListener('click', function(){
            ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
            }); 


        //3º Item do Arquivo Instruções.pdf< <BOTÕES>

            //Lorem
              let bt_lorem = document.querySelector('.card.card-montadoras[data-id="lorem"]');
            if(bt_lorem != null){
                bt_lorem.addEventListener("click",function(){
                    ga('send', 'event', "analise", "ver_mais", bt_lorem.getAttribute('data-name'));
                });
            }

            //Dolor
             let bt_dolor = document.querySelector('.card.card-montadoras[data-id="dolor"]');
            if(bt_dolor != null){
                bt_dolor.addEventListener("click",function(){
                    ga('send', 'event', "analise", "ver_mais", bt_dolor.getAttribute('data-name'));
                });
            }
            
            //Ipsum
            let bt_ipsum = document.querySelector('.card.card-montadoras[data-id="ipsum"]');
            if(bt_ipsum != null){
                bt_ipsum.addEventListener("click",function(){
                    ga('send', 'event', "analise", "ver_mais", bt_ipsum.getAttribute('data-name'));
                });
            }


        // 4º Item do Arquivo Instruções.pdf <SOBRE>
        
            //NOME
            let i_nome = document.querySelector('#nome');
            if(i_nome != null){
                i_nome.addEventListener('change',function(){ 
                    ga('send', 'event', "contato", i_nome.getAttribute('id'), "preencheu");
                })
            }
            //EMAIL
            let i_email = document.querySelector('#email');
            if(i_email != null){
                i_email.addEventListener('change',function(){ 
                    ga('send', 'event', "contato", i_email.getAttribute('id'), "preencheu");
                })
            }
            //TELEFONE
            let i_telefone = document.querySelector('#telefone');
            if(i_telefone != null){
                i_telefone.addEventListener('change',function(){ 
                    ga('send', 'event', "contato", i_telefone.getAttribute('id'), "preencheu");
                })
            }
            //ACEITO
            let i_aceito = document.querySelector('#aceito');
            if(i_aceito != null){
                i_aceito.addEventListener('change',function(){ 
                    ga('send', 'event', "contato", i_aceito.getAttribute('id'), "preencheu"); 
                })
            }

            //MENSAGEM
            var mensagem = setInterval(function(){
                let lightbox_enviar_txt = document.querySelector('body').classList.value
                if( lightbox_enviar_txt.includes('lightbox-open')){
                    ga('send', 'event', "contato", "enviado", "enviado"); 
                    clearInterval(mensagem);
                }
            },2000)
