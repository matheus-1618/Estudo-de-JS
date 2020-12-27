//Resumindo comandos básicos de JS
//Para utilziar um depurador em terminal web, criar um arquivo tipo .html
//Codigo base utilizado em home.html, onde "script.scr" corresponde a fonte de dados dada em .js para o depurador online


//Exbindo algo no console
console.log('Something');//Pode-se declarar qualquer tipo de objeto neste espaço

//declarando variáveis
let something = 5; // pode-se declarar booleana,string,numero e etc.
//esta estrutura esta sujeita a mudanças
something =' nova coisa';

//declarando constantes
const nothing = 3; // declara-se qualquer tipo, mas não sujeito a alterações

//criando objetos

let object = {
    name:'jay',
    sex:'male',
    intentions:'go ahead',
    scolarship:45
}; // estrutura bastante parecida com um dicionário em python, com mesmo esquema de 
//chaves e valores, podendo sendo gerar no console analogo a uma variável. Neste é possível guardar um conjuneto de valores e variáveis.

//criando arrays
let list= [1,2,3,4];
//estrutura bastante parecida com listas em python. Para ter seu tamanho basta utilziar o comando .lenght 
//O Acesso a elementos pode ser feito com indices similar ao utilizado em python


//definindo funções, usa-se o comando 'function', estabelece o nome da função, e abre-se parenteses, representando os argumentos cedidos a esta.

function função(){

};// a função inicialmente, pode ser usada como um modificador, isto é alterar alguma variável definida anteriormente.
//Para chamar uma função ja é definida basta utilizar:
função(); //desssa forma a função já executa o solicitado conforme o corpo estabelecido  internamente.

//tipos de funções:

//função que realiza tarefas e não devolve ou modifica algo
function printar(){
    console.log('printando pai');
};
printar()

//função que retorna algo modificado
function Modifica(valor){
    retornado=2*valor;
    return retornado
};
console.log(Modifica(3));

//operadores
//operador artimético(+,=,/,*)
console.log(5**2);

//operador de incremento (++,--), funções análogas a += e -= em python
let m=1;
console.log(m++);
console.log(m); //ou
console.log(++m)// analogo para --, utilizando esses increento antes ele realiza antes da exibição, depois, mostra como um generator.

//operador de atribuição.
//simultâmneo ao que ja fazíamos ao atribuir valores ou operadores
let somevalue= 50;
somevalue+=somevalue;//válido para menos também
console.log(somevalue);

//operador de igualdade, mais recomendada
//igualdade estrita
console.log(1===1);//compara o valor e o tipo, gera true em caso afirmativo

//igualdade solta
console.log(1==1);
console.log('1'==1);//não compara o tipo, apenas os valores guardados

//operador ternário
let kaido = 130;
let tipo = kaido >= 130 ? 'john' : 'lixo';//'?' siginfica if, e ':' caso contrario, 'else'.
console.log(tipo);

//operador lógico 'e' (&&)
//retorna TRUE se os dois operandos forem true
console.log(true && true);//retorna True
console.log(false && true);//retorna False
//com variáveis
const carteira=true;
const carreira=false;
let permitido= carreira && carteira;
console.log(permitido)//return false

//operador lógico 'ou' (||)
//return true se pelo menos um dos operando é true
const jg=true;
const mh=false;
let example= jg || mh;
console.log(example);//return true

//operador NOT(!)
let refused= !example;//condição necessária para negação
console.log(refused);
//OBS ao comparar um booleano com qual outro tipo, em geral retorna-se o tipo, seja em or ou em and

//Condicionais
//Temos if..else e switch..case

//if else
let mi=5;
let g = 6;
if (mi>4){
    g-=1;
}
else if(mi==1){
    g+=0
}
else { 
    g+=1;
};
console.log(mi,g);
//OBS: não ponha ; até a ultima condicional colocada para não atraplahar no fluxo de leitura do JS no depurador

