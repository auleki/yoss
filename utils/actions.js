// const email = 'kodagiwaa@gmail.com'

export const generateReferralCode = () => {
  let hash = 0;
  for (let i = 0; i < this.email.length; i++) {
    hash = this.email.charCodeAt(i) + ((hash << 5) - hash)
  }
  let res = (hash & 0x00ffffff).toString(16).toUpperCase();
  return "00000".substring(0, 6 - res.length) + res
}

