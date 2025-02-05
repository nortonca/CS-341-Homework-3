
const fs = require('fs');
const $ = require('jquery');

// Set up the window object for jQuery
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;

test('test selectEvent', () => {
  //Read the index.html file into a string
  var html = fs.readFileSync('public/index.html', 'utf8');
  expect(html).toEqual(expect.anything()); //any non-null value is okay
  
  //put the HTML into a testing DOM and do a sanity check
  document.body.innerHTML = html;
  expect($('h1').html()).toBe("Cheesecake Order Form");
});

// Additional test for the form elements
test('test form elements exist', () => {
  var html = fs.readFileSync('public/index.html', 'utf8');
  document.body.innerHTML = html;
  
  expect($('select[name="quantity"]').length).toBe(1);
  expect($('input[name="topping"]').length).toBe(3);
  expect($('textarea').length).toBe(1);
});
