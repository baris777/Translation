
import sys

def add(num1, num2):
    return num1 + num2
def subtract(num1, num2):
    return num1 - num2
def multiply(num1, num2):
    return num1 * num2
def divide(num1, num2):
    if num2 != 0:
        return num1 / num2
    else:
        print("Division by zero.")
        return None

def calculator():
    while True:
        print("\nEnter \n1 for add,\n2 for subtract \n3 for multiply\n4 for divide\n5 for quit\n")
        
        x = input("Enter choice (1, 2, 3, 4, 5): ")

        if x == "5":
            sys.exit("Exiting the calculator. Goodbye!")

        if x in ("1", "2", "3", "4"):
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))

            if x == "1":
                print(f"{num1} + {num2} = {add(num1, num2)}")
            elif x == "2":
                print(f"{num1} - {num2} = {subtract(num1, num2)}")
            elif x == "3":
                print(f"{num1} * {num2} = {multiply(num1, num2)}")
            elif x == "4":
                result = divide(num1, num2)
                print(f"{num1} / {num2} = {result}")
        else:
            print("Invalid input. Please enter a valid choice.")

if __name__ == "__main__":
    calculator()