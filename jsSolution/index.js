var BUSY = 'Busy';
var AVAILABLE = 'Available'

class Rider {

    createRider(rider_name, rider_id, status) {
        this.rider_id = rider_id;
        this.rider_name = rider_name;
        this.status = status;
    }
}

class Ecom extends Rider {    

    createOrder(order_id, order_priority, order_name) {
        this.order_id = order_id;
        this.order_priority = order_priority;
        this.order_name = order_name;
    }

    allocate(rider) {
        this.rider_id = rider.rider_id;
        this.rider_name = rider.rider_name;   
        return {
            order_id: this.order_id,
            order_name: this.order_name,
            rider_id: this.rider_id,
            rider_name: this.rider_name };
    }

}

// Update the rider status - Busy || Available
function riderStatus(rider, status) {
    rider.status = status;
}

// creating riders
rider1 = new Rider();
rider1.createRider('rider 1', 'R1', AVAILABLE);

rider2 = new Rider();
rider2.createRider('rider 2', 'R2', AVAILABLE);

rider3 = new Rider();
rider3.createRider('rider 3', 'R3', AVAILABLE);

riders = [rider1, rider2, rider3];

// creating orders
order1 = new Ecom();
order1.createOrder('O1', 2, 'Order 1');

order2 = new Ecom();
order2.createOrder('O2', 1, 'Order 2');

order3 = new Ecom();
order3.createOrder('O3', 3, 'Order 3');

orders = [order1, order2, order3];

// sort orders with priority
orders.sort(
    function compare(a,b) {
        if (a.order_priority < b.order_priority)
          return -1;
        if (a.order_priority > b.order_priority)
          return 1;
        return 0;
      }
);

// traversing orders
for (var order in orders) {

    // looking for orders without rider
    if(orders[order].rider == null) {
        console.log(orders[order].order_id + ' is rider free');

        for(var rider in riders) {
            // looking for AVAILALBE riders
            if (riders[rider].status == AVAILABLE) {

                // Allocating rider to order and displaying result
                console.log( orders[order].allocate(riders[rider]) );

                // updating rider status
                riderStatus(riders[rider], BUSY);                
                break;
            }
        }
    }
}