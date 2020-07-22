"use strict";

console.log('it works'); //footer

var homeIcon = get('.home-icon');
var bookmarkIcon = get('.bookmark-icon');
var createIcon = get('.create-icon');
var profileIcon = get('.profile-icon');
var pageIndex = get('.page-index');
var pageBookmark = get('.page-bookmark');
var pageCreate = get('.page-create');
var pageProfile = get('.page-profile');
var body = get('body');
var header = get('header');
var svg = get('svg');
var darkmodeSwitch = get('.button__darkmode'); //bookmark

var buttonBookmark = get('.card__bookmark-button'); //show answer

var textShowAnswer = get('.text-answer');
var buttonShowAnswer = get('.card__answer-button');
var buttonCaptionIsShowAnswer = true; //darkmode

darkmodeSwitch.addEventListener('click', function () {
  body.classList.toggle('darkmode');
  svg.classList.toggle('svg__darkmode');
});
homeIcon.addEventListener('click', function () {
  pageIndex.classList.remove('hidden');
  pageBookmark.classList.add('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');
});
bookmarkIcon.addEventListener('click', function () {
  pageIndex.classList.add('hidden');
  pageBookmark.classList.remove('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');
});
createIcon.addEventListener('click', function () {
  pageIndex.classList.add('hidden');
  pageBookmark.classList.add('hidden');
  pageCreate.classList.remove('hidden');
  pageProfile.classList.add('hidden');
});
profileIcon.addEventListener('click', function () {
  pageIndex.classList.add('hidden');
  pageBookmark.classList.add('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.remove('hidden');
});
buttonBookmark.addEventListener('click', function () {
  buttonBookmark.classList.toggle('card__bookmark-button--active');
});
buttonShowAnswer.addEventListener('click', function () {
  textShowAnswer.classList.toggle('hidden');

  if (buttonCaptionIsShowAnswer) {
    buttonShowAnswer.textContent = 'Hide Answer';
  } else {
    buttonShowAnswer.textContent = 'Show Answer';
  }

  buttonCaptionIsShowAnswer = !buttonCaptionIsShowAnswer;
});

function get(selector) {
  return document.querySelector(selector);
}