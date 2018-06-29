module.exports = function checkUrlHost(request) {
  var requestForCompany = 'akcs';
  if (request.hostname === process.env.AKCS_HOST) {
    requestForCompany='AKCS';
  }  else if (request.hostname === process.env.CATAPULT_HOST) {
    requestForCompany = 'CATAPULT';
  }
  return requestForCompany;
};