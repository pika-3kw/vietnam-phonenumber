const regex = /^(?<countryCode>0|\+84)(?<mobilePrefix>\d{2})\d{7}$/;

exports.phoneNumberInfo = function (phoneNumberString) {
  const regexExec = regex.exec(phoneNumberString);

  if (regexExec) {
    const { mobilePrefix, countryCode } = regexExec.groups;

    let phoneNumber = "";
    let globalPhoneNumber = "";
    let networkOperator = "Other";

    if (countryCode === "+84") {
      phoneNumber = phoneNumberString.replace(/^\+84/, "0");
      globalPhoneNumber = phoneNumberString;
    }

    if (countryCode === "0") {
      phoneNumber = phoneNumberString;
      globalPhoneNumber = phoneNumberString.replace(/^0/, "+84");
    }

    if (/32|33|34|35|36|37|38|39/.test(mobilePrefix)) {
      networkOperator = "Viettel";
    } else if (/70|76|77|78|79/.test(mobilePrefix)) {
      networkOperator = "Mobifone";
    } else if (/81|82|83|84|85/.test(mobilePrefix)) {
      networkOperator = "Vinaphone";
    } else if (/56|58/.test(mobilePrefix)) {
      networkOperator = "Vietnammobile";
    } else if (/59/.test(mobilePrefix)) {
      networkOperator = "Gmobile";
    }

    return {
      networkOperator,
      phoneNumber,
      globalPhoneNumber,
    };
  } else {
    throw new Error("Invalid Vietnam Phone Number");
  }
};
