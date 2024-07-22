AOS.init();

const dataDoEvento = new Date("Dec 24, 2024 19:00:00")
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = (24 * 60 * 60 * 1000);
    const horaEmMs = (60 * 60 * 1000);
    const minutoEmMs = (60 * 1000);

    const diasAteOEvento = Math.floor((distanciaAteOEvento / diaEmMs));
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = '</br> O evento já começou!'
    }

}, 1000);