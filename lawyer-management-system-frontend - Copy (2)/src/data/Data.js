// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";
  
  // Analytics Cards imports
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
  import { keyboard } from "@testing-library/user-event/dist/keyboard";
  
  // Recent Card Imports
  import img1 from "../imgs/img1.png";
  import img2 from "../imgs/img2.png";
  import img3 from "../imgs/img3.png";
  
  // Sidebar Data
  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Tableau de bord",
      page :"/dashboard"
    },
    {
      icon: UilClipboardAlt,
      heading: "Commandes",
      page : "/commandes"
    },
    {
      icon: UilUsersAlt,
      heading: "Clients",
      page : "/clients"


    },
    {
        icon: UilPackage,
        heading: 'Les cas',
        page: "/documents"
      },
    {
      icon: UilPackage,
      heading: 'Revenue',
      page: "/revenue"
    }
   
  ];

  export const SidebarDataClient = [
    {
      icon: UilEstate,
      heading: "Demande",
      page :"/request"
    },
    {
      icon: UilUsersAlt,
      heading: "Notifications",
      page : "/notifications"
    },
    {
      icon: UilClipboardAlt,
      heading: "Créer un cas",
      page : "/create-case"
    },
    {
      icon: UilUsersAlt,
      heading: "Suivre cas",
      page : "/suivi-case"
    }
  ];
  
  // Analytics Cards Data
  export const cardsData = [
    {
      title: "Total clients",
      color: {
        backGround: "linear-gradient(180deg, #D8942F 0%, #cf9c4f 100%)",
        boxShadow: "0px 10px 20px 0px #cf9c4f",
      },
      barValue: 70,
      value: "12",
      png: UilUsdSquare,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Revenue",
      color: {
        backGround: "linear-gradient(180deg, #000 0%, #474545 100%)",
        boxShadow: "0px 10px 20px 0px #000",
      },
      barValue: 80,
      value: "12.270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [5000, 5900, 8450, 9010, 9600, 10005, 10054],
        },
      ],
    },
    {
      title: "Total commandes",
      color: {
        backGround:
          "linear-gradient(180deg, #777070 0%, #b4b0b0 100%)",
        boxShadow: "0px 10px 20px 0px #777070",
      },
      barValue: 60,
      value: "21",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  
  // Recent Update Card Data
  export const UpdatesData = [
    {
      img: img1,
      name: "Julie Dupont",
      noti: "a soumis une demande de consultation en droit du travail.",
      time: "Il y a 10 minutes",
    },
    {
      img: img1,
      name: "Julie Dupont",
      noti: "a soumis une demande de consultation en droit du travail.",
      time: "Il y a 10 minutes",
    },
    
    {
      img: img2,
      name: "Pierre Martin",
      noti: "a reçu une réponse concernant sa demande d'indemnisation pour accident de la route.",
      time: "Il y a 1 heure",
    },
    {
      img: img3,
      name: "Sophie Leclerc",
      noti: "a demandé des informations sur les procédures de succession.",
      time: "Il y a 3 heures",
    },
  ];
  
  export const ClientsData = [
    {
      idClient: 1, Nomc: "Jean Dupont", Email: "GiJerrycan.dupont@gmail.com", Tel: "+212 6 25 48 48 45"
    },
    {
      idClient: 2, Nomc: "Marie Martin", Email: "marie.martin@example.com", Tel: "+212 6 30 40 50 60"
    },
    {
      idClient: 3, Nomc: "Pierre Durand", Email: "pierre.durand@example.com", Tel: "+212 6 55 66 77 88"
    },
    {
      idClient: 4, Nomc: "Sophie Dubois", Email: "sophie.dubois@example.com", Tel: "+212 6 99 88 77 66"
    },
    {
      idClient: 5, Nomc: "Nicolas Leroy", Email: "nicolas.leroy@example.com", Tel: "+212 6 11 22 33 44"
    },
    {
      idClient: 6, Nomc: "Claire Garcia", Email: "claire.garcia@example.com", Tel: "+212 6 77 88 99 00"
    },
    {
      idClient: 7, Nomc: "Thomas Moreau", Email: "thomas.moreau@example.com", Tel: "+212 6 12 34 56 78"
    },
    {
      idClient: 8, Nomc: "Julie Laurent", Email: "julie.laurent@example.com", Tel: "+212 6 15 25 35 45"
    },
    {
      idClient: 9, Nomc: "Alexandre Petit", Email: "alexandre.petit@example.com", Tel: "+212 6 54 32 10 98"
    },
    {
      idClient: 10, Nomc: "Elodie Rousseau", Email: "elodie.rousseau@example.com", Tel: "+212 6 21 43 65 87"
    },
    {
      idClient: 11, Nomc: "Vincent Lefevre", Email: "vincent.lefevre@example.com", Tel: "+212 6 76 54 32 10"
    },
    {
      idClient: 12, Nomc: "Caroline Garcia", Email: "caroline.garcia@example.com", Tel: "+212 6 87 65 43 21"
    },
    {
      idClient: 13, Nomc: "Mathieu Morel", Email: "mathieu.morel@example.com", Tel: "+212 6 34 56 78 90"
    },
    {
      idClient: 14, Nomc: "Laura Robert", Email: "laura.robert@example.com", Tel: "+212 6 67 89 01 23"
    },
    {
      idClient: 15, Nomc: "Antoine Lemoine", Email: "antoine.lemoine@example.com", Tel: "+212 6 78 90 12 34"
    },
  ];

  export const DocData = [
    { Id: 1, nomD: "Divorce de Dupont", IdC: 1, Status: "En Cours", DateCreation: "2024-01-15" },
    { Id: 2, nomD: "Contrat de Vente Immobilière", IdC: 2, Status: "Terminé", DateCreation: "2024-02-05" },
    { Id: 3, nomD: "Contrat de Travail", IdC: 3, Status: "En Attente", DateCreation: "2024-03-10" },
    { Id: 4, nomD: "Convention de Séparation", IdC: 4, Status: "En Cours", DateCreation: "2024-04-20" },
    { Id: 5, nomD: "Accord de Partenariat Commercial", IdC: 5, Status: "Terminé", DateCreation: "2024-05-03" },
    { Id: 6, nomD: "Contrat de Location", IdC: 6, Status: "En Attente", DateCreation: "2024-06-12" },
    { Id: 7, nomD: "Testament de Smith", IdC: 7, Status: "En Cours", DateCreation: "2024-07-18" },
    { Id: 8, nomD: "Contrat de Franchise", IdC: 8, Status: "Terminé", DateCreation: "2024-08-25" },
    { Id: 9, nomD: "Licence d'Utilisation", IdC: 9, Status: "En Cours", DateCreation: "2024-09-30" },
    { Id: 10, nomD: "Mandat de Représentation Légale", IdC: 10, Status: "En Attente", DateCreation: "2024-10-07" },
    { Id: 11, nomD: "Contrat de Consultation Juridique", IdC: 11, Status: "En Cours", DateCreation: "2024-11-15" },
    { Id: 12, nomD: "Accord de Non-Divulgation", IdC: 12, Status: "Terminé", DateCreation: "2024-12-01" },
    { Id: 13, nomD: "Contrat de Prêt", IdC: 13, Status: "En Attente", DateCreation: "2025-01-10" },
    { Id: 14, nomD: "Testament de Jones", IdC: 14, Status: "En Cours", DateCreation: "2025-02-20" },
    { Id: 15, nomD: "Convention d'Arbitrage", IdC: 15, Status: "Terminé", DateCreation: "2025-03-05" },
    { Id: 16, nomD: "Contrat de Service Informatique", IdC: 16, Status: "En Cours", DateCreation: "2025-04-12" },
    { Id: 17, nomD: "Accord de Partenariat Artistique", IdC: 17, Status: "En Attente", DateCreation: "2025-05-20" },
    { Id: 18, nomD: "Contrat de Vente de Véhicule", IdC: 18, Status: "Terminé", DateCreation: "2025-06-30" },
    { Id: 19, nomD: "Accord de Coopération Internationale", IdC: 19, Status: "En Cours", DateCreation: "2025-07-08" },
    { Id: 20, nomD: "Contrat de Travail à Durée Déterminée", IdC: 20, Status: "En Attente", DateCreation: "2025-08-15" },
  ];

  export const RevenueData = [
    { id: 1, revenu: 4500, idC: 6, idD: 4 },
    { id: 2, revenu: 6000, idC: 3, idD: 8 },
    { id: 3, revenu: 3500, idC: 2, idD: 10 },
    { id: 4, revenu: 8000, idC: 7, idD: 5 },
    { id: 5, revenu: 5500, idC: 9, idD: 12 },
    { id: 6, revenu: 7000, idC: 5, idD: 15 },
    { id: 7, revenu: 4800, idC: 8, idD: 11 },
    { id: 8, revenu: 3000, idC: 4, idD: 14 },
    { id: 9, revenu: 5200, idC: 10, idD: 13 },
    { id: 10, revenu: 6700, idC: 11, idD: 16 },
    { id: 11, revenu: 4000, idC: 12, idD: 17 },
    { id: 12, revenu: 7500, idC: 13, idD: 18 },
    { id: 13, revenu: 5800, idC: 14, idD: 19 },
    { id: 14, revenu: 6300, idC: 15, idD: 20 },
    { id: 15, revenu: 4900, idC: 16, idD: 21 },
  ];
    