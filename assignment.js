/*
Question:
You are developing a program for a bookstore's inventory system that categorizes books based on their genre, publication year, and availability status. The program should determine the discount rate for a customer based on these three factors.

If the book is a Science Fiction:

If it was published before 2000:
If it's in stock, the discount is 20%.
If it's out of stock, the discount is 15%.
If it was published in or after 2000:
If it's in stock, the discount is 10%.
If it's out of stock, the discount is 5%.
If the book is a Romance:

If it was published before 2010:
If it's in stock, the discount is 25%.
If it's out of stock, the discount is 20%.
If it was published in or after 2010:
If it's in stock, the discount is 15%.
If it's out of stock, the discount is 10%.
For all other genres:

If it was published before 2005:
If it's in stock, the discount is 30%.
If it's out of stock, the discount is 25%.
If it was published in or after 2005:
If it's in stock, the discount is 20%.
If it's out of stock, the discount is 15%.
Write a program using nested if statements that takes the genre, publication year, and availability status as inputs and outputs the appropriate discount rate for the customer. Ensure to handle edge cases and provide meaningful output.

Example Input/Output:
Input: Genre = "Science Fiction", Year = 1998, Status = "in stock"

Output: "The discount rate for this book is 20%."
Input: Genre = "Romance", Year = 2015, Status = "out of stock"

Output: "The discount rate for this book is 10%."

 */
