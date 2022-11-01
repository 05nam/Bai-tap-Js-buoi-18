

//*thêm số

var numberMang = [];

function addData () {
    var nhapN = document.getElementById("themso").value ;
    numberMang.push( Number( nhapN));

console.log(nhapN)
}

document.getElementById("btn__themso").onclick = addData;


//* tổng các só dương

function tinhTong () {
    var sum = 0;
    for ( var i=0; i<numberMang.length; i++) {
        if(numberMang[i]>0) {

            sum = sum + numberMang[i]
        }
    }
    document.getElementById("tongCacSoDuong").innerHTML = sum;
    console.log(sum)
}

document.getElementById("btn__tinhtong").onclick = tinhTong;


//* đếm có bao nhiêu số dương trong mảng

function demSoDuong () {
    var contSoDuong = 0;
            for ( var i=0; i<numberMang.length; i++) {
                if (numberMang[i]>0) {
                    contSoDuong++
                }
    
            }
            console.log(contSoDuong);
            document.getElementById("demSoDuong").innerHTML = contSoDuong;
        }
        document.getElementById("btn__demSoDuong").onclick = demSoDuong;

        //* tim số  nhỏ nhất 

        function timSoNhoNhat () {
            var min = numberMang[0];
            for ( var i=1; i<numberMang.length; i++) {
                if( min > numberMang[i] ){
                    min = numberMang[i]
                }

            }
            console.log(min);
            document.getElementById("timSo__Min").innerHTML = min;
        }
        document.getElementById("btn__timSo__Min").onclick = timSoNhoNhat;

        //* tìm số dương nhỏ nhất

        function timSoDuongNhoNhat () {
            var min = 0;
            for ( var i=1; i<numberMang.length; i++) {
                if ( numberMang[i]>0 ) {
                    min = numberMang[i]
                    break;
                }
            }
            for ( var i=1; i<numberMang.length; i++) {
                if (  min > numberMang[i]) {
                    min = numberMang[i]
                }
            }
            console.log(min)
            document.getElementById("timSo__MinDuong").innerHTML = min;
        }
        document.getElementById("btn__MinDuong").onclick = timSoDuongNhoNhat 