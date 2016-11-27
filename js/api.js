$.ajax({

				url:"http://graph.facebook.com/v2.8/{friend-list-id}",
				method:"GET",
				appId      : '142748222869667',
      			version    : 'v2.8',
      			data: {

      			},
				success: handleResults

			});

function handleResults(response_body) {

	console.log(response_body);
} 