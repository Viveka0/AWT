function *display()
{
    console.log("hi");
    console.log("hello");
    yield 10;
    console.log("how r u");
}
console.log("welcome");
var a=display();
console.log(a.next());
console.log("cvr");