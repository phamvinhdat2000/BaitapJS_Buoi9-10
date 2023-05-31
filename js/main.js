const dsnv = new DanhSachNhanVien();
const checkValid = new Validation();

getLocalStorage();

// set localstorage
function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}
function getLocalStorage() {
    let arr = JSON.parse(localStorage.getItem("DSNV"));
    if (arr !== null) {
        hienThiNhanVien(arr);
        dsnv.mangNV = arr;
    }
}

//them nhan vien
function themNhanVien() {
    let tk = domID("tknv").value;
    let hoten = domID("name").value;
    let email = domID("email").value;
    let mk = domID("password").value;
    let ngayLam = domID("datepicker").value;
    let luongCb = domID("luongCB").value;
    let chucVu = domID("chucvu").value;
    let gioLam = domID("gioLam").value;

    let valid = checkNV(tk, hoten, email, mk, ngayLam, luongCb, chucVu, gioLam, "themmoi");
    if (valid) {
        let nv = new NhanVien(tk, hoten, email, mk, ngayLam, luongCb, chucVu, gioLam);
        dsnv.themNhanVien(nv);
        nv.tinhTongLuong();
        nv.xepLoaiNhanVien();
        hienThiNhanVien(dsnv.mangNV);
        setLocalStorage();
        resetForm();
    }

}

//hien thi nhan vien
function hienThiNhanVien(mangNV) {
    let content = "";
    mangNV.map(function (nv) {
        let str = `<tr>
    <td>${nv.taiKhoan}</td>
    <td>${nv.hoTen}</td>
    <td>${nv.email}</td>
    <td>${nv.ngayLam}</td>
    <td>${nv.chucVu}</td>
    <td>${nv.tongLuong}</td>
    <td>${nv.loaiNhanVien}</td>
    <td><button class="btn btn-primary mb-2" onclick="xemNhanVien('${nv.taiKhoan}')" data-toggle="modal" data-target="#myModal">Xem</button>
    <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')">Xóa</button>
    </tr>`
        content += str;
    });
    domID("tableDanhSach").innerHTML = content;


}

//xoa nhan vien
function xoaNhanVien(tk) {
    dsnv.xoaNhanVien(tk);
    setLocalStorage();
    hienThiNhanVien(dsnv.mangNV);
}

function xemNhanVien(tk) {
    resetTB();
    let timIndex = dsnv.timIndex(tk);
    let nvSelect = dsnv.mangNV[timIndex];
    domID("tknv").value = nvSelect.taiKhoan;
    domID("tknv").disabled = true;
    domID("name").value = nvSelect.hoTen;
    domID("email").value = nvSelect.email;
    domID("password").value = nvSelect.matKhau;
    domID("datepicker").value = nvSelect.ngayLam;
    domID("luongCB").value = nvSelect.luongCb;
    domID("chucvu").value = nvSelect.chucVu;
    domID("gioLam").value = nvSelect.gioLam;
}

function capNhatNhanVien() {
    let tk = domID("tknv").value;
    let hoten = domID("name").value;
    let email = domID("email").value;
    let mk = domID("password").value;
    let ngayLam = domID("datepicker").value;
    let luongCb = domID("luongCB").value;
    let chucVu = domID("chucvu").value;
    let gioLam = domID("gioLam").value;

    let checkValid = checkNV(tk, hoten, email, mk, ngayLam, luongCb, chucVu, gioLam, "capnhat");
    if (checkValid) {
        let nvUpdate = new NhanVien(tk, hoten, email, mk, ngayLam, luongCb, chucVu, gioLam);
        nvUpdate.tinhTongLuong();
        nvUpdate.xepLoaiNhanVien();
        dsnv.capNhatNhanVien(nvUpdate);
        if (dsnv.capNhatNhanVien(nvUpdate)) {
            setLocalStorage();
            hienThiNhanVien(dsnv.mangNV);
            alert("cập nhật thành công");
            resetForm();
        }
        else {
            alert("cập nhật thất bại");
        }
    }


}

function checkNV(tk, hoten, email, mk, ngayLam, luongCb, chucVu, gioLam, type) {
    let valid = true;
    //check tk
    if (type === "themmoi") {
        valid &= checkValid.checkEmpty(tk, "tbTKNV", "Tài khoản không được để trống") && checkValid.checkDup(tk, "tbTKNV", "Tài khoản không được trùng", dsnv.mangNV) && checkValid.checkTK(tk, "tbTKNV", "Tài khoản không hợp lệ");
    }
    else {
        valid &= true;
    }
    //check ten nv
    valid &= checkValid.checkEmpty(hoten, "tbTen", "Tên nhân viên không được để trống") && checkValid.checkHoten(hoten, "tbTen", "Tên nhân viên phải là chữ,không có kí tự đặc biệt");

    //check email
    valid &= checkValid.checkEmpty(email, "tbEmail", "Email không được để trống") && checkValid.checkEmail(email, "tbEmail", "Email không hợp lệ");
    //check mk
    valid &= checkValid.checkEmpty(mk, "tbMatKhau", "Mật khẩu không được để trống") && checkValid.checkMk(mk, "tbMatKhau", "Mật khẩu từ 6-10 kí tự; phải chứa ít nhất 1 kí tự số, 1 ký tự đặc biệt, 1 chữ in hoa");

    //check ngay lam
    valid &= checkValid.checkEmpty(ngayLam, "tbNgay", "Ngày làm không được để trống") && checkValid.checkDate(ngayLam, "tbNgay", "Ngày làm định dạng mm/dd/yyyy");
    //check luong cb
    valid &= checkValid.checkEmpty(luongCb, "tbLuongCB", "Lương cơ bản không được để trống") && checkValid.checkLuongCb(luongCb, "tbLuongCB", "Lương cơ bản phải từ 1,000,000-20,000,000");
    //check chuc vu
    valid &= checkValid.checkChucVu(chucVu, "tbChucVu", "Chức vụ không hợp lệ");

    //check so gio lam
    valid &= checkValid.checkEmpty(gioLam, "tbGiolam", "Giờ làm không được để trống") && checkValid.checkGioLam(gioLam, "tbGiolam", "Giờ làm từ 80-200 giờ");
    return valid;
}

function resetForm() {
    domID("form").reset();
    domID("tknv").disabled = false;
    resetTB();

}

function resetTB() {
    domID("tbTKNV").style.display = "none";
    domID("tbTen").style.display = "none";
    domID("tbEmail").style.display = "none";
    domID("tbMatKhau").style.display = "none";
    domID("tbNgay").style.display = "none";
    domID("tbLuongCB").style.display = "none";
    domID("tbChucVu").style.display = "none";
    domID("tbGiolam").style.display = "none";
}


domID("searchName").onkeyup = function () {
    let gtNhap = domID("searchName").value;
    let newarr = dsnv.timNhanVienTheoLoai(gtNhap);
    hienThiNhanVien(newarr);
}

function domID(id) {
    return document.getElementById(id);
}