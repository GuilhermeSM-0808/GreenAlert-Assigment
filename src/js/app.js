// REF ---> https://cherry-client-b8f.notion.site/Manipula-o-de-DOM-11b911d84e0d8074b3c9f88be820405b 



// Variaveis FORM
    const form = document.getElementById("form")
    const inputNome = document.getElementById("nome")
    const inputEmail = document.getElementById("email")
    const inputAssunto = document.getElementById("tipo")
    const inputMensagem = document.getElementById("mensagem")
    const btnEnviarForm = document.getElementById("btnEnviarForm")
    const msgErro = document.getElementById("msgErro")
    const cadastro = document.getElementById("cadastros")

// Constantes & Variaveis QUIZ 

const gabarito = {q1:"A", q2:"B", q3:"A", q4:"A", q5:"A", q6:"A", q7:"B", q8:"A", q9:"A", q10:"B"};
const quiz = document.getElementById("quizForm")
const btnEnviarQuiz = document.getElementById("btnEnviarQuiz")
const notaDisplay = document.getElementById("nota")
const msgErroQuiz = document.getElementById("msgErroQuiz")
const textoResultado = document.getElementById("textoResultado")



// CODIGO

    btnEnviarForm.addEventListener("click", function (event) {

        event.preventDefault()
        let nome = inputNome.value
        let email = inputEmail.value
        let assunto = inputAssunto.value
        let mensagem = inputMensagem.value

        if (nome === '' || email === '' || mensagem === '') {
            msgErro.textContent = "Preencha os campos vazios!"
            msgErro.classList.add('msgVermelha') //<-- adicionar style definido no arquivo CSS ao texto
            // msgErro.setAttribute("src","'link da imagem'") // <-- Alterar 'src' do elemento
            // msgErro.src = "link"
            if (nome === ''){
                inputNome.style.backgroundColor = "#f22727"
            } else {
                inputNome.style.backgroundColor = "var(--text-color)"
            }
            if (email === ''){
                inputEmail.style.backgroundColor = "#f22727"
            } else {
                inputEmail.style.backgroundColor = "var(--text-color)"
            }
            if (mensagem === ''){
                inputMensagem.style.backgroundColor = "#f22727"
            } else {
                inputMensagem.style.backgroundColor = "var(--text-color)"
            }
        
            return
        }

        if (nome !== '' && email !=='' && mensagem !== '') {
            inputNome.style.backgroundColor = "var(--text-color)"
            inputEmail.style.backgroundColor = "var(--text-color)"
            inputMensagem.style.backgroundColor = "var(--text-color)"

            msgErro.textContent = ""
        }

        alert(`DEBUG ALERT!\nNome: ${nome}\nE-mail: ${email}\nAssunto: ${assunto}\nMensagem: ${mensagem}`)



    })

    btnEnviarQuiz.addEventListener("click", function (quiz) {

        let nota = 0;
        let todasRespondidas = true;

        quiz.preventDefault();
        for (let p in gabarito){
            let resposta = document.querySelector(`input[name="${p}"]:checked`);
            let Q = document.getElementById(`${p}`);
            if (resposta != null){
                Q.style.backgroundColor = "var(--light-color)";
            } else if (resposta == null){
                Q.style.backgroundColor = "yellow";
                todasRespondidas = false;
                continue; 
            }
        }
        if (todasRespondidas === true){    
            for (let p in gabarito){
                let resposta = document.querySelector(`input[name="${p}"]:checked`).value;
                
                let respondida = document.getElementById(`${p}`);
                respondida.style.backgroundColor = "var(--light-color)";

                let questao = document.getElementById(`${p}${resposta}`);
                console.log(questao, resposta, gabarito[p]); // para debugging

                if  (resposta === gabarito[p]){
                    questao.style.backgroundColor = "green";
                    nota++;
                } else {
                    questao.style.backgroundColor = "red";
                }

                if (msgErroQuiz.textContent !== "") {
                    msgErroQuiz.textContent = "";
                }
            }
        } else {
            msgErroQuiz.textContent = "Por favor, responda todas as questões.";
            msgErroQuiz.style.color = "red";
            backgroundColor = "var(--base1-color)";
            msgErroQuiz.style.fontSize = "24px";
            window.location.href = '#quiz';
            return;
        }


        if (nota > 5) {
            textoResultado.textContent = "Muito bem!";
            textoResultado.style.color = "var(--text-color)";
            textoResultado.style.backgroundColor = "var(--base1-color)";
        } else{
            textoResultado.textContent = "Estude mais!";
            textoResultado.style.color = "red";
            textoResultado.style.backgroundColor = "var(--base1-color)";
        }
        console.log(`Nota: ${nota}`);
        notaDisplay.textContent =`${nota}/10`;
        btnEnviarQuiz.disabled = true;
    
        }
    );