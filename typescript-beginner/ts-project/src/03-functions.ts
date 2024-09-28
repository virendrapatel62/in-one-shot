function sayHello(username: string, count: number) {
    console.log(`Hello ${username}`, count)
}
// sayHello(1)
// sayHello([])
// sayHello({})
sayHello("Virendra", 90)
// sayHello("Virendra" , "skfjksfk")

function sum(a: number, b: number, c?: number): number {
    return a + b
}

const ans = sum(2, 4)


export { }