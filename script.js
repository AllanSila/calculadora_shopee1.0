let campotxt = document.getElementById('valor-receber');
let resultado = document.getElementById('resultado');
let tipo_frete = document.getElementById('opcoes');
let valor_inserido = document.getElementById('venda_atual');

const body = document.getElementById('body');
const taxa_sem_frete = 0.20; 
const taxa_com_frete = 0.12; 
const taxa_fixa = 4.00; 

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let valorReceber = campotxt.value.replace(',', '.');

    if (isNaN(valorReceber) || valorReceber.trim() === "") {
        alert("Por favor, insira um valor numérico válido.");
        return;
    }

    valorReceber = parseFloat(valorReceber);

    let taxa_comissao = tipo_frete.value === 'Sim' ? taxa_sem_frete : taxa_com_frete;

    let valorBase = valorReceber + taxa_fixa;
    let valorVendaFinal = valorBase + (valorBase * taxa_comissao);
    let valorComissao = valorBase * taxa_comissao;

    valor_inserido.textContent = `R$ ${valorReceber.toFixed(2)}`;
    document.getElementById('valor_venda').textContent = `R$ ${valorVendaFinal.toFixed(2)}`;
    document.getElementById('valor_comissao').textContent = `R$ ${valorComissao.toFixed(2)}`;
    document.getElementById('exposicao').textContent = tipo_frete.options[tipo_frete.selectedIndex].text;
    document.getElementById('frete').textContent = `R$ ${taxa_fixa.toFixed(2)}`;

    resultado.style.display = 'block';
    body.style.height = '100%';

    campotxt.value = '';
});
