jQuery(document).ready(function($) {
  // Aplica a máscara de CEP
  $('#form-field-zipcode').mask('00000-000');

  // Validação do CEP com ViaCEP
  $('#form-field-zipcode').on('input', function() {
      const cep = $(this).val().replace(/\D/g, '');

      if (cep.length === 8) {
          $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function(data) {
              if (data.erro) {
                  mostrarAviso();
              } else {
                  removerAviso();
              }
          });
      } else {
          removerAviso();
      }
  });

  function mostrarAviso() {
      if (!$('.cep-erro').length) {
          $('#form-field-zipcode').addClass('cep-invalido');
          $('#form-field-zipcode').after(`
              <div class="cep-erro">
                  CEP não encontrado
              </div>
          `);
      }
  }

  function removerAviso() {
      $('#form-field-zipcode').removeClass('cep-invalido');
      $('.cep-erro').remove();
  }
});
