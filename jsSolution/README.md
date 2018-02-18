
# JS Problem Statement

Create a Rider Entity with below data:
1.	rider_name, rider_id & status as properties
2.	createRider method

Create a Ecom Entity inheriting from Rider Entity with below data:
1.	Order id and priority (1, 2, 3 etc) as properties
2.	createOrder method 
3.	allocate method

riderStatus method with below logic:
1.	Use this as a callback to update the rider status after calling the allocate method
2.	Status values can be: Available & Busy

Problem:
1.	Rider & Ecom Entity can be a Function or Class
2.	Create multiple riders and orders 
3.	Allocate method should return order id, order name, rider_id and rider name, where orders should allocate to riders based on priority (1 is the highest priority)
4.	Order should not be reallocated ie assigned to multiple riders
5.	Only 1 order can be assigned to 1 riderI
