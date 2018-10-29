// This file tests our application code - open the associated HTML file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// Modify the code in your appplication to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

// The following is a helpful summary of all the QUnit asserts: 

//deepEqual(value, expected[, message]): A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
//equal(value, expected[, message]): Verify the value provided is equal the expected parameter using a non-strict comparison (==).
//notDeepEqual(value, expected[, message]): Same as deepEqual() but tests for inequality;
//notEqual(value, expected[, message]): Same as equal() but tests for inequality;
//propEqual(value, expected[, message]): A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
//strictEqual(value, expected[, message]): Verify the value provided is equal to the expected parameter using a strict comparison (===);
//notPropEqual(value, expected[, message]): Same as propEqual() but tests for inequality;
//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;

/*QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing testingcredits function with several sets of inputs', function (assert) {
    assert.equal(testing_credits(3, 4, 3), 'valid inputs', 'Tested with three relatively small positive numbers');
    assert.equal(testing_credits(5,5,-5), 'invalid inputs', 'Tested with one of the negative numbers. ');
    assert.equal(testing_credits(-5, -5, -5), 'invalid inputs', 'Tested with three negative numbers.');
    assert.throws(function () { isUndefined(testing_credits('a', 'b', 'c')); }, undefined, 'Passing in a string correctly raises an Error');
});*/
QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});
QUnit.test('Testing our function Grade', function (assert) {
    assert.strictEqual(grade("A"),4, 'Equivalent for A should be 4');
    assert.strictEqual(grade("B"),3, 'Equivalent for B should be 3');
    assert.strictEqual(grade("C"),2, 'Equivalent for C should be 2');
    assert.strictEqual(grade("D"),1, 'Equivalent for D should be 1');
});
/*QUnit.test("Testing the function GPA", function(assert)
{
    assert.strictEqual(gpa(),"please enter only number in credits column", "Testing the type of credit");

});*/

QUnit.test("Testing the function testing_credits", function(assert)
{
    //assert.throws(function () {convertFeet(null); }, /The given argument is not a number/, 'Passing in null correctly raises an Error');
    assert.strictEqual(testing_credits(3,4,2),"valid inputs", 'Testig positive inputs');
    assert.throws(function () {testing_credits(null); }, /The given arguments is not a number/, 'Passing in null correctly raises an Error');
    assert.throws(function () {testing_credits(); }, /The given arguments is not a number/, 'Passing no arguments correctly raises an Error');
    assert.throws(function () {testing_credits(-2,-4,-5); },/The given numbers are negative/, 'Testing Negative Numbers');
    assert.throws(function () {testing_credits(2,4,-5); },/The given numbers are negative/, 'Testing Negative and positive Numbers');
    
});