//switch tip
//define-se uma variável qualquer e divide-se em casos póstumos no programa
let movies;//action,horror and comedy
movies='action';
switch(movies){
    case 'action':
    console.log('o Filme é de ação');
    break;

    case 'horror':
    console.log('o Filme é de terror');
    break;

    case 'comedy':
    console.log('o Filme é de comédia');
    break;

    default:
    console.log('O filme não foi encontrado :(');

};

//laços de repetição
//laço For
for(let cont =0;cont<3;cont++) {
    //define-se o valor inicial, condição de andamento e o que adiconar
    console.log('Vamos la parça',cont+1);
};
console.log('\n');
//utilizando booleanas e estudo de casos dentro de um laço
for(let count=0;count<=6;count+=1){
    if(count % 2 != 0){
        console.log('parção dos bons',count);
    }
    else{
        console.log('deu nao manin',count);
    }
};
console.log('\n');

//laço while
let t=0; //define-se a variável fora do loop
while (t<=5){
    console.log(t+1);
    t++;

};
console.log('\n');

//laço do...while
let i=1;
do {
    console.log('typing...',i);
    i+=1;
} while(i<5)
console.log('\n');

//laço for-in
//iteiração sobre indices
const Oda={
    interest:'One piece',
    fandom:'etc'
};
for(let something in Oda){
    console.log(something,':',Oda[something]);
};
console.log('\n');

const characters=['Luffy','Shanks','Gol.d'];
for(let pirate in characters) {
    console.log(characters[pirate]);
};
console.log('\n');

//laço for-of, 
//iteiração sobre itens
//melhora a exibição de elementos de um array ou em um dicionário de maneira mais simples doq ue com o for-in
for (let king of characters){
    console.log(king);
};
console.log('\n');

//exemplos de funções 
//verificador de velocidade
function verificarVelocidade(velocidade){
    console.log('Velocidade máxima de 70 km/h')
    if (velocidade>70){
        let m= Math.floor((velocidade -70)/5);
        if (m<12){
            return "Você tem "+m+" pontos.";
        }
        else{
            return "Você tem "+m+" pontos, e sua carteira foi suspendida.";
        }
    }
    else{
        return "Ok";
    }
};
console.log(verificarVelocidade(130));
console.log('\n');
//propriedades de um objeto
function exibirPropriedades(filme){
    for (let m in filme) {
        if (typeof filme[m] != 'string'){
            continue;
        }
        else{
            console.log(m,":",filme[m])
        }
    } 
    return "Finish";
};
const sla={
    nome:'wewe',
    dsds:312,
    sddsds:'e22',
    sdsda:'ewe'
};
console.log(exibirPropriedades(sla));
console.log('\n');
//soma de multiplos de 3 e 5
function somar(number){
    let something=0;
    for(let i=0;i<=number;i++){
        if (i % 3 ===0){

            something+=i;

        }
        else if(i % 5 ===0){

            something+=i;
   
        }
        else{
            continue;
        }
    };
    return "A soma é "+something;

};
console.log(somar(10));
console.log('\n');
//média de uma lista
function mediaDoAluno(notas){
    const x=notas.length;
    let anything =0;
    for (m of notas){
        anything+=m;
    };
    let lop=anything / x;
    console.log('Sua nota é ',lop);
    if (lop<=59){
        return 'F';
    }
    else if (lop>59 && lop<=69){
        return 'D';
    }
    else if (lop>69 && lop<=79){
        return 'C';
    }
    else if (lop>79 && lop<=89){
        return 'B';
    }
    else{
        return 'A';
    };

};
console.log(mediaDoAluno([12,42,45,62]));
console.log('\n');
//exibe primos
function exibirPrimos(numero){
    for(let i =1;i<=numero;i++){
        if(i==2){
            console.log(i);
        }
        else if(i%2==0 ){
            continue;
        }
        else{
            for(let k=1;k<i;k++){
                if (i%k==0){
                    continue;
                }
                else{
                    console.log(i);
                    break;
                };
            }
        }
    }
    return 'Finished';
};
console.log(exibirPrimos(13));
console.log('\n');

