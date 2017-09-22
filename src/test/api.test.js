'use strict';

const request = require('request-promise-native');

const apiBase = 'http://localhost:3000';

describe('api requests', () => {
	const state = {
		movie: {
			title: "Batman Begins",
			year: 2005,
			watched: false
		}
	};

	it('test api', () => {
		request.get({
			uri: `${apiBase}/movies/test`,
			resolveWithFullResponse: true
		}).then(response => {
			console.log('DB is', (response.statusCode === 200) ? 'connected':'not connected');

			expect(response.statusCode).toBe(200);

			return request.post({
				uri: `${apiBase}/movie/test`,
				resolveWithFullResponse: true,
				json: state.movie
			});
		}).then(response => {
			console.log('Post response body:', response.body);

			expect(response.statusCode).toBe(200);

			state.movie.id = response.body._id;

			return request.get({
				uri: `${apiBase}/movie/${state.movie.id}/test`,
				json: true
			});
		}).then(response => {
			console.log('Get added movie:', response);

			expect(JSON.stringify({
				title: response.title,
				year: response.year,
				watched: response.watched,
				id: response._id
			})).toBe(JSON.stringify(state.movie));

			return request.delete({
				uri: `${apiBase}/movie/${state.movie.id}/test`,
				resolveWithFullResponse: true
			});
		}).then(response => {
			console.log((response.statusCode === 204) ? 'Deleted movie':'Did not delete movie');

			expect(response.statusCode).toBe(204);

			return request.get({
				uri: `${apiBase}/movies/test`,
				json: true
			});
		}).then(response => {
			console.log('Tests finished and database is', (!response.length) ? 'empty':'not empty');
			expect(response.length).toBe(0);
		});
	});
/*
	it('connect to database', () => {
		request.get({
			uri: `${apiBase}/movies/test`,
			resolveWithFullResponse: true
		}).then(response => {
			expect(response.statusCode).toBe(200);
		});

		// request.get(`${apiBase}/movies/test`, (err, response, body) => {
		// 	console.info('Connect to db: ');
		// 	console.log(response.statusCode);
		// 	expect(response.statusCode).toBe(200);
		// });
	});

	it('add movie to database', () => {
		request.post({
			url: `${apiBase}/movie/test`,
			json: state.movie
		}, (err, response, body) => {
			console.info('Add movie to db: ');
			console.log(body);
			state.movie.id = body._id;
			// state.movie = body;
			expect(response.statusCode).toBe(200);
		});
	});

	it('fetch added movie', () => {
		request.get(`${apiBase}/movie/${state.movie.id}/test`, (err, response, body) => {
			console.info('Fetch added movie: ');
			// console.log(state);
			// console.log(body);
			// console.log(body);
			expect(JSON.stringify({
				// id: body._id,
				title: body.title,
				year: body.year,
				watched: body.watched
			}))
			.toBe(JSON.stringify(state.movie));
		});
	});

	it('delete added movie', () => {
		request.delete(`${apiBase}/movie/${state.movie.id}/test`, (delErr, delResponse, delBody) => {
			console.info('Delete movie: ');
			console.log(delResponse);
			expect(delResponse.statusCode).toBe(204);
			request.get(`${apiBase}/movies/test`, (getErr, getResponse, getBody) => {
				expect(getBody).toBe([]);
			});
		});
	});
	// console.log(state);
*/
});
