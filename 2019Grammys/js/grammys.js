var obj;
var winner;
$.ajax({
    url: 'data/grammys.json',
    type: 'GET',
    dataType: 'json', 
    success: function (data) {
        let new_html = "";
        let new_html2 = "";

        for(let i = 0; i < data.fields.length; i++){
           
            new_html += `<option value=${i}>${data.fields[i].field}</option>`
            if(i != 0){
                new_html2+= `<div id='field${data.fields[i].field_id}' class='fields'>
                <h2>${data.fields[i].field}</h2>`
            }
            else {
                new_html2+= `<div id='field${data.fields[i].field_id}'>
                <h2>${data.fields[i].field}</h2>`
            }
           
            for(var j = 0; j < data.fields[i].categories.length; j++){
                winner = data.fields[i].categories[j].winner_id;
                console.log(winner);
                new_html2+= `<h3>${data.fields[i].categories[j].category_name}</h3>`;
                for(let k = 0; k < data.fields[i].categories[j].nominees.length; k++){
                    if(winner == k){
                        new_html2 += `<h4 class='winner'>${data.fields[i].categories[j].nominees[k].nominee}<span>Winner</span> </h4>
                                    <p>${data.fields[i].categories[j].nominees[k].artist}</p>
                                    <p>${data.fields[i].categories[j].nominees[k].info}</p>  `   
                    }
                    else {
                        new_html2 += `<h4>${data.fields[i].categories[j].nominees[k].nominee}</h4>
                        <p>${data.fields[i].categories[j].nominees[k].artist}</p>
                        <p>${data.fields[i].categories[j].nominees[k].info}</p>  `
                    }
                        
                }
                new_html2 +='<hr>'    
            }

            new_html2+= '</div>'
         
        
        }   
        $('#category_types').append(new_html);
        $('#nominees_section').append(new_html2);

    },
    error: function(errorMsg){ }
}); 

$('#category_types').on('change', function(){
    var value = $("#category_types option:selected").val();
    if(value == 0){
        $('#field2').addClass('fields');
        $( "#field1" ).removeClass('fields');       
        $('#field3').addClass('fields');
        $('#field4').addClass('fields');
        $('#field5').addClass('fields');
        $('#field6').addClass('fields');
        $('#field7').addClass('fields');
        $('#field8').addClass('fields');
        $('#field9').addClass('fields');
        $('#field10').addClass('fields');
    }
    if(value == 1){
        $('#field1').addClass('fields');
        $( "#field2" ).removeClass('fields');       
        $('#field3').addClass('fields');
        $('#field4').addClass('fields');
        $('#field5').addClass('fields');
        $('#field6').addClass('fields');
        $('#field7').addClass('fields');
        $('#field8').addClass('fields');
        $('#field9').addClass('fields');
        $('#field10').addClass('fields');




    }
    if(value == 2){
        $('#field1').addClass('fields');
        $( "#field3" ).removeClass('fields');       
        $('#field2').addClass('fields');
        $('#field4').addClass('fields');
        $('#field5').addClass('fields');
        $('#field6').addClass('fields');
        $('#field7').addClass('fields');
        $('#field8').addClass('fields');
        $('#field9').addClass('fields');
        $('#field10').addClass('fields');

    }
    if(value == 3){
        $('#field1').addClass('fields');
        $( "#field4" ).removeClass('fields');       
        $('#field2').addClass('fields');
        $('#field3').addClass('fields');
        $('#field5').addClass('fields');
        $('#field6').addClass('fields');
        $('#field7').addClass('fields');
        $('#field8').addClass('fields');
        $('#field9').addClass('fields');
        $('#field10').addClass('fields');

    }
    if(value == 4){
        $('#field1').addClass('fields');
        $( "#field5" ).removeClass('fields');       
        $('#field2').addClass('fields');
        $('#field4').addClass('fields');
        $('#field3').addClass('fields');
        $('#field6').addClass('fields');
        $('#field7').addClass('fields');
        $('#field8').addClass('fields');
        $('#field9').addClass('fields');
        $('#field10').addClass('fields');
    }
    if(value == 5){
        $('#field1').addClass('fields');
        $( "#field6" ).removeClass('fields');       
        $('#field2').addClass('fields');
        $('#field4').addClass('fields');
        $('#field5').addClass('fields');
        $('#field3').addClass('fields');
        $('#field7').addClass('fields');
        $('#field8').addClass('fields');
        $('#field9').addClass('fields');
        $('#field10').addClass('fields');

    }
    if(value == 6){
        $('#field1').addClass('fields');
        $( "#field7" ).removeClass('fields');       
        $('#field2').addClass('fields');
        $('#field4').addClass('fields');
        $('#field5').addClass('fields');
        $('#field6').addClass('fields');
        $('#field3').addClass('fields');
        $('#field8').addClass('fields');
        $('#field9').addClass('fields');
        $('#field10').addClass('fields');

    }
    if(value == 7){
        $('#field1').addClass('fields');
        $( "#field8" ).removeClass('fields');       
        $('#field2').addClass('fields');
        $('#field4').addClass('fields');
        $('#field5').addClass('fields');
        $('#field6').addClass('fields');
        $('#field7').addClass('fields');
        $('#field3').addClass('fields');
        $('#field9').addClass('fields');
        $('#field10').addClass('fields');

    }
    if(value == 8){
        $('#field1').addClass('fields');
        $( "#field9" ).removeClass('fields');       
        $('#field2').addClass('fields');
        $('#field4').addClass('fields');
        $('#field5').addClass('fields');
        $('#field6').addClass('fields');
        $('#field7').addClass('fields');
        $('#field8').addClass('fields');
        $('#field3').addClass('fields');
        $('#field10').addClass('fields');
    }
    if(value == 9){
        $('#field1').addClass('fields');
        $( "#field10" ).removeClass('fields');       
        $('#field2').addClass('fields');
        $('#field4').addClass('fields');
        $('#field5').addClass('fields');
        $('#field6').addClass('fields');
        $('#field7').addClass('fields');
        $('#field8').addClass('fields');
        $('#field9').addClass('fields');
        $('#field3').addClass('fields');
    }


})