//Factory funções / Funções de fábrica
//camelCase
//encapsula informações dentro de métodos que caracterizam o objeto
function objetc(p1,p2,p3,p4){
    return{
        Name:p1,
        size:{
            l:12,
            r:p2
        },
        capacity:p3,
        lay () {
            console.log('Lay down..')
        }
    }
};
console.log(objetc(1,2,3,4))/
console.log('\n');

//constructor functions, Pascal Case
//similar a OOP de python, in class e methods
function new_world(continent,something,nothing){
    this.continent=continent,
    this.something=something,
    this.nothing=nothing,
    this.callin = function(){
        console.log('Calling mtf..');
    }
}

const earth= new new_world('Pangeia',123,'cake');
console.log(earth);
console.log('\n');

//natureza dinâmica de objetos
const whitebeard={
    yonkou:'Yes',
    alive:'No'
}
whitebeard.length='BIG';
whitebeard.Let= function(){
    console.log('sds')
};
console.log(whitebeard);
console.log('\n');

//Clonando objetos já declarados
//usando o .assign
const newEdward = Object.assign({
    battlePower:3000
},whitebeard);
console.log(newEdward)
//usando o spread {...}
const newEdward1 = {...whitebeard};
console.log(newEdward1);
console.log('\n');

//biblioteca Math
Math.random()//valores aleatorios
Math.max()//valores máximos dados em um array ou tupla
Math.min()//valores minimos

//strings
//Tipo primitivo
const letra='kkk';
//tipo objeto
const letrao = new String('olha la');
//diferença é basicamente o encapsulamento gerado pela memória
//muito dos métodos utilizados são os mesmos de python
//lembrar do importante replace
m= letra.replace('kk','matheus');
console.log(m);
console.log('\n');

//template literal, messagem dinâmica com `
//para substiuição basta usar ${}
const hj ='mein';
const message= 
`E ae ${ hj}
Obrigado Por se Manter aqui
Agradeço o Apoio`;
console.log(message);
console.log('\n');

//Date
//Tipo de dado que podemos sobrescrever na leitura do console
//Pode-se criar datas quaisquer de acordo com o solcitado pelo usuário
//ou tomar como padrão, definido pelo vazio.
// temos as funções set e get que podem gerar ou alterar 
//fatos específicos sobre uma determinada data gerada
const data1= new Date();
data1.setHours(12);
console.log(data1);
//Para transformar um objeto data em stirng basta utilziar
//o médoto .toDatestring() ou to.TimeString()[este último mais completo
//visto que irá dar dados também sobre o GMT
console.log('\n');

//Criando objetos endereços, comparando propriedades e locais de memoria
function Endereco(rua, cidade, cep){
    this.rua=rua,
    this.cidade=cidade,
    this.cep
};
const endereco1 = new Endereco(1,2,3);
const endereco2= new Endereco(1,2,3);
function saoIguais(end1,end2){
    return end1.rua==end2.rua && end1.cidade==end2.cidade && end1.cep==end2.cep;
    //comparar propriedades

};
function temEnderecoIgual(end1,end2){
    return end1===end2;
    //comparar a referencia do objeto na memoria
};
console.log(saoIguais(endereco1,endereco2));
console.log(temEnderecoIgual(endereco1,endereco2));
console.log('\n');

//comparando objeto estanciado e uma função construtora
//Construtora
function Postagem(titulo,mensagem,autor,vizualizacoes,comentarios,estaAoVivo){
    this.titulo=titulo,
    this.mensagem=mensagem,
    this.autor=autor,
    this.vizualizacoes=vizualizacoes,
    this.comentarios=comentarios,
    this.estaAoVivo=estaAoVivo
};

const anything= new Postagem('Nois','poise camarada, sei n','Matheuszi',123,[{Joao:'Legal'},{Juca:'Discordo'}],true);
console.log(anything)

//objeto instanciado
let postagem= {
    mensagem:'',
    autor:'',
    vizualizacoes:0,
    comentarios:{
        autor:'autor',
        mensagem:'mensagem'
    },
    estaAoVivo:false
};
postagem.mensagem='Eae rapeize';
postagem.autor='Matheuszin';
postagem.vizualizacoes=123;
postagem.comentarios.autor='Joao Jeslei';
postagem.comentarios.mensagem='Boa pikoroso';
postagem.estaAoVivo=true;
console.log(postagem);
console.log('\n');

