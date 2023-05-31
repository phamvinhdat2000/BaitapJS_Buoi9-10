function DanhSachNhanVien() {
    this.mangNV = [];
    // phuong thuc
    this.themNhanVien = function (sv) {
        this.mangNV.push(sv);
    };
    this.timIndex = function (tk) {
        return this.mangNV.findIndex(function (nv) {
            return nv.taiKhoan === tk;
        })
    };
    this.xoaNhanVien = function (tk) {
        let indexFind = this.timIndex(tk);
        if (indexFind > -1) {
            this.mangNV.splice(indexFind, 1);
        }
    };
    this.capNhatNhanVien = function (nv) {
        let findIndex = this.timIndex(nv.taiKhoan);
        if (findIndex > -1) {
            this.mangNV[findIndex] = nv;
            return true;
        }
        return false;
    };
    this.timNhanVienTheoLoai = function (gtNhap) {
        let mangTim = [];
        let gtNhapFix = gtNhap.toLowerCase().replace(/\s/g, "");

        this.mangNV.map(function (val) {
            let gtTimFix = val.loaiNhanVien.toLowerCase().replace(/\s/g, "");
            if (gtTimFix.indexOf(gtNhapFix) > -1) {
                mangTim.push(val);
            }
        })
        return mangTim;
    }

}