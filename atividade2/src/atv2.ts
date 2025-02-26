    type Mes =
    | number
    | 'Jan' | 'Fev' | 'Mar' | 'Abr' | 'Mai' | 'Jun'
    | 'Jul' | 'Ago' | 'Set' | 'Out' | 'Nov' | 'Dez' |'Bis';


    function validarAno(ano: number): void {
    if (ano < 1 || ano > 3000) {
        throw new Error(`O ano "${ano}" deve ser um número entre 1 e 3000.`);
    }
    }
    function mesIndice(mes:Mes): number {
    
    switch(mes){
        case 4: case 6: case 9: case 11: case 'Abr': case 'Jun':case 'Set': case 'Nov':
        return 30;
        break;
        
        case 1: case 3: case 5: case 7: case 8: case 10: case 12: case 'Jan': case 'Mar': case 'Mai': case 'Jul': case 'Ago': case 'Out': case 'Dez':
            return 31;
            break; 
        case 2: case 'Fev': 
        return 28;
            break;
            
        default:
            return 0;

    }
   
    }

    function mostrarDiasNoMes(mes: Mes, ano: number): void {  
    validarAno(ano);
    if(mesIndice(mes) === 0){
        console.log("Mês invalido");
    }
    if (mes === 2 || mes === 'Fev' && ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0)) {
        console.log(`Esse mês possui 29 dias`);
        
    }
    if(mesIndice(mes) !== 0){
        console.log(`Esse mês possui ${mesIndice(mes)} dias`);
    }
   
    }

    try {
    console.log(mostrarDiasNoMes(2, 2024));
    console.log(mostrarDiasNoMes('Fev', 2024));
    console.log(mostrarDiasNoMes('Dez', 2021));
    console.log(mostrarDiasNoMes(13, 2021));
    console.log(mostrarDiasNoMes('Set',2024));
    } catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error('Erro desconhecido:', error);
    }
    }
