// Bai 1



document.getElementById("btn_1").onclick = function () {
    // đầu vào: khi click vào nút sẽ nhận giá trị 3 số đặt nó là 3 biến
    var num1_1 = document.getElementById("num1_1").value * 1;
    var num1_2 = document.getElementById("num1_2").value * 1;
    var num1_3 = document.getElementById("num1_3").value * 1;
    // xử lí: đặt 3 hàm để lấy kết quả dùng hàm if else để tính theo trường hợp nếu 1 trong 3 số số nào là số lớn nhất trong cáo trường hợp đó ta phân ra thêm 2 trường hợp số nào là số lớn nhì
    var num_1st = "";
    var num_2nd = "";
    var num_3rn = "";
    var ket_qua1 = "";

    if (num1_1 >= num1_2 && num1_1 >= num1_3) {
        num_1st = num1_1;
        if (num1_2 >= num1_3) {
            num_2nd = num1_2;
            num_3rn = num1_3;
        }
        else {
            num_2nd = num1_3;
            num_3rn = num1_2;
        }
    }
    else if (num1_2 >= num1_1 && num1_2 >= num1_3) {
        num_1st = num1_2;
        if (num1_1 >= num1_3) {
            num_2nd = num1_1;
            num_3rn = num1_3;
        }
        else {
            num_2nd = num1_3;
            num_3rn = num1_1;
        }
    }
    else if (num1_3 >= num1_1 && num1_3 >= num1_2) {
        num_1st = num1_3;
        if (num1_1 >= num1_2) {
            num_2nd = num1_1;
            num_3rn = num1_2;
        }
        else {
            num_2nd = num1_2;
            num_3rn = num1_1;
        }
    }
    // đầu ra: tạo thêm kết quả rồi in ra màn hình 
    ket_qua1 += "<h2>" + num_1st + "," + num_2nd + "," + num_3rn + "</h2>";
    document.getElementById("ket_qua1").innerHTML = ket_qua1;
};

//  bài 2
document.getElementById("btn_2").onclick = function () {
    //đầu vào dom tới selec lấy value
    var thanhVien_2 = document.getElementById("thanhVien_2").value;
    // Xử lí tạo thêm 1 biến để lưu kết quả dùng hàm if else để xét các trường đã cho
    ketqua_2 = "";
    if (thanhVien_2 == "B") {
        ketqua_2 += "<h2>Chào Bố</h2>";
    }
    else if (thanhVien_2 == "M") {
        ketqua_2 += "<h2>Chào Mẹ</h2>";
    }
    else if (thanhVien_2 == "A") {
        ketqua_2 += "<h2>Chào anh Trai</h2>";
    }
    else if (thanhVien_2 == "E") {
        ketqua_2 += "<h2>Chào Em gái</h2>";

    };
    // đầu ra in biến kết quả ra màn hình chính
    document.getElementById("ketqua_2").innerHTML = ketqua_2;
};
// bài 3
document.getElementById("btn_3").onclick = function () {
    //đầu vào dom tới 3 thẻ input lấy value
    var num3_1 = document.getElementById("num3_1").value * 1;
    var num3_2 = document.getElementById("num3_2").value * 1;
    var num3_3 = document.getElementById("num3_3").value * 1;
    //xử lí dom tới btn_3 onclick nhận dữ liệu 3 thẻ input tạo 3 biến nhận dữ liệu, 2 biến để tính 1 biến để in kết quả đã để lưu kết quả đã tính dùng lệnh % để biết số chẵn lẻ
    var soChan3 = "";
    var soLe3 = "";
    var ket_qua3 = "";
    if (num3_1 % 2 == 0) {
        soChan3 += "," + num3_1;
    } else {
        soLe3 += "," + num3_1;
    }
    if (num3_2 % 2 == 0) {
        soChan3 += "," + num3_2;
    } else {
        soLe3 += "," + num3_2;
    }
    if (num3_3 % 2 == 0) {
        soChan3 += "," + num3_3;
    } else {
        soLe3 += "," + num3_3;
    }
    //đầu ra dùng biến ket_Qua3 đẫ cho nhận dữ liệu cần tìm rồi in ra màn hình
    ket_qua3 += "<h2>Số chẵn: " + soChan3 + ".</h2>";
    ket_qua3 += "<br>";
    ket_qua3 += "<h2>Số lẻ: " + soLe3 + ".</h2>";
    document.getElementById("ket_qua3").innerHTML = ket_qua3;
};





// bài 4
document.getElementById("btn_4").onclick = function () {
    // đầu vào dữ liệu 3 cạnh
    var num4_1 = document.getElementById("num4_1").value * 1;
    var num4_2 = document.getElementById("num4_2").value * 1;
    var num4_3 = document.getElementById("num4_3").value * 1;
    // xử lí dom tới thẻ btn_4 tạo 3 biến nhận dữ liệu, tạo 1 biến nhân kết quả tính xét theo những trường hợp theo nhiều trường hợp 
    var tamGiac_3 = "";
    if (num4_1 == num4_2 && num4_2 == num4_3) {
        tamGiac_3 += "<h3>Đây là tam giác đều</h3>"
    }
    else if (num4_1 == num4_2 || num4_1 == num4_3 || num4_2 == num4_3) {
        tamGiac_3 += "<h3>Đây là tam giác cân</h3>"
    }
    else if (num4_1 * num4_1 == num4_2 * num4_2 + num4_3 * num4_3) {
        tamGiac_3 += "<h3>Đây là tam giác vuông</h3>";
    }
    else if (num4_2 * num4_2 == num4_1 * num4_1 + num4_3 * num4_3) {
        tamGiac_3 += "<h3>Đây là tam giác vuông</h3>";
    }
    else if (num4_3 * num4_3 == num4_1 * num4_1 + num4_2 * num4_2) {
        tamGiac_3 += "<h3>Đây là tam giác vuông</h3>";
    }
    else {
        tamGiac_3 += "<h3>Đây là tam giác thường</h3>";

    }
    // đầu ra in ra màn hình kết quả bằn thẻ đã tạo ở trên
    document.getElementById("ket_qua4").innerHTML = tamGiac_3;
};