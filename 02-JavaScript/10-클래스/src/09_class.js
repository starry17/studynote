/** 정적멤버변수 */

class Customer {
    constructor(name) {
        this._name = name;
    }

    static count = 0;

    in() {
        Customer.count++;
    }

    out() {
        Customer.count--;
    }

    showState() {
        console.log("손님의 이름: " + this._name + ", 전체 손님 수: " + Customer.count);
    }
}

console.group("손님1");
const c1 = new Customer("손님1");
c1.in();
c1.showState();
console.groupEnd();

console.group("손님2");
const c2 = new Customer("손님2");
c2.in();
c1.showState();
c2.showState();
console.groupEnd();

console.group("손님3");
const c3 = new Customer("손님3");
c3.in();

c1.showState();
c2.showState();
c3.showState();
console.groupEnd();

console.group("손님2, 3 out");
c3.out();
c2.out();
c1.showState();
c2.showState();
c3.showState();
console.groupEnd();
