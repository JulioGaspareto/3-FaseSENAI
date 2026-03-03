

test('should soma de 2 +  2', () => { 
    expect(2+2).toBe(4);
 })


 
 const can = {
  name: 'pamplemousse',
  ounces: 12,
};

describe('the can', () => {
  test('has 12 ounces', () => {
    expect(can.ounces).toBe(12);
  });

  test('has a sophisticated name', () => {
    expect(can.name).toBe('pamplemousse');
  });
});

const celular ={
  name: 'CelularDoJulio',
  status: 'Perdido',
};

describe('O celular de Julio', () => {
  test('celular é do julio?',()=> {
    expect(celular.name).toBe('CelularDoJulio');
  });

  test('ele ta perdido?',()=> {
    expect(celular.status).toBe('Perdido');
  });
});


const fruta1 = {
  flavor: 'grapefruit',
  ounces: 12,
};
const fruta2 = {
  flavor: 'grapefruit',
  ounces: 12,
};

describe('the La Croix cans on my desk', () => {
  test('have all the same properties', () => {
    expect(fruta1).toEqual(fruta2);
  });
  test('are not the exact same can', () => {
    expect(fruta1).not.toBe(fruta2);
  });
});


const carro1 = {
  cor: 'vermelho',
  velocidade: 120,
};
const carro2 = {
  cor: 'vermelho',
  velocidade: 120,
};

describe('Comparativo de Carros', () => {
  test('Os dois carros Sao iguais', () => {
    expect(carro1).toEqual(carro2);
  });
  test('Os dois carros Sao diferentes', () => {
    expect(carro1).not.toEqual(carro2);
  });
});