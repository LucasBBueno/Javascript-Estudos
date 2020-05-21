function getTotalFromListWithReduce() {
    let cars = [{
            car: 'Sandero',
            value: 35000
        },
        {
            car: 'Golf',
            value: 70000
        },
        {
            car: 'Civic',
            value: 55000
        }
    ];

    return cars.reduce((total, car) => total + car.value, 0);
}

console.log(getTotalFromListWithReduce());