//Introdução a Arrays

//Adicionando elementos a um array
const lista = [13,16,19];
//Adicionando numeros no inicio/pilha
lista.unshift(12);
console.log(lista);
console.log('\n');
//Adicionando numeros no meio do array
lista.splice(1,0,'haha');//Indice de substituição, quanitdade de elementos existentes para excluir no array, e o que substituir
console.log(lista);
console.log('\n');
//Adicionando no final
lista.push('PelamordeDeusmaluco');
console.log(lista);
console.log('\n');

//Encontrando elementos no array(Primitivo)
const listao = [16,18,124,16];
listao.indexOf(124);//retorna no console o index do elemento procurado
listao.lastIndexOf(16);//retorna  a ultima ocorrencia do termo procurado
//para ver se um número está em uma lista:
listao.includes(18);//retorna um booleano

//Encontrando elementos no array(Referência)

const objetos=[
    {his_name:'anythinh',age:112},
    {his_name:'a',age:122},
    {his_name:'b',age:12},
    {his_name:'anytdhinh',age:102},
    {his_name:'t',age:1122}
];
//criando uma função que irá receber o parametro buscado
const parameter=objetos.find(function(parameter){
    return parameter.age !==12;
});
console.log(parameter);
console.log('\n');

//Arrow Functions
//Modificando a estrutura anterior para se ter uma base
//Substitui-se function por apenas a seta =>
console.log(objetos.find((parameter) => {
    return parameter.age ===12;
}));
console.log('\n');

//Removendo elementos de um array
const lista5=[1,2,3,4,5];
//método para remover elementos no final
const n= lista5.pop();
console.log('A lista atualizada é',lista5,'e o removido é',n,'\n');
//método para remover elementos no início
const y=lista5.shift();
console.log(lista5,y,'\n');
//método para remover elementos no meio
//mais útil que os outros visto que também cumpre a fução dos outros
const hg = lista5.splice(0,1)//Índice de início da remoção e depois quantos a serrem removidos
console.log(hg,lista5,'\n')

//Combinando e cortando arrays
const um=[1,2,4];
const dois=[34,5,7];
//para combinar:
const comb=um.concat(dois);
console.log(comb,'\n');
//Para dividir
const comb1=comb.slice(1,3);//Indice de inicio e o ultimo(um menos o indicado) indice de retirada
console.log(comb1,'\n');

//Operador Spread, mais simples que os métodos anteriores
const novo_combinado=[...um,...dois]//seguir essa estrutura
console.log(novo_combinado,'\n')

//Foreach
//Como iterar sobre elementos em uma array comunente:
const you=[1,2,3,4,5]
for (us of you){
    console.log(us,'\n');
};
//Utilizando o metodo Foreach
//Estrutura normal
you.forEach(function(our){
    console.log(our,'\n');
});
//Utilizando o arrow function
you.forEach((numero,indice) => console.log(numero,'and its index is',indice));
console.log('\n');

//Combinando arrays
//Adicionando, por exemplo uma string entre os pontos
const lyst=['abacate',1,4,1,12,'seila'];
const mudando=lyst.join('.');//Bem parecido com o método utilizado em python
console.log(mudando,'\n');
//Separando alguns termos de uma string, bem parecindo com python
const frase= "KKK eai mano, quanto tempo em."
const nova_frase= frase.split(" ");
console.log(nova_frase,'\n');
console.log(frase,'\n');
console.log(nova_frase.join('-'));//Utilizado para trnasformar listas em strings depois com algum separador

//Receber dados, INPUT
//Prompt gera uma pergunta no terminal, para receber o dado
let anything2 =prompt('Fala ai mane...','Uma','Duas');
if (anything2=='Ger'){
    //alert exibe algum aviso e informação ao usuario
    alert('Sai dae doidao');
    console.log('Nois pia')
};

//Manipulação de DOM
//Video indicado na URL de 4:20 até 4:26
console.log('12');