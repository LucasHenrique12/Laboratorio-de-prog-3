type Mes =
  | number
  | 'Jan' | 'Fev' | 'Mar' | 'Abr' | 'Mai' | 'Jun'
  | 'Jul' | 'Ago' | 'Set' | 'Out' | 'Nov' | 'Dez';

const diasNoMes: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validarAno(ano: number): void {
  if (ano < 1 || ano > 3000) {
    throw new Error(`O ano "${ano}" deve ser um número entre 1 e 3000.`);
  }
}
function mesIndice(mes:Mes): void {
  
  switch(mes){
    case 4: case 6: case 9: case 11: case 'Abr': case 'Jun':case 'Set': case 'Nov':
      console.log("Esse mês tem 30 dias");
      break;
    
      case 1: case 3: case 5: case 7: case 8: case 10: case 12: case 'Jan': case 'Mar': case 'Mai': case 'Jul': case 'Ago': case 'Out': case 'Dez':
        console.log("Esse mês tem 31 dias");
        break; 
        case 2:
          console.log("Fevereiro tem 28 dias");
          break;
      default:
          console.log("Mês inválido"); 

  }
  

}

function obterIndiceMes(mes: Mes): number {
  if (typeof mes === 'number') {
    if (mes < 1 || mes > 12) {
      throw new Error(`O mês "${mes}" deve ser um número entre 1 e 12.`);
    }
    return mes - 1;
  }

  const mapMeses: Record<Mes, number> = {
    Jan: 0, Fev: 1, Mar: 2, Abr: 3, Mai: 4, Jun: 5,
    Jul: 6, Ago: 7, Set: 8, Out: 9, Nov: 10, Dez: 11,
  };

  return mapMeses[mes];
}

function obterDiasNoMes(mes: Mes, ano: number): number {
  validarAno(ano);
  const indiceMes = obterIndiceMes(mes);
  if (indiceMes === 1 && ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0)) {
    return 29;
  }
  return diasNoMes[indiceMes];
}

try {
  console.log(obterDiasNoMes(2, 2024));
  console.log(obterDiasNoMes('Fev', 2023));
  console.log(obterDiasNoMes('Dez', 2021));
  console.log(obterDiasNoMes(13, 2021));
  console.log(obterDiasNoMes('Set',2024));
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error('Erro desconhecido:', error);
  }
}
