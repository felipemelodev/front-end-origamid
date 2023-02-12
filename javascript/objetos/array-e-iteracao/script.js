// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const cursosArray = Array.from(cursos);

const cursosObj = cursosArray.map((curso) => {
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const aulas = +curso.querySelector('.aulas').innerText;
    const horas = +curso.querySelector('.horas').innerText;
    return {
        titulo,
        descricao,
        aulas,
        horas,
    }
})

console.log(cursosObj);


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numerosMaiores100 = numeros.filter(num => num > 100);
console.log(numerosMaiores100);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const temBaixo = instrumentos.some(instrumento => instrumento === 'Baixo');
console.log(temBaixo);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const comprasPreco = compras.map((valor) => {
    return +valor.preco.replace('R$ ', '').replace(',', '.');
})

const valorTotal = comprasPreco.reduce((acumulador, item) => {
    return acumulador + item;
}, 0)

console.log(valorTotal);