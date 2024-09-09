import { useEffect, useState } from "react";

// Declarando função relógio

function Relogio() {

    // Declarando hora como estado

    const [hora, setHora] = useState('');

    // Chamando função pós carregamento

    useEffect(() => {

        // Chamando função de Atualizar Horário primeira vez

        atualizaHorario();

        // Declarando intervalo de 1 segundo para atualizar relógio

        const intervalo = setInterval(atualizaHorario, 1000);
        return () => {

            clearInterval(intervalo);
        }
        //console.log('teste');
    }, []);


    // Declarando função que atribui a hora minutes e segundos atuais

    function atualizaHorario() {

        // Declarando Objeto de tipo Date

        const agora = new Date();

        // Pegando hora, minutos e segundos

        const horaMinutosSegundos = agora.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        // Atualizando o estado hora para hora minutos e segundos atuais

        setHora(horaMinutosSegundos);
    }

    return (

        // Retornando uma div com a hora minutos e segundos de forma correta

        <div>{hora}</div>
    )

}

export default Relogio;