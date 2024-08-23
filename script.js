function criartabela() {
    // Verifica se a tabela já existe
    let tabela = document.querySelector('#tabela');
    if (tabela) {
        // Se a tabela já existir, limpa o conteúdo
        tabela.remove();
    }

    tabela = document.createElement('table');
    tabela.id = 'tabela';
    tabela.style.border = '2px solid';

    let theadCabeca = document.createElement('thead');

    let tdThead = document.createElement('td');
    tdThead.colSpan = '5';
    tdThead.innerHTML = 'Tabela de Descontos do Salário';
    theadCabeca.appendChild(tdThead);

    let tbodyCorpo = document.createElement('tbody');

    let trprimeiro = document.createElement('tr');
    let thprimeiro = document.createElement('th');
    thprimeiro.innerHTML = 'Salário Bruto';
    trprimeiro.appendChild(thprimeiro);

    let tdprimeiro = document.createElement('td');
    tdprimeiro.id = 'salario_bruto';
    trprimeiro.appendChild(tdprimeiro);

    let trsegundo = document.createElement('tr');
    let thsegundo = document.createElement('th');
    thsegundo.innerHTML = 'IR';
    trsegundo.appendChild(thsegundo);

    let tdsegundo = document.createElement('td');
    tdsegundo.id = 'ir';
    trsegundo.appendChild(tdsegundo);

    let trterceiro = document.createElement('tr');
    let thterceiro = document.createElement('th');
    thterceiro.innerHTML = 'INSS';
    trterceiro.appendChild(thterceiro);

    let tdterceiro = document.createElement('td');
    tdterceiro.id = 'inss';
    trterceiro.appendChild(tdterceiro);

    let trquarto = document.createElement('tr');
    let thquarto = document.createElement('th');
    thquarto.innerHTML = 'FGTS';
    trquarto.appendChild(thquarto);

    let tdquarto = document.createElement('td');
    tdquarto.id = 'fgts';
    trquarto.appendChild(tdquarto);

    let trquinto = document.createElement('tr');
    let thquinto = document.createElement('th');
    thquinto.innerHTML = 'Total de Desconto';
    trquinto.appendChild(thquinto);

    let tdquinto = document.createElement('td');
    tdquinto.id = 'total_desconto';
    trquinto.appendChild(tdquinto);

    let trsexto = document.createElement('tr');
    let thsexto = document.createElement('th');
    thsexto.innerHTML = 'Salário Líquido';
    trsexto.appendChild(thsexto);

    let tdsexto = document.createElement('td');
    tdsexto.id = 'salario_liquido';
    trsexto.appendChild(tdsexto);

    let tfootPe = document.createElement('tfoot');
    let tdPe = document.createElement('td');
    tdPe.colSpan = '5';
    tdPe.innerHTML = 'Parabéns pelo trabalho duro!';
    tfootPe.appendChild(tdPe);

    tbodyCorpo.appendChild(trprimeiro);
    tbodyCorpo.appendChild(trsegundo);
    tbodyCorpo.appendChild(trterceiro);
    tbodyCorpo.appendChild(trquarto);
    tbodyCorpo.appendChild(trquinto);
    tbodyCorpo.appendChild(trsexto);

    tabela.appendChild(theadCabeca);
    tabela.appendChild(tbodyCorpo);
    tabela.appendChild(tfootPe);

    document.body.append(tabela);
}

function getValue() {
    criartabela(); // Cria a tabela antes de preencher os valores

    let horas = document.querySelector("#Horas").value;
    let ValorHoras = document.querySelector("#SalarioHora").value;
    let tagSB = document.querySelector('#salario_bruto');
    let tagIR = document.querySelector('#ir');
    let tagIS = document.querySelector('#inss');
    let tagFS = document.querySelector('#fgts');
    let tagTD = document.querySelector('#total_desconto');
    let tagSL = document.querySelector('#salario_liquido');

    let salario = horas * ValorHoras;
    const IR = salario <= 900 ? "ISENTO" : (salario >= 900 && salario <= 1500) ? (salario * (5/100)) : (salario > 1500 && salario <= 2500) ? (salario * (10/100)) : (salario >= 2500) ? (salario * (20/100)) : "Error 404: Problema com cálculo IR";
    const inss = salario * (10/100);
    const fgts = salario * (11/100);
    const totalDesconto = IR == "ISENTO" ? (inss) : (inss + IR);
    const salarioLiquido = IR == "ISENTO" ? (salario - inss) : (salario - IR - inss);

    let formateDindin = new Intl.NumberFormat('pt-BR', 
        {
            style: 'currency',
            currency: 'BRL',
        });
    

    if (salario <= 900){
        tagSB.innerHTML = formateDindin.format(salario);
        tagIR.innerHTML = IR;
        tagIS.innerHTML = formateDindin.format(inss);
        tagFS.innerHTML = formateDindin.format(fgts);
        tagTD.innerHTML = formateDindin.format(totalDesconto);
        tagSL.innerHTML = formateDindin.format(salarioLiquido);

    } else if (salario >= 900 && salario <= 1500) {
        tagSB.innerHTML = formateDindin.format(salario);
        tagIR.innerHTML = formateDindin.format(IR);
        tagIS.innerHTML = formateDindin.format(inss);
        tagFS.innerHTML = formateDindin.format(fgts);
        tagTD.innerHTML = formateDindin.format(totalDesconto);
        tagSL.innerHTML = formateDindin.format(salarioLiquido);

    } else if (salario > 1500 && salario <= 2500) {
        tagSB.innerHTML = formateDindin.format(salario);
        tagIR.innerHTML = formateDindin.format(IR);
        tagIS.innerHTML = formateDindin.format(inss);
        tagFS.innerHTML = formateDindin.format(fgts);
        tagTD.innerHTML = formateDindin.format(totalDesconto);
        tagSL.innerHTML = formateDindin.format(salarioLiquido);

    } else if (salario >= 2500) {
        tagSB.innerHTML = formateDindin.format(salario);
        tagIR.innerHTML = formateDindin.format(IR);
        tagIS.innerHTML = formateDindin.format(inss);
        tagFS.innerHTML = formateDindin.format(fgts);
        tagTD.innerHTML = formateDindin.format(totalDesconto);
        tagSL.innerHTML = formateDindin.format(salarioLiquido);

    } else {
        let tagP = document.createElement('p');
        tagP.innerHTML = "Valor digitado não aceito, por favor tente novamente.";
        document.body.append(tagP);
    }
}
