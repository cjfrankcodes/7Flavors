$(window).on('load', function() {
    var phones = [{ "mask": "(###) ###-####"}, { "mask": "(###) ###-##############"}];
    
    var selectedMask = phones[0].mask;
    
    $('#phone').inputmask({ 
        mask: selectedMask, 
        greedy: false, 
        definitions: { '#': { validator: "[0-9]", cardinality: 1}} 
    });
});