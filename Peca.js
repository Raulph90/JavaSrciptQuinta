var dataEvento = prompt("agora, Informe a data do evento no formato DD/MM/AAAA");
var qtdParts = 99;
dataEvento = dataEvento.replaceAll('/','');
console.log("dataEvento =>  ",dataEvento)
const data = new Date();
console.log("data =>  ",data)
var mMes = (data.getMonth() + 1)
if (mMes < 10) {mMes = "0" + mMes }
//const hoje = (data.getDate() + '-' +  mMes + '-' + data.getFullYear()).replaceAll("-","");
 const     hoje = (data.getFullYear() + '-' +  mMes + '-' + data.getDate()).replaceAll("-","")
console.log("hoje =>  ",hoje)
if(dataEvento >= hoje){
    var idade = prompt("informe a sua idade ?");
    if(idade < 18){
        window.alert(`Você não tem idade para participar do evento! Você tem ${idade} anos.`);
    }else if(idade > 18 && qtdParts < 100){
        window.alert(` concluído com sucesso! Você tem ${idade} anos.`)
    }else{
        window.alert(` A quantidade de participantes já foi atingida.`)
    }
}
else{
    window.alert(`Data Inválida tente mais tarde - linha 20`)
}