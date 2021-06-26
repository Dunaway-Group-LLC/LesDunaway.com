<script type="text/javascript">
        $(document).ready(function() {

            $("#submit").click(function(e) {
                e.preventDefault();

                var query_str = $( "form" ).serialize();
                $('#query_str').text(query_str);

                $.ajax({
                    type: "GET",
                    url: 'http://lesdunaway.com.s3-website-us-east-1.amazonaws.com',
                    contentType: 'application/x-www-form-urlencoded',
                    data: query_str
                    }),
                    success: function(res){
                        $('#form-response').text('Email was sent.');
                    },
                    error: function(){
                        $('#form-response').text('Error.');
                    }
                });

            })

        });
    </script>
