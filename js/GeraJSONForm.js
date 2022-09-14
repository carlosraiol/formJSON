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

    if (formJSON["id_contratacao_resultado"] == "") { 
        isValid = false;
        toastError();
      }else {
        isValid = true;
        if(isValid == true) {
          toastSuccess();
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

    if (formJSON["id_contratacao_ata_registro"] == "") { 
        isValid = false;
        toastError();
      }else {
        isValid = true;
        if(isValid == true) {
          toastSuccess();
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

    if (formJSON["id_contratacao_cadastro_orgao"] == "") { 
        isValid = false;
        toastError();
      }else {
        isValid = true;
        if(isValid == true) {
          toastSuccess();
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

    if (formJSON["id_contratacao_cadastro_licitante"] == "") { 
        isValid = false;
        toastError();
      }else {
        isValid = true;
        if(isValid == true) {
          toastSuccess();
          saveAs(blob, formJSON['id_contratacao_cadastro_licitante']+"_cadastro_licitante.json");
          isValid = false;
        }
        setTimeout(() => {
          $("#form-cadastro-licitante")[0].reset();
        }, 1500)
    }
    
    console.log(formatResults, isValid);
}
/** CONTRATO */
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

    if (formJSON["id_contratacao_sancao"] == "") { 
        isValid = false;
        toastError();
      }else {
        isValid = true;
        if(isValid == true) {
          toastSuccess();
          saveAs(blob, formJSON['id_contratacao_sancao']+"_sancao.json");
          isValid = false;
        }
        setTimeout(() => {
          $("#form-sancao")[0].reset();
        }, 1500)
    }
    
    console.log(formatResults, isValid);
}
  
$("#btn_gera_json_resultado").click(function(){
    if (isValid == true) {
        $("#form-resultado").submit(resultadoSubmit);
    }
});

$("#btn_gera_json_ata_registro").click(function(){
    if (isValid == true) {
        $("#form-ata-registro").submit(ataRegistroSubmit);
    }
});

$("#btn_gera_json_cadastro_orgao").click(function(){
    if (isValid == true) {
        $("#form-cadastro-orgao").submit(cadOrgaoSubmit);
    }
});

$("#btn_gera_json_cadastro_licitante").click(function(){
    if (isValid == true) {
      $("#form-cadastro-licitante").submit(cadLicitanteSubmit);
    }
});
/** CONTRATO */
$("#btn_gera_json_sancao").click(function(){
    if (isValid == true) {
      $("#form-sancao").submit(sancaoSubmit);
    }
});