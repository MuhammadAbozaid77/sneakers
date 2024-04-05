//
//
export const heardeLinks = [
  {
    link: "home",
    path: "home",
  },
  {
    link: "about",
    path: "about",
    linkDropDown: [{ dropdownLink: "page1" }, { dropdownLink: "page2" }],
  },
  {
    link: "categories",
    path: "categories",
    linkDropDown: [
      { dropdownLink: "jordan", path: "categories/jordan" },
      { dropdownLink: "sneakers", path: "categories/sneakers" },
      { dropdownLink: "runningShoes", path: "categories/runningShoes" },
      { dropdownLink: "footballShoes", path: "categories/footballShoes" },
    ],
  },
  {
    link: "find",
    path: "find",
  },
];
