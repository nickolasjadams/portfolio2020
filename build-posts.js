const pug = require('pug');
const fs = require('fs/promises');
const axios = require('axios');

// const postsEndpoint = "https://posts.nickjadams.com";
const postsEndpoint = "https://nickjadams-static-cms-blog-api.s3.amazonaws.com/post";

// Compile the source code
const compilePost = pug.compileFile('pug/partials/_post-template.pug');

// Promise.all([promise1, promise2, promise3]).then((values) => {
// 	console.log(values);
//   });

axios.get(postsEndpoint.includes("s3") ? postsEndpoint + "/_all-posts.json" : postsEndpoint)
	.then(response => {
		response.data.forEach(post => {
			console.log(post.title);

			axios.get(postsEndpoint + "/" + post.slug + ".json")
				.then(response => {
					if (response.status == 200) {
						console.log("found " + post.slug);
						let body = JSON.parse(response.data.body);
						
						// Render a set of data in the post template						
						let html = compilePost({
							title: response.data.title,
							slug: "/posts/" + response.data.slug + ".html",
							timestamp: body.time,
							blocks: body.blocks
						});

						let postFile = __dirname + "/posts/" + response.data.slug + ".html";
						fs.writeFile(postFile, html, (err) => {
							if (err) reject(err);
							else resolve(data);
						})
						.then(function() { 
							// console.log();
						})

					}
				})
				.catch(error => {
					// console.log(error);
				});
		});
	})
	.catch(error => {
		console.log(error);
	});


// Write a categories page


// Write a recent posts partial


// Write a starred posts partial


// Write a data object to use with a paginated posts vue component