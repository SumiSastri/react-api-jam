// select filters should have no more than 6 options for ui-ux best practice
// AUTHORS
export const authorOptions = [
  { id: 1, label: "Hema", value: "Hema" },
  { id: 2, label: "Lakshmi", value: "Lakshmi" },
  { id: 3, label: "Vatsala", value: "Vatsala" },
  { id: 4, label: "Radha", value: "Radha" },
  { id: 5, label: "Ragini", value: "Ragini" },
];

export const contentGenreOptions = [
  { id: 1, label: "short-stories", value: "short-stories" },
  { id: 2, label: "poetry", value: "poetry" },
  { id: 3, label: "essays-articles-blogs", value: "essays-articles-blogs" },
  { id: 4, label: "novels", value: "novels" },
  { id: 5, label: "novellas", value: "novellas" },
];

// MUSIC
export const musicUserOptions = [
  { id: 1, label: "musician", value: "musician" },
  { id: 2, label: "musicBuyer", value: "musicBuyer" },
  { id: 3, label: "musicAgent", value: "musicAgent" },
];

export const musicFormatOptions = [
  { label: "mp4", value: "mp4" },
  { label: "wav", value: "wav" },
  { label: "mp3", value: "mp3" },
];

export const musicGenreOptions = [
  { id: 1, label: "rap", value: "rap" },
  { id: 2, label: "reggae", value: "reggae" },
  { id: 3, label: "hip-hop", value: "hip-hop" },
  { id: 4, label: "pop", value: "pop" },
  { id: 5, label: "rnb", value: "rnb" },
  { id: 6, label: "rock", value: "rock" },
  { id: 7, label: "rocknroll", value: "rock-and-roll" },
];

export const groupedOptions = [
  { label: "userType", options: musicUserOptions },
  { label: "musicGenres", options: musicGenreOptions },
  { label: "musicFormats", options: musicFormatOptions },
];

// PROPERTY
export const propertyUserOptions = [
  { label: "Admininstrator", value: "admininstrator" },
  { label: "Tenant", value: "tenant" },
  { label: "Landlord", value: "landlord" },
  { label: "Service Providers", value: "serviceProviders" },
];

//  HR
export const payrollEnquiryOptions = [
  { label: "Incorrect-Pay", value: "Incorrect Pay" },
  { label: "Missing-Expense", value: "Missing Expense" },
  { label: "Change-of-Bank-Details", value: "Change of Bank Details" },
  { label: "Change-of-Address", value: "Change of Address" },
  { label: "Other", value: "Other" },
  { label: "Select an option", value: "Select an option" },
];
