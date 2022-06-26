const FetchApi = (imageUrl) => {
	const raw = JSON.stringify({
      	user_app_id: {
			user_id: "ez7rfbte4eut",
        	app_id: "smartbrain",
    	},
      	inputs: [
        	{
          		data: {
            		image: {
              			url: imageUrl
            		},
          		},
        	},
      	],
    });
    
    fetch(
        "https://api.clarifai.com/v2/models/f76196b43bbd45c99b4f3cd8e8b40a8a/outputs",
        {
            method: "POST",
        	headers: {
          		Accept: "application/json",
          		Authorization: "Key 417a25da3a0b46f4953497d71d5a9d69",
        	},
        	body: raw
        }
    )
    .then((response) => response.text())
    .then((result) => {
        return result;
    })
    .catch((error) => console.log("error", error));
}
    
export default FetchApi;