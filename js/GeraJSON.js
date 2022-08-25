// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

function getDateYear() {
    let dataYear = new Date();
    let dataYearFull = dataYear.getFullYear();
    return dataYearFull;
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());

    // for multi-selects, we need special handling
    //formJSON.snacks = data.getAll('snacks');
    //const results = document.querySelector('.results pre');
    
    let results = JSON.stringify(formJSON, null, 0);

    let blob = new Blob([results], {type: "text/plain;charset=utf-8"} );
    
    let resultFilter = JSON.stringify(data.get("id_contratacao"));
    saveAs(blob, resultFilter.replace(/\"/g, '')+"_procedimento.json");
    
    console.log(resultFilter.replace(/\"/g, ''));

}

    /*const form = document.querySelector('#contact-form');
    form.addEventListener('submit', handleFormSubmit);*/

    $("#btn_gera_json").click(function(){
        $("#contact-form").submit(handleFormSubmit);
        //$("#contact-form").reset();
    });

    $('#contact-form').each(function(){
        this.reset();
      });
