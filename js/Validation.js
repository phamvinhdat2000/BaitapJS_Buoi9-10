function Validation() {
    this.checkEmpty = function (value, spanID, mess) {
        if (value === "") {
            domID(spanID).style.display = "block";
            domID(spanID).innerHTML = mess;
            return false;
        }
        domID(spanID).style.display = "none";
        return true;
    };
    this.checkDup = function (value, spanID, mess, mangNV) {
        let check = mangNV.every(function (val) {
            return value !== val.taiKhoan;
        });
        if (check) {
            domID(spanID).style.display = "none";
            return true;
        }
        domID(spanID).style.display = "block";
        domID(spanID).innerHTML = mess;
        return false;
    };
    this.checkTK = function (value, spanID, mess) {
        let pattern = /^[0-9a-zA-Z]{4,6}$/;
        if (value.match(pattern)) {
            domID(spanID).style.display = "none";
            return true;
        }
        domID(spanID).style.display = "block";
        domID(spanID).innerHTML = mess;
        return false;
    };
    this.checkHoten = function (value, spanID, mess) {
        let pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (value.match(pattern)) {
            domID(spanID).style.display = "none";
            return true;
        }
        domID(spanID).style.display = "block";
        domID(spanID).innerHTML = mess;
        return false;
    },
        this.checkEmail = function (value, spanID, mess) {
            let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (value.match(pattern)) {
                domID(spanID).style.display = "none";
                return true;
            }
            domID(spanID).style.display = "block";
            domID(spanID).innerHTML = mess;
            return false;
        };
    this.checkMk = function (value, spanID, mess) {
        let pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{6,10}$/;
        if (value.match(pattern)) {
            domID(spanID).style.display = "none";
            return true;
        }
        domID(spanID).style.display = "block";
        domID(spanID).innerHTML = mess;
        return false;
    };
    this.checkDate = function (value, spanID, mess) {
        let pattern = /^(1[0-2]|0[1-9])\/(3[01]|[12][0-9]|0[1-9])\/[0-9]{4}$/;
        if (value.match(pattern)) {
            domID(spanID).style.display = "none";
            return true;
        }
        domID(spanID).style.display = "block";
        domID(spanID).innerHTML = mess;
        return false;
    };
    this.checkLuongCb = function (value, spanID, mess) {
        if (value >= 1000000 && value <= 20000000) {
            domID(spanID).style.display = "none";
            return true;
        }
        domID(spanID).style.display = "block";
        domID(spanID).innerHTML = mess;
        return false;
    };
    this.checkGioLam = function (value, spanID, mess) {
        if (value >= 80 && value <= 200) {
            domID(spanID).style.display = "none";
            return true;
        }
        domID(spanID).style.display = "block";
        domID(spanID).innerHTML = mess;
        return false;
    };
    this.checkChucVu = function (value, spanID, mess) {
        if (value === "0") {
            domID(spanID).style.display = "block";
            domID(spanID).innerHTML = mess;
            return false;
        }
        domID(spanID).style.display = "none";
        return true;
    }


}
function domID(id) {
    return document.getElementById(id);
}