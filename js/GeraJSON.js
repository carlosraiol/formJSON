let elementValue;
let formReset;
let isValid = true;

const getDateYear = () => {
  let dataYear = new Date();
  let dataYearFull = dataYear.getFullYear();
  return dataYearFull;
}

const toastSuccess = () => {
  let toast = Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Arquivo JSON gerado com sucesso!',
    showConfirmButton: false,
    timer: 2500
  })
  return toast;
}

const toastError = () => {
  let toast = Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'O(s) campo(s) deve(m) ser preenchido(s)!',
  })
  return toast;
}

const getValueElement = (value) => {
  let xValue = $(value).get(0).innerText;
  let xValueUnder = xValue.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  return xValueUnder.split(" ").join("_");
}

const getFormReset = (reset) => {
  let xReset = reset;
  return xReset;
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());
    let results = JSON.stringify(formJSON, null, 0);
    let formatResults = results.split('""').join("null");
    let blob = new Blob([formatResults], {type: "text/plain;charset=utf-8"} );
    
    if (formJSON["id_contratacao"] == "") { 
      isValid = false;
      toastError();
    }else {
      isValid = true;
      if(isValid == true) {
        toastSuccess();
        saveAs(blob, formJSON['id_contratacao']+"_"+elementValue+".json");
        isValid = false;
      }
      setTimeout(() => {
        $(formReset)[0].reset();
      }, 1500)
    }

    console.log(formatResults, formReset, isValid);

}

$("#btn_gera_json_procedimento").click(function(){
  elementValue = getValueElement("#v-pills-procedimento-tab");
  formReset = getFormReset("#form-procedimento");
  if (isValid == true) {
    $("#form-procedimento").submit(handleFormSubmit);
  }
});

$("#btn_gera_json_resultado").click(function(){
  elementValue = getValueElement("#v-pills-resultado-tab");
  formReset = getFormReset("#form-resultado");
  if (isValid == true) {
    $("#form-resultado").submit(handleFormSubmit);
  }
});

$("#btn_gera_json_ata_registro").click(function(){
  elementValue = getValueElement("#v-pills-ata-registro-tab");
  formReset = getFormReset("#form-ata-registro");
  if (isValid == true) {
    $("#form-ata-registro").submit(handleFormSubmit);
  }
});

$("#btn_gera_json_cadastro_orgao").click(function(){
  elementValue = getValueElement("#v-pills-cadastro-orgao-tab");
  formReset = getFormReset("#form-cadastro-orgao");
  if (isValid == true) {
    $("#form-cadastro-orgao").submit(handleFormSubmit);
  }
});

$("#btn_gera_json_cadastro_licitante").click(function(){
  elementValue = getValueElement("#v-pills-cadastro-licitante-tab");
  formReset = getFormReset("#form-cadastro-licitante");
  if (isValid == true) {
    $("#form-cadastro-licitante").submit(handleFormSubmit);
  }
});

$("#btn_gera_json_contrato").click(function(){
  elementValue = getValueElement("#v-pills-contrato-tab");
  formReset = getFormReset("#form-contrato");
  if (isValid == true) {
    $("#form-contrato").submit(handleFormSubmit);
  }
});

$("#btn_gera_json_sancao").click(function(){
  elementValue = getValueElement("#v-pills-sancao-tab");
  formReset = getFormReset("#form-sancao");
  if (isValid == true) {
    $("#form-sancao").submit(handleFormSubmit);
  }
});

/*$("#v-pills-resultado-tab").click(function() {
  $("#form-procedimento")[0].reset();
});*/