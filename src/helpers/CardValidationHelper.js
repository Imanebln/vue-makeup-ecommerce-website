export default {
  //handle validation
  validCardNumber(cardNumber) {
    var re = /^[0-9]{13,19}$/;
    return re.test(cardNumber);
  },

  validExpiryDate(expiryDate) {
    var re = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    if (!re.test(expiryDate)) {
      return false;
    }

    var today = new Date();
    var parts = expiryDate.split("/");
    var month = parseInt(parts[0]);
    var year = parseInt(parts[1]);
    if (year < 100) {
      year += 2000;
    }
    var expiry = new Date(year, month - 1, 1);
    expiry.setMonth(expiry.getMonth() + 1);
    expiry.setDate(expiry.getDate() - 1);
    return expiry >= today;
  },

  onExpiryDateChange() {
    if (this.expiryDate.length === 2 && !this.expiryDate.includes("/")) {
      this.expiryDate += "/";
    }
  },

  validCvv(cvv) {
    var re = /^[0-9]{3,4}$/;
    return re.test(cvv);
  },
  checkForm() {
    this.errors = [];

    if (!this.cardNumber) {
      this.errors = { ...this.errors, cardNumberError: true };
    } else if (!this.validCardNumber(this.cardNumber)) {
      this.errors = { ...this.errors, cardNumberInvalidError: true };
    }

    // if (!this.expiryDate) {
    //   this.errors = { ...this.errors, expiryDateError: true };
    // } else if (!this.validExpiryDate(this.expiryDate)) {
    //   this.errors = { ...this.errors, expiryDateInvalidError: true };
    // }

    // if (!this.cvv) {
    //   this.errors = { ...this.errors, cvvError: true };
    // } else if (!this.validCvv(this.cvv)) {
    //   this.errors = { ...this.errors, cvvInvalidError: true };
    // }

    if (Object.values(this.errors).every((error) => !error)) {
      return true;
    }

    return false;
  },
};
