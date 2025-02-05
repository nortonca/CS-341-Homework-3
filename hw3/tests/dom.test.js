const fs = require('fs');

test('test selectEvent', () => {
  //Read the index.html file into a string
  var html = fs.readFileSync('public/index.html', 'utf8');
  expect(html).toEqual(expect.anything()); //any non-null value is okay
  
  //put the HTML into a testing DOM and do a sanity check
  document.body.innerHTML = html;
  const $ = require('jquery');
  expect($('h1').html()).toBe("Cheesecake Order Form");
});

// Additional test for the form elements
test('test form elements exist', () => {
  var html = fs.readFileSync('public/index.html', 'utf8');
  document.body.innerHTML = html;
  const $ = require('jquery');
  
  expect($('select[name="quantity"]').length).toBe(1);
  expect($('input[name="topping"]').length).toBe(3);
  expect($('textarea').length).toBe(1);
});