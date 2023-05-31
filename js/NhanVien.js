function NhanVien(tk, hoten, email, mk, ngayLam, luongCb, chucVu, gioLam) {
    this.taiKhoan = tk;
    this.hoTen = hoten;
    this.email = email;
    this.matKhau = mk;
    this.ngayLam = ngayLam;
    this.luongCb = luongCb;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.loaiNhanVien = "";
    //phuong thuc
    this.tinhTongLuong = function () {
        if (this.chucVu === "Giám Đốc") {
            this.tongLuong = this.luongCb * 3;
        } else if (this.chucVu === "Trưởng Phòng") {
            this.tongLuong = this.luongCb * 2;
        } else {
            this.tongLuong = this.luongCb;
        }
    }
    this.xepLoaiNhanVien = function () {
        if (this.gioLam >= 192) {
            this.loaiNhanVien = "Nhân viên xuất sắc";
        }
        else if (this.gioLam >= 176) {
            this.loaiNhanVien = "Nhân viên giỏi";
        }
        else if (this.gioLam >= 160) {
            this.loaiNhanVien = "Nhân viên khá";
        }
        else {
            this.loaiNhanVien = "Nhân viên trung bình";
        }
    }
}