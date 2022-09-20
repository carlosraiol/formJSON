let elementValue;
let isValid = true;

const getDateYear = () => {
  let dataYear = new Date();
  let dataYearFull = dataYear.getFullYear();
  return dataYearFull;
}

const getValueElement = (value) => {
  let xValue = $(value).get(0).innerText;
  return xValue;
}
  
const toastSuccess = (value) => {
  let toast = Swal.fire({
     // position: 'top-end',
      icon: 'success',
      title: 'Arquivo JSON <span class="toastsuccess">'+value.toUpperCase()+'</span> gerado com sucesso!',
      showConfirmButton: false,
      timer: 3500
  })
  return toast;
}
  
const toastError = (value) => {
  let toast = Swal.fire({
      icon: 'error',
      title: 'Os campos do formulário <span class="toasterror">'+value.toUpperCase()+'</span> devem ser preenchidos!',
  })
  return toast;
}

const procedimentoSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const formJSON = Object.fromEntries(data.entries());

  const procedimento = {
    cnpj_ug: formJSON["cnpj_ug_procedimento"],
    id_contratacao: formJSON["id_contratacao_procedimento"],
    numero_processo: formJSON["numero_processo_procedimento"],
    ano_processo: parseInt(formJSON["ano_processo_procedimento"]),
    numero_procedimento: parseInt(formJSON["numero_procedimento"]),
    ano_procedimento: parseInt(formJSON["ano_procedimento"]),
    data_publicacao: formJSON["data_publicacao_procedimento"],
    numero_lei: parseInt(formJSON["numero_lei_procedimento"]),
    ano_lei: parseInt(formJSON["ano_lei_procedimento"]),
    cod_procedimento: formJSON["cod_procedimento"],
    criterio_procedimento: parseInt(formJSON["criterio_procedimento"]),
    finalidade: parseInt(formJSON["finalidade_procedimento"]),
    sistema_pregao: formJSON["sistema_pregao_procedimento"],
    data_adesao: formJSON["data_adesao_procedimento"],
    regime_execucao: parseInt(formJSON["regime_execucao_procedimento"]),
    objeto: formJSON["objeto_procedimento"],
    valor_estimado: parseFloat(formJSON["valor_estimado_procedimento"]),
    data_sessao: formJSON["data_sessao_procedimento"],
    cpf_autoridade: formJSON["cpf_autoridade_procedimento"]
  }

  let procedimentoJSON = JSON.stringify(procedimento)
  let formatResults = procedimentoJSON.split('""').join("null");
  let blob = new Blob([formatResults], {type: "text/plain;charset=utf-8"});

  if ((formJSON["cnpj_ug_procedimento"] == "") || (formJSON["id_contratacao_procedimento"] == "") || (formJSON["numero_processo_procedimento"] == "")
  || (formJSON["ano_processo_procedimento"] == "") || (formJSON["numero_procedimento"] == "") || (formJSON["ano_procedimento"] == "")
  || (formJSON["numero_lei_procedimento"] == "") || (formJSON["ano_lei_procedimento"] == "") || (formJSON["cod_procedimento"] == "")
  || (formJSON["finalidade_procedimento"] == "") || (formJSON["regime_execucao_procedimento"] == "") || (formJSON["objeto_procedimento"] == "")
  || (formJSON["cpf_autoridade_procedimento"] == ""))  {
    isValid = false;
    toastError(elementValue);
  }else {
    isValid = true;
    if(isValid == true) {
      toastSuccess(elementValue);
      saveAs(blob, formJSON['id_contratacao_procedimento']+"_procedimento.json");
      isValid = false;
    }
    setTimeout(() => {
      $("#form-procedimento")[0].reset();
    }, 1500)
  }
  
  console.log(formatResults, isValid);
}

const resultadoSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const formJSON = Object.fromEntries(data.entries());

  const resultado = {
    id_contratacao: formJSON["id_contratacao_resultado"],
    licitacao: parseInt(formJSON["licitacao_resultado"]),
    data: formJSON["data_resultado"],
    valor: parseFloat(formJSON["valor_resultado"])
  }

  let resultadoJSON = JSON.stringify(resultado)
  let formatResults = resultadoJSON.split('""').join("null");
  let blob = new Blob([formatResults], {type: "text/plain;charset=utf-8"});

  if ((formJSON["id_contratacao_resultado"] == "") || (formJSON["licitacao_resultado"] == "") || (formJSON["data_resultado"] == "")) { 
    isValid = false;
    toastError(elementValue);
  }else {
    isValid = true;
    if(isValid == true) {
      toastSuccess(elementValue);
      saveAs(blob, formJSON['id_contratacao_resultado']+"_resultado.json");
      isValid = false;
    }
    setTimeout(() => {
      $("#form-resultado")[0].reset();
    }, 1500)
  }

  console.log(formatResults, isValid);
}
  
const ataRegistroSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const formJSON = Object.fromEntries(data.entries());

  const ataRegistro = {
    id_contratacao: formJSON["id_contratacao_ata_registro"],
    numero: formJSON["numero_ata_registro"],
    ano: parseInt(formJSON["ano_ata_registro"]),
    valor: parseInt(formJSON["valor_ata_registro"]),
    data_inicio: formJSON["data_inicio_ata_registro"],
    data_fim: formJSON["data_fim_ata_registro"]
  }

  let ataRegistroJSON = JSON.stringify(ataRegistro)
  let formatResults = ataRegistroJSON.split('""').join("null");
  let blob = new Blob([formatResults], {type: "text/plain;charset=utf-8"});

  if ((formJSON["id_contratacao_ata_registro"] == "") || (formJSON["numero_ata_registro"] == "") || (formJSON["ano_ata_registro"] == "")
  || (formJSON["valor_ata_registro"] == "") || (formJSON["data_inicio_ata_registro"] == "") || (formJSON["data_fim_ata_registro"] == "")) { 
    isValid = false;
    toastError();
  }else {
    isValid = true;
    if(isValid == true) {
      toastSuccess(elementValue);
      saveAs(blob, formJSON['id_contratacao_ata_registro']+"_ata_registro.json");
      isValid = false;
    }
    setTimeout(() => {
      $("#form-ata-registro")[0].reset();
    }, 1500)
  }
  
  console.log(formatResults, isValid);
}

const cadOrgaoSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const formJSON = Object.fromEntries(data.entries());

  const cadOrgao = {
    id_contratacao: formJSON["id_contratacao_cadastro_orgao"],
    numero: formJSON["numero_cadastro_orgao"],
    ano: parseInt(formJSON["ano_cadastro_orgao"]),
    cnpj_ug: formJSON["cnpj_ug_cadastro_orgao"],
    perfil: formJSON["perfil_cadastro_orgao"]
  }

  let cadOrgaoJSON = JSON.stringify(cadOrgao)
  let formatResults = cadOrgaoJSON.split('""').join("null");
  let blob = new Blob([formatResults], {type: "text/plain;charset=utf-8"});

  if ((formJSON["id_contratacao_cadastro_orgao"] == "") || (formJSON["numero_cadastro_orgao"] == "") || (formJSON["ano_cadastro_orgao"] == "")
  || (formJSON["cnpj_ug_cadastro_orgao"] == "") || (formJSON["perfil_cadastro_orgao"]) == "") { 
    isValid = false;
    toastError(elementValue);
  }else {
    isValid = true;
    if(isValid == true) {
      toastSuccess(elementValue);
      saveAs(blob, formJSON['id_contratacao_cadastro_orgao']+"_cadastro_orgao.json");
      isValid = false;
    }
    setTimeout(() => {
      $("#form-cadastro-orgao")[0].reset();
    }, 1500)
  }
  
  console.log(formatResults, isValid);
}

const cadLicitanteSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const formJSON = Object.fromEntries(data.entries());

  const cadLicitante = {
    id_contratacao: formJSON["id_contratacao_cadastro_licitante"],
    estrageiro: formJSON["estrageiro_cadastro_licitante"],
    cpf_cnpj: formJSON["cpf_cnpj_cadastro_licitante"],
    numero: formJSON["numero_cadastro_licitante"],
    ano: parseInt(formJSON["ano_cadastro_licitante"])
  }

  let cadLicitanteJSON = JSON.stringify(cadLicitante)
  let formatResults = cadLicitanteJSON.split('""').join("null");
  let blob = new Blob([formatResults], {type: "text/plain;charset=utf-8"});

  if ((formJSON["id_contratacao_cadastro_licitante"] == "") || (formJSON["estrageiro_cadastro_licitante"] == "") 
  || (formJSON["cpf_cnpj_cadastro_licitante"] == "") || (formJSON["numero_cadastro_licitante"] == "") || (formJSON["ano_cadastro_licitante"] == "")) { 
    isValid = false;
    toastError(elementValue);
  }else {
    isValid = true;
    if(isValid == true) {
      toastSuccess(elementValue);
      saveAs(blob, formJSON['id_contratacao_cadastro_licitante']+"_cadastro_licitante.json");
      isValid = false;
    }
    setTimeout(() => {
      $("#form-cadastro-licitante")[0].reset();
    }, 1500)
  }
  
  console.log(formatResults, isValid);
}

const contratoSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const formJSON = Object.fromEntries(data.entries());

  const contrato = {
    cnpj_ug: formJSON["cnpj_ug_contrato"],
    numero_processo: formJSON["numero_processo_contrato"],
    ano_processo: parseInt(formJSON["ano_processo_contrato"]),
    numero_contrato: parseInt(formJSON["numero_contrato"]),
    ano_contrato: parseInt(formJSON["ano_contrato"]),
    id_contratacao: formJSON["id_contratacao_contrato"],
    id_contrato: formJSON["id_contrato"],
    cpf_cnpj: formJSON["cpf_cnpj_contrato"],
    objeto: formJSON["objeto_contrato"],
    tipo: formJSON["tipo_contrato"],
    data_assinatura: formJSON["data_assinatura_contrato"],
    data_inicio: formJSON["data_inicio_contrato"],
    data_fim: formJSON["data_fim_contrato"],
    valor: parseFloat(formJSON["valor_contrato"]),
  }

  let contratoJSON = JSON.stringify(contrato)
  let formatResults = contratoJSON.split('""').join("null");
  let blob = new Blob([formatResults], {type: "text/plain;charset=utf-8"});

  if ((formJSON["cnpj_ug_contrato"] == "") || (formJSON["numero_processo_contrato"] == "") || (formJSON["ano_processo_contrato"] == "") 
  || (formJSON["numero_contrato"] == "") || (formJSON["ano_contrato"] == "") || (formJSON["id_contratacao_contrato"] == "")
  || (formJSON["id_contrato"] == "") || (formJSON["cpf_cnpj_contrato"] == "") || (formJSON["objeto_contrato"] == "")
  || (formJSON["tipo_contrato"] == "") || (formJSON["data_assinatura_contrato"] == "") || (formJSON["data_inicio_contrato"] == "")
  || (formJSON["data_fim_contrato"] == "") || (formJSON["valor_contrato"] == ""))  {
    isValid = false;
    toastError(elementValue);
  }else {
    isValid = true;
    if(isValid == true) {
      toastSuccess(elementValue);
      saveAs(blob, formJSON['id_contrato']+"_contrato.json");
      isValid = false;
    }
    setTimeout(() => {
      $("#form-contrato")[0].reset();
    }, 1500)
  }
    
  console.log(formatResults, isValid);
}

const sancaoSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const formJSON = Object.fromEntries(data.entries());

  const sancao = {
    id_contratacao: formJSON["id_contratacao_sancao"],
    id_contrato: formJSON["id_contrato_sancao"],
    cpf_cnpj: formJSON["cpf_cnpj_sancao"],
    tipo: parseInt(formJSON["tipo_sancao"]),
    data_notificacao: formJSON["data_notificacao_sancao"],
    data_inicio: formJSON["data_inicio_sancao"],
    data_fim: formJSON["data_fim_sancao"],
    amplitude: formJSON["amplitude_sancao"]
  }

  let sancaoJSON = JSON.stringify(sancao)
  let formatResults = sancaoJSON.split('""').join("null");
  let blob = new Blob([formatResults], {type: "text/plain;charset=utf-8"});

  if ((formJSON["id_contratacao_sancao"] == "") || (formJSON["cpf_cnpj_sancao"] == "") || (formJSON["tipo_sancao"] == "")
  || (formJSON["data_notificacao_sancao"] == "") || (formJSON["amplitude_sancao"] == "")) { 
    isValid = false;
    toastError(elementValue);
  }else {
    isValid = true;
    if(isValid == true) {
      toastSuccess(elementValue);
      saveAs(blob, formJSON['id_contratacao_sancao']+"_sancao.json");
      isValid = false;
    }
    setTimeout(() => {
      $("#form-sancao")[0].reset();
    }, 1500)
  }
  
  console.log(formatResults, isValid);
}

$("#btn_gera_json_procedimento").click(function(){
  elementValue = getValueElement("#v-pills-procedimento-tab");
  if (isValid == true) {
    $("#form-procedimento").submit(procedimentoSubmit);
  }
});
  
$("#btn_gera_json_resultado").click(function(){
  elementValue = getValueElement("#v-pills-resultado-tab");
  if (isValid == true) {
    $("#form-resultado").submit(resultadoSubmit);
  }
});

$("#btn_gera_json_ata_registro").click(function(){
  elementValue = getValueElement("#v-pills-ata-registro-tab");
  if (isValid == true) {
    $("#form-ata-registro").submit(ataRegistroSubmit);
  }
});

$("#btn_gera_json_cadastro_orgao").click(function(){
  elementValue = getValueElement("#v-pills-cadastro-orgao-tab");
  if (isValid == true) {
    $("#form-cadastro-orgao").submit(cadOrgaoSubmit);
  }
});

$("#btn_gera_json_cadastro_licitante").click(function(){
  elementValue = getValueElement("#v-pills-cadastro-licitante-tab");
  if (isValid == true) {
    $("#form-cadastro-licitante").submit(cadLicitanteSubmit);
  }
});

$("#btn_gera_json_contrato").click(function(){
  elementValue = getValueElement("#v-pills-contrato-tab");
  if (isValid == true) {
    $("#form-contrato").submit(contratoSubmit);
  }
});

$("#btn_gera_json_sancao").click(function(){
  elementValue = getValueElement("#v-pills-sancao-tab");
  if (isValid == true) {
    $("#form-sancao").submit(sancaoSubmit);
  }
});

$("body").ready(function(){
  $("#date-year").text(getDateYear());
});