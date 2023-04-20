const numberOfFilms = +prompt("Сколько фильмов ты уже посмотрел?, "");

const personalMovieDB = [
	count: numberOfFilms,
	movies: {},
	actors: {},
	ganers: [],
	privat: false
];

const a = prompt("Один из последних просмотренных фильмов?"),
	b = prompt("На сколько оцените его?"),
	c = prompt("Один из последних просмотренных фильмов?"),
	d = prompt("Один из последних просмотренных фильмов?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);