export const MENU_ITEMS = [
    {
        text: "Accueil",
        link: "/",
        loginRequired: false,
        hideIfLogged: false
      },
      {
        text: "Horaires",
        link: "/horaires",
        loginRequired: false,
        hideIfLogged: false
      },
      {
        text: "Évenements",
        link: "/evenements",
        loginRequired: false,
        hideIfLogged: false
      },
      {
        text: "Informations",
        link: "/informations",
        loginRequired: false,
        hideIfLogged: false
      },
      {
        text: "Se connecter",
        link: "/login",
        loginRequired: false,
        hideIfLogged: true
      },
      {
        text: "Mon compte",
        link: "/mon-compte",
        loginRequired: true,
        hideIfLogged: false
      },
      {
        text: "Se déconnecter",
        link: "/logout",
        loginRequired: true,
        hideIfLogged: false
      },
]