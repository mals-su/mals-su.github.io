jQuery(document).ready(function($){
    $('.feedback__form.form').on('submit', function(e){
        e.preventDefault();
        var $that = $(this),
            formData = new FormData($that.get(0));

        var name = $('[name = "name"]');
        var email = $('[name = "email"]');
        var text = $('[name = "text"]');

        var text_error = '';
        if (!name.val()){
            text_error = text_error + 'Не заполнено поле: Ваше имя <br>';
            name.parent().addClass('has-error');

        }

        if (email.val()==''){
            text_error = text_error + 'Не заполнено поле e-mail <br>';
            email.parent().addClass('has-error');
        }
        if (!text.val()){
            text_error = text_error + 'Не заполнено сообщение <br>';
            text.parent().addClass('has-error');
        }

        if (!name.val() || !text.val() ||!email.val() ) {

            $('#error').addClass('form__error');
            $('#error').html(text_error);
            return ;
        }

        $.ajax({
            url : 'send_mail.php',
            type : 'POST',
            processData: false,
            contentType: false,
            cache:false,
            data : formData,
            success : function (msg){
                if (msg){
                    if (msg == 'error'){

                        $('#error').addClass('form__error');
                        $('#error').html("Ошибка. Сообщение не отправленно.<br>");
                        return;
                    }
                    $('.feedback__form.form').addClass('hidden');

                    $('.footer__top').find($('.section__title')).text('Сообщение успешно отправлено. ');
                }
            }
        });
    });
});