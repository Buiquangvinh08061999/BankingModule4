


class Customer{
    constructor(id, fullName, email , phone , adress, balance = 0, deleted = 0){
            this.id = id
            this.fullName = fullName
            this.email = email
            this.phone= phone
            this.adress = adress
            this.balance = balance
            this.deleted = deleted
    }
}

class Deposit {
    constructor(id, customerId, transactionAmount, createdAt, createdBy = "", updatedAT = "", updatedBy = "", deleted = 0) {
        this.id = id;
        this.customerId = customerId;
        this.transactionAmount = transactionAmount;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.updatedAt = updatedAT;
        this.updatedBy = updatedBy;
        this.deleted = deleted;
    }
}

class Withdraw {
    constructor(id, customerId, transactionAmount, createdAt, createdBy = "", updatedAT = "", updatedBy = "", deleted = 0) {
        this.id = id;
        this.customerId = customerId;
        this.transactionAmount = transactionAmount;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.updatedAt = updatedAT;
        this.updatedBy = updatedBy;
        this.deleted = deleted;
    } 
}

class Transfer{
    constructor(id,createdAt,createdBy = "",deleted = 0,updatedAt = "",updatedBy = "",fees = 10,feesAmount,transactionAmount,transferAmount,recipientId,senderId){
        this.id = id;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.deleted = deleted;
        this.updatedAt = updatedAt;
        this.updatedBy = updatedBy;
        this.fees = fees;
        this.feesAmount = feesAmount;
        this.transferAmount = transferAmount;
        this.transactionAmount = transactionAmount;
        this.senderId = senderId;
        this.recipientId = recipientId;
    }
}

class App {
    static SweetAlert = class {
        static showAlertSuccess(t) {
            Swal.fire({
                position: 'middle-center',
                icon: 'success',
                title: t,
                showConfirmButton: false,
                timer: 2500
        })
        }

        static showAlertError(t) {
            Swal.fire({
                position: 'middle-center',
                icon: 'error',
                title: t,
                showConfirmButton: false,
                timer: 2500
            })
        }

        static showConfirmDelete() {
            return Swal.fire({
                title: 'Are you sure to deactive the selected customer ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085D6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, deactive it!'
            });
        }
    }
}