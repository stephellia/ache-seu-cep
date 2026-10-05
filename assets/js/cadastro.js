import { buscarcep } from "./viacep.js";

let campocep = document.querySelector("#cep")
let btnbuscar = document.querySelector("#btn-buscar")

const modal = document.querySelector("#modal-resultado");
const btnFechar = document.querySelector("#btn-fechar");

btnbuscar.addEventListener('click', async(event) => {

    event.preventDefault();
    if (!campocep.value) return


    try{
        let endereco = await buscarcep(campocep.value)
        document.querySelector("#modal-logradouro").textContent = endereco.logradouro || "N/A";
        document.querySelector("#modal-bairro").textContent = endereco.bairro || "N/A";
        document.querySelector("#modal-localidade").textContent = endereco.localidade || "N/A";
        document.querySelector("#modal-uf").textContent = endereco.uf || "N/A";
        modal.classList.remove("esconde-modal");

        }
    catch(error){
        console.error(error.message)
    }
});

btnFechar.addEventListener('click', () => {
    modal.classList.add("esconde-modal");
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.add("esconde-modal");
    }
});



const btnSaibaMais = document.querySelector("#btn-saiba-mais");

btnSaibaMais.addEventListener('click', () => {
  
  alert("Obrigado pelo seu interesse! Redirecionando para as novidades...");
  
});


const formContato = document.querySelector("#form-contato");

formContato.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const nome = document.querySelector("#nome").value;

  
  alert(`Obrigado pelo contacto, ${nome}! A sua mensagem foi enviada com sucesso.`);

 
  formContato.reset();
});