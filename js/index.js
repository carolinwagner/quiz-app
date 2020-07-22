"use strict";

console.log('it works');
var homeIcon = document.querySelector('.home-icon');
var bookmarkIcon = document.querySelector('.bookmark-icon');
var createIcon = document.querySelector('.create-icon');
var profileIcon = document.querySelector('.profile-icon');
var pageIndex = document.querySelector('.page-index');
var pageBookmark = document.querySelector('.page-bookmark');
var pageCreate = document.querySelector('.page-create');
var pageProfile = document.querySelector('.page-profile');
var buttonBookmark = document.querySelector('.card__bookmark-button');
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