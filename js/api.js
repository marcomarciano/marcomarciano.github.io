$.ajax({

				url:"http://graph.facebook.com/v2.8/{friend-list-id}",
				method:"GET",
				appId      : '142748222869667',
      			version    : 'v2.8',
      			data: {

					  id: "1021071807922512",
					  name: "Marco Marcianò"

      			},
				success: handleResults

			});

function handleResults(response_body) {

	console.log(response_body);
} 