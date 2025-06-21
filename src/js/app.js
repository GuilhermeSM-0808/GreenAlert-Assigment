// Variaveis Slides
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");

// // Variaveis FORM
//     const form = document.getElementById("form")
//     const inputNome = document.getElementById("nome")
//     const inputEmail = document.getElementById("email")
//     const inputAssunto = document.getElementById("tipo")
//     const inputMensagem = document.getElementById("mensagem")
//     const btnEnviarForm = document.getElementById("btnEnviarForm")
//     const msgErro = document.getElementById("msgErro")
//     const cadastro = document.getElementById("cadastros")

// // Constantes & Variaveis QUIZ 

//     const gabarito = {q1:"A", q2:"B", q3:"A", q4:"A", q5:"A", q6:"A", q7:"B", q8:"A", q9:"A", q10:"B"};
//     const quiz = document.getElementById("quizForm")
//     const btnEnviarQuiz = document.getElementById("btnEnviarQuiz")
//     const notaopacity = document.getElementById9=("nota")



// CODIGO
    


    // btnEnviarForm.addEventListener("click", function (event) {

    //     event.preventDefault()
    //     let nome = inputNome.value
    //     let email = inputEmail.value
    //     let assunto = inputAssunto.value
    //     let mensagem = inputMensagem.value

    //     if (nome === "" || email === "" || mensagem === "") {
    //         msgErro.textContent = "Preencha os campos vazios!"
    //         msgErro.classList.add("msgVermelha") //<-- adicionar style definido no arquivo CSS ao texto
    //         // msgErro.setAttribute("src",""link da imagem"") // <-- Alterar "src" do elemento
    //         // msgErro.src = "link"
    //         if (nome === ""){
    //             inputNome.style.backgroundColor()
    //         }
    //         return
    //     }

    //     alert(`Nome: ${nome}\nE-mail: ${email}\nAssunto: ${assunto}\nMensagem: ${mensagem}`)



    // })

    // btnEnviarQuiz.addEventListener("click", function (quiz) {

    //     let nota = 0;

    //     quiz.preventDefault()
    //     for (let p in gabarito){
    //         let resposta = document.querySelector(`input[name="${p}"]:checked`);
    //         if  (resposta === gabarito[p]){
    //             nota++;
    //         }
    //     }

    //     notaopacity.textContent =`${nota}/10`
        



    // })

    //Slides

    function showSlides() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 6000);
    }

    showSlides();