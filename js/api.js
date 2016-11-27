$.ajax({

				url:"http://graph.facebook.com/me",
				method:"GET",
				appId      : '142748222869667',
      			xfbml      : true,
      			version    : 'v2.8',
      			data: {

      			friend-list: "{friend-list-id}"

      			},
				success: handleResults

			});

function handleResults(response_body) {

	console.log(response_body);
} 