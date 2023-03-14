export const server_domain = "https://exceed.blueboxonline.com/?api";
export const apikey = "jj3y8bc6fd9hp3WcE7Ui0244d1boleap";
export const apisecret = "lq34ebau467";

export const getFormObj = () => {
  let formData = new FormData();
  formData.append("apikey", apikey);
  formData.append("apisecret", apisecret);

  return formData;
};
