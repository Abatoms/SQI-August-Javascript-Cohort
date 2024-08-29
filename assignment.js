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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*

// Asignment 2
    Question:
You are developing a decision support system for an online food delivery platform that suggests the best promotional offer for a customer based on several criteria: order type, customer membership level, day of the week, time of day, and delivery distance.

Criteria for Selecting the Offer:

Order Type:
If the order is "Groceries":
If the customer is a "Gold" member:
If the day is a weekend (Saturday or Sunday):
If the time of day is between 6 AM and 11 AM, and the distance is less than 5 km, offer a 30% discount.
If the time of day is between 6 AM and 11 AM, but the distance is 5 km or more, offer a 25% discount.
If the time of day is between 11 AM and 6 PM, and the distance is less than 5 km, offer a 20% discount.
If the time of day is between 11 AM and 6 PM, but the distance is 5 km or more, offer a 15% discount.
If the day is a weekday (Monday to Friday):
If the time of day is between 6 PM and 10 PM, and the distance is less than 10 km, offer a 20% discount.
Otherwise, offer a 10% discount.
If the customer is a "Silver" member:
If the day is a weekend, and the distance is less than 8 km, offer a 20% discount.
Otherwise, offer a 10% discount.
If the customer is a "Regular" member:
Offer a 5% discount regardless of the time or distance.


Order Type:
If the order is "Restaurant Food":
If the customer is a "Gold" member:
If the day is a weekday, and the time of day is between 11 AM and 2 PM, offer a free delivery if the distance is less than 3 km.
If the day is a weekend, and the time of day is between 6 PM and 9 PM, offer a 15% discount.
If the customer is a "Silver" member:
If the day is a weekend, and the distance is less than 4 km, offer a 10% discount.
If the customer is a "Regular" member:
No special offers apply.

Order Type:
If the order is "Medicine":
If the customer is a "Gold" or "Silver" member:
If the time of day is between 9 AM and 9 PM, offer a 5% discount regardless of the distance.
If the customer is a "Regular" member:
No discount applies.


For all other order types:
No promotional offers apply.
Additional Conditions:
Ensure to account for invalid inputs (e.g., invalid membership level, order type, or day of the week).
The program should take inputs: order type, membership level, day of the week, time of day, and distance, then output the best promotional offer or a message indicating that no offer is available.
Example Input/Output:
Input: Order Type = "Groceries", Membership Level = "Gold", Day = "Saturday", Time = "7 AM", Distance = 3 km
Output: "You get a 30% discount on your order!"

Input: Order Type = "Restaurant Food", Membership Level = "Silver", Day = "Saturday", Time = "7 PM", Distance = 3 km
Output: "You get a 10% discount on your order!"

Input: Order Type = "Medicine", Membership Level = "Regular", Day = "Monday", Time = "10 AM", Distance = 7 km
Output: "No discount applies."

This problem is designed to challenge your understanding of complex nested if statements and logical decision-making processes. It requires the ability to navigate multiple layers of conditions and combine criteria to determine the correct output.
*/
