// TODO: 請將此 URL 替換為您的 Google Apps Script (GAS) API 實際網址
const GAS_API_URL =  "https://script.google.com/macros/s/AKfycby30G5gRCP82MpnfqEjxGZUmtnE7SyPPm2jcw4_Ofkam7tvbEu4GhxCKwmwWnaa-eMu/exec"

export const fetchSongs = async () => {
  const response = await fetch(GAS_API_URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
