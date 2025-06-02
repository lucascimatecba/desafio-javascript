
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, imagem){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.roda = roda;
       this.volumeCacamba = volumeCacamba;
       this.imagem = imagem;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            if(carArr.length >= 2) {
                alert("Você só pode marcar 2 veículos para apresentar a comparação");
                el.checked = false;
                return;
            }
            if (GetCarArrPosition(carArr, carClass) === -1) {
                carArr.push(carClass);
            }
        } else {
          const index = GetCarArrPosition(arr, carClass);
          if (index !== -1) {
            carArr.splice(index, 1);
          }
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none";
    carArr = [];
    document.querySelectorAll('input[type="checkbox"].checkbox').forEach(cb => cb.checked = false);
}

function UpdateCompareTable() {
    for (let i = 0; i < 2; i++) {
        const car = carArr[i];

        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${car.imagem}" style="width: 100px;">`;
        document.getElementById(`compare_modelo_${i}`).innerText = car.nome;
        document.getElementById(`compare_alturacacamba_${i}`).innerText = `${car.alturaCacamba} mm`;
        document.getElementById(`compare_alturaveiculo_${i}`).innerText =  `${car.alturaVeiculo} mm`;
        document.getElementById(`compare_alturasolo_${i}`).innerText = `${car.alturaSolo} mm`;
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = `${car.capacidadeCarga} kg`;
        document.getElementById(`compare_motor_${i}`).innerText =  `${car.motor} L`;
        document.getElementById(`compare_potencia_${i}`).innerText =  `${car.potencia} cv`;
        document.getElementById(`compare_volumecacamba_${i}`).innerText =  `${car.volumeCacamba} L`;
        document.getElementById(`compare_roda_${i}`).innerText = car.roda;
        document.getElementById(`compare_preco_${i}`).innerText = `R$ ${car.preco.toLocaleString('pt-BR')}`;
    }
   
}
