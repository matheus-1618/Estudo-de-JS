function VerificarEntrada(){
    NomeConvidado= document.getElementById('nome').value;
    Convidados=['Matheus','Joao']
    if(Convidados.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText="Voce pode chefe"
    }
    else{
        document.getElementById('PermissaoDeEntrada').innerText='KK sai fora ai ze'
    }
}