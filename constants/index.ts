export const headerLinks = [
  {
    label: "Startseite",
    route: "/",
  },
  {
    label: "Event erstellen",
    route: "/events/create",
  },
  {
    label: "Mein Profil",
    route: "/profile",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
