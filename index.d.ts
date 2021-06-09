export interface PhoneNumberInfo {
  networkOperator:
    | "Viettel"
    | "Mobifone"
    | "Vinaphone"
    | "Vietnammobile"
    | "Gmobile"
    | "Other";
  phoneNumber: string;
  globalPhoneNumber: string;
}

/**
 * @param {string} phoneNumberString
 * @returns {PhoneNumberInfo} Phone Number Info
 */

export declare function phoneNumberInfo(
  phoneNumberString: string
): PhoneNumberInfo;
