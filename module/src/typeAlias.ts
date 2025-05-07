{
  // Type Alias

  type User = {
    id: number;
    name: string;
    email: string;
    isActive: "active" | "inActivee";
    bloodGrp?: string;
  };

  // Use the alias
  const user1: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    isActive: "active",
  };

  //Function parameter type Using Alias
  function greetUser(user: User): void {
    console.log(`Hello, ${user.name}!`);
  }

  greetUser(user1);
  //
  type FunctionType = (num1: number, num2: number) => number;
  const addFunc: FunctionType = (num1, num2) => num1 + num2;

  // Union Type Alias
  type Status = "success" | "error" | "loading";

  let currentStatus: Status = "success";

  // Alias with Arrays

  type Point = [number, number];

  const path: Point[] = [
    [0, 0],
    [10, 20],
    [20, 40],
  ];
}
