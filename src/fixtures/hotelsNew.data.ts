import { HotelRowProps } from "../components/hotelRow/HotelRowStacked"

export const hotelsData: HotelRowProps[] = [
  {
    "name": "Best Western Plus Hotel Hong Kong",
    "location": "Central and Western",
    "address": "308 Des Voeux Road West",
    "reservationSite": "http://www.bestwesternplushot\nelhongkong.com",
    "email": "hotel@bestwesternplushotel.com",
    "phone": 34103333,
    "col8": 25598499,
    "col9": 129,
    rooms: [
      {
        price: 650,
        pax: 1,
        isSuite: true,
      },
      {
        price: 750,
        pax: 2,
        isSuite: true
      },
      {
        price: 530,
        pax: 1,
        isSuite: false
      },
      {
        price: 630,
        pax: 2,
        isSuite: false
      },
      {
        price: 730,
        pax: 3,
        isSuite: false
      }
    ],
    "col10": "HK$650 Single Occupancy/ HK$750\nDouble Occupancy",
    "col11": 178,
    "col12": "HK$530 Single Occupancy/ HK$630 Double Occupancy/ HK$730 Triple\nОссирancy",
    "col13": "Y",
    "col14": "Y",
    "col15": "Hotel welcomes the quarantine guests under the age of 18 to\nstay and we will provide special care for the guests. In addition,\nthe contact phone number for the guest's guardian will be\nrequired"
  },
  {
    "name": "CM+ Hotels & Serviced Apartments",
    "location": "Central and Western",
    "address": "No. 16 Connaught Road West, Hong Kong",
    "reservationSite": "https://cmplus.com.hk/zh/quara\nntine-package/",
    "email": "cmplus @cmpd.com.hk",
    "phone": 35606738,
    "col8": 37096622,
    "col9": 19,
    "col10": "$2,300\n(1 ppl with meals)\n$2,400\n(2 ppls with meals)",
    "col11": 35,
    "col12": "$2,300\n(1 ppl with meals)\n$2,400\n(2 ppls with meals)",
    "col13": "Y\nPlease refer to Hotel\nPolicy stipulated on\nhotel website",
    "col14": "Y",
    "col15": "Must stay with an adult",
    rooms: [
      {
        price: 2300,
        pax: 1,
        info: 'with meals',
        isSuite: true
      },
      {
        price: 2400,
        pax: 2,
        info: 'with meals',
        isSuite: true
      },


      {
        price: 2300,
        pax: 1,
        info: 'with meals',
        isSuite: false
      },
      {
        price: 2400,
        pax: 2,
        info: 'with meals',
        isSuite: false
      }
    ]
  },
  {
    "name": "Courtyard by Marriott Hong Kong",
    "location": "Central and Western",
    "address": "167 Connaught Road West, Hong Kong",
    "reservationSite": "www.courtyardhongkong.com",
    "email": "cyhk@courtyard.com",
    "phone": "3717 8888",
    "col8": "3717 8228",
    "col9": 5,
    "col10": "$2,500Net with Full broad (Single)\n$2,700Net with Full broad (Double)",
    "col11": 170,
    "col12": "- Deluxe City View\n$890Net with Full broad (Single)\n$1,090Net with Full broad (Double)\n- Deluxe Harbour View\n$1,180Net with Full broad (Single)\n$1,380Net with Full broad (Double)\n- Connecting rooms are available and subject to availability",
    "col13": "Y",
    "col14": "Y",
    "col15": "(a) Must stay with an adult\n(b) Must stay with an adult\n(c) Consent & Indemnity form to be filled by Parents/Guardian.",
    rooms: [
      {
        price: 2500,
        pax: 1,
        info: 'net with full broad',
        isSuite: true
      },
      {
        price: 2700,
        pax: 2,
        info: 'net with full broad',
        isSuite: true
      },
      {
        name: 'Deluxe City View',
        price: 890,
        pax: 1,
        isSuite: false,
        info: 'net with full broad'
      },
      {
        name: 'Deluxe City View',
        price: 1090,
        pax: 2,
        isSuite: false,
        info: 'net with full broad'
      },
      {
        name: 'Deluxe Harbour View',
        price: 1180,
        pax: 1,
        isSuite: false,
        info: 'net with full broad'
      },
      {
        name: 'Deluxe harbour View',
        price: 1380,
        pax: 2,
        info: 'net with full broad',
        isSuite: false,

      },
    ],
  },
  {
    rooms: [
      {
        price: 600,
        pax: 1,
        isSuite: true
      },
      {
        price: 700,
        pax: 2,
        isSuite: true
      },
      {
        price: 480,
        pax: 1,
        isSuite: false
      },
      {
        price: 580,
        pax: 2,
        isSuite: false
      }

    ],
    "name": "Grand City Hotel",
    "location": "Central and Western",
    "address": "338 Queen's Road West",
    "reservationSite": "http://www.grandcityhotelhong\nkong.com",
    "email": "hotel@grandcityhotelhongkong.com",
    "phone": 21921222,
    "col8": 25170588,
    "col9": 10,
    "col10": "HK$600 Single Occupancy/ HK$700\nDouble Occupancy",
    "col11": 204,
    "col12": "HK$480 Single Occupancy/ HK$580 Double Occupancy",
    "col13": "Y",
    "col14": "Y",
    "col15": "Hotel welcomes the quarantine guests under the age of 18 to\nstay and we will provide special care for the guests. In addition,\nthe contact phone number for the guest's guardian will be\nrequired"
  },
  {
    "name": "JEN Hong Kong by Shangri-La",
    "location": "Central and Western",
    "address": "508 Queen's Road West, Hong Kong SAR",
    "reservationSite": "https://www.shangri-\nla.com/en/hotels/jen/hongkong/\nwesterndistrict",
    "email": "csteam.hongkong@shangri-la.com",
    "phone": "2733 8786",
    "col8": "",
    "col9": 5,
    "col10": "HK$1,988 (Single)\nHK$2,238 (Double)",
    "col11": 264,
    "col12": "Superior Room\nHK$548 (Single)\nHK$798 (Double)\nDeluxe City View Room\nHK$698 (Single)\nHK$948 (Double)\nDeluxe Harbour View Room\nHK$748 (Single)\nHK$998 (Double)\nConnecting room supplement fee-HK$400",
    "col13": "Y",
    "col14": "Y",
    "col15": "(a) Must stay with an adult\n(b) Must stay with an adult\n(c) The hotel suggests that guests aged 18 years or under be\naccompanied by a parent or legal guardian. If the guest decides\nto stay alone, the guest needs to present a letter signed by a\nparent/legal guardian to confirm this arrangement before\nchecking-in at the hotel.",
    rooms: [
      {
        isSuite: true,
        price: 1988,
        pax: 1
      },
      {
        isSuite: true,
        price: 2238,
        pax: 2
      },
      {
        isSuite: false,
        name: 'Superior Room',
        price: 548,
        pax: 1
      },
      {
        isSuite: false,
        name: 'Superior Room',
        price: 798,
        pax: 2
      },
      {
        isSuite: false,
        name: 'Deluxe City View Room',
        price: 698,
        pax: 1
      },
      {
        isSuite: false,
        name: 'Deluxe City View Room',
        price: 948,
        pax: 2
      },
      {
        isSuite: false,
        name: 'Deluxe Harbour View Room',
        price: 748,
        pax: 1
      },
      {
        isSuite: false,
        name: 'Deluxe Harbour View Room',
        price: 998,
        pax: 2
      }
    ],
  },
  {
    "name": "Lan Kwai Fong Hotel @ Kau U Fong",
    "location": "Central and Western",
    "address": "No.3 Kau U Fong, Central, Hong Kong",
    "reservationSite": "https://www.dcollection.com/en\n/lan-kwai-fong-hotel-kau-u-\nfong/",
    "email": "ISvn@lankwaifonghotel.com.hk",
    "phone": 36500299,
    "col8": 36500288,
    "col9": 5,
    "col10": "Harbour View Suite:\nHK$3,980 (1 рах)\nHK$4,280 (2 pax)",
    "col11": 157,
    "col12": "Standard Room\nHK$950 (1 рах)\nHK$1,250 (2 рах)\nSuperior Room\nHK$1,150 (1 pax)\nHK$1,450 (2 pax)\nHarbour View Room\nHK$1,450 (1 pax)\nНK$1,750 (2 рах)\nDeluxe Room\nHK$1,980 (1 pax)\nHK$2,280 (2 pax)",
    "col13": "Y",
    "col14": "N",
    "col15": "A parent / legal guardian physically shows up to complete the\nregistration and check-out with the child.\nThe parent / legal guardian is required to sign a Declaration\nForm",
    rooms: [
      {
        name: 'harbour view suite',
        price: 3980,
        pax: 1,
        isSuite: true
      },
      {
        name: 'harbour view suite',
        price: 4280,
        pax: 2,
        isSuite: true
      },
      {
        name: 'Standard Room',
        price: 950,
        pax: 1,
        isSuite: false
      },
      {
        name: 'Standard Room',
        price: 1250,
        pax: 2,
        isSuite: false
      },
      {
        name: 'Superior Room',
        price: 1150,
        pax: 1,
        isSuite: false
      },
      {
        name: 'Superior Room',
        price: 1450,
        pax: 2,
        isSuite: false
      },
      {
        name: 'Harbour view Room',
        price: 1450,
        pax: 1,
        isSuite: false
      },
      {
        name: 'Harbour view Room',
        price: 1750,
        pax: 2,
        isSuite: false
      },
      {
        name: 'Deluxe Room',
        price: 1980,
        pax: 1,
        isSuite: false
      },
      {
        name: 'Deluxe Room',
        price: 2280,
        pax: 2,
        isSuite: false
      },
    ]
  },
  {
    "name": "One-Eight-One Hotel & Serviced\nResidences",
    "location": "Central and Western",
    "address": "181 Connaught Road West, Hong Kong",
    "reservationSite": "www.one-eight-one.com",
    "email": "enquiries@one-eight-one.com",
    "phone": 31811688,
    "col8": "N/A",
    "col9": 25,
    "col10": "HK$4,486 for single\nHK$5,087 for double",
    "col11": 115,
    "col12": "Urban Room\nHK$1,964 (Single)\nHK$2,403 (Double)\nHarbour Room\nHK$2,607 (Single)\nHK$3,046 (Double)\nLuxe Harbour\nHK$2,964 (Single)\nHK$3,402 (Double)",
    "col13": "Y",
    "col14": "Y",
    "col15": "(a) Must stay with an adult\n(b) Must stay with an adult\n(c) Must stay with an adult",
    rooms: [
      {
        price: 4486,
        pax: 1,
        isSuite: true
      },
      {
        price: 5087,
        pax: 1,
        isSuite: true
      },
      {
        name: 'Urban Room',
        price: 1964,
        pax: 1,
        isSuite: false
      },
      {
        name: 'Urban Room',
        price: 2403,
        pax: 2,
        isSuite: false
      },
      {
        name: 'Harbour Room',
        price: 2607,
        pax: 1,
        isSuite: false
      },
      {
        name: 'Harbour Room',
        price: 3046,
        pax: 2,
        isSuite: false
      },
      {
        name: 'Luxe Room',
        price: 2964,
        pax: 1,
        isSuite: false
      },
      {
        name: 'Luxe Room',
        price: 3402,
        pax: 2,
        isSuite: false
      },
    ]
  },
  {
    "name": "Ovolo Central",
    "location": "Central and Western",
    "address": "2 Arbuthnot Road, Central, Hong Kong",
    "reservationSite": "https://ovolohotels.com/ovolo/o\nffers/meet-your-quarantine-\nconcierge/",
    "email": "reservations @ovologroup.com",
    "phone": "2165 1000",
    "col8": "2790 5490",
    "col9": 1,
    "col10": "Radio Suite:\nHK$4,800 (Single)\nHK$5,100 (Double)",
    "col11": 38,
    "col12": "Deluxe Room (GOLD):\nHK$1,700 (Single)\nHK$2,000 (Double)\nPremium Room (PLATINUM):\nHK$2,000 (Single)\nHK$2,300 (Double)",
    "col13": "Y",
    "col14": "N",
    "col15": "We welcome guests 16 years old to stay in the hotel alone for\nquarantine themselves, a parent/legal guardian require to\ncomplete a consent letter for underage prior check in.\nIf the guest is 16 years old or younger, the guest must be\naccompanied by a parent/legal guardian, and follow the same\nquarantine rules during the stay in hotel.\nSpecific room type will be arrange for underage.",
    rooms: [
      {
        name: 'Radio Suite',
        isSuite: true,
        price: 4800,
        pax: 1
      },
      {
        name: 'Radio Suite',
        isSuite: true,
        price: 5100,
        pax: 2
      },
      {
        name: 'Deluxe Room (GOLD)',
        isSuite: false,
        price: 1700,
        pax: 1
      },
      {
        name: 'Deluxe Room (GOLD)',
        isSuite: false,
        price: 2000,
        pax: 2
      },
      {
        name: 'Premium Room (PLATINUM)',
        isSuite: false,
        price: 2000,
        pax: 1
      },
      {
        name: 'Premium Room (PLATINUM)',
        isSuite: false,
        price: 2300,
        pax: 2
      },
    ]
  },
  {
    "name": "Ramada Hong Kong Harbour View",
    "location": "Central and Western",
    "address": "239 Queen's Road West Hong Kong",
    "reservationSite": "http://www.ramadahongkongha\nrbourview.com/",
    "email": "rsvn@ramadahkhv.com",
    "phone": "2599 9888",
    "col8": "2559 1266",
    "col9": "",
    "col10": "",
    "col11": 432,
    "col12": "HK$ 480\n(single occupancy)\nHK$ 580\n(double occupancy)",
    "col13": "Y",
    "col14": "Y",
    "col15": "Our hotel welcomes the quarantine guests under the age of 18 to\nstay and we will provide special care for the guests. In addition,\nthe contact phone number for the guest's guardian will be\nrequired.",
    rooms: [
      {
        isSuite: false,
        price: 480,
        pax: 1
      },
      {
        isSuite: false,
        price: 580,
        pax: 2
      }
    ]
  },
  {
    "name": "The Landmark Mandarin Oriental Hong\nKong",
    "location": "Central and Western",
    "address": "The Landmark, 15 Queen's Road Central, Hong Kong",
    "reservationSite": "https://www.mandarinoriental.c\nom/hong-kong/the-\nlandmark/luxury-hotel",
    "email": "anitangan@mohg.com",
    "phone": "+852 2132 0188/ +852\n9163 0011",
    "col8": "+852 2132 0199",
    "col9": 13,
    "col10": "L900 Suite, 85 sqm : HK$7,810 (Single)\nHK$9,075 (Double)\nLandmark Suite, 140 sqm: HK$38,500\n(Single)\nHK$40,150 (Double)\nEntertainment Suite, 166 sqm:\nHK$49,500 (Single)\nHK$51,150 (Double)",
    "col11": 98,
    "col12": "L450 Superior / L450 Deluxe, 42 sqm: HK$3,630 (Single) HK$4,895 (Double)\nL600 Deluxe, 56 sqm: HK$4,950 (Single) HK$6,215 (Double)\nL600 Premier / L600 Executive, 56 sqm: HK$5,830 (Single) HK$7,095 (Double)",
    "col13": "Y - Deliver\nPersonal Item only\nN - Deliver Food\nItem",
    "col14": "Y",
    "col15": "Consent & Indemnity form to be filled by Parents/Guardian. If\nthe minor is to be accompanied by an adult during his/her stay,\nthe caretaker is required to apply for conditional approval from\nthe Department of Health by email to\ncaretaker_apply@dh.gov.hk, before the arrival of the guests.",
    rooms: [
      {
        name: 'L900 Suite',
        area: 85,
        price: 7810,
        pax: 1,
        isSuite: true
      },
      {
        name: 'L900 Suite',
        area: 85,
        price: 9075,
        pax: 2,
        isSuite: true

      },
      {
        name: 'Landmark Suite',
        area: 140,
        price: 38500,
        pax: 1,
        isSuite: true

      },
      {
        name: 'Landmark Suite',
        area: 140,
        price: 40150,
        pax: 2,
        isSuite: true

      },
      {
        name: 'Entertainment Suite',
        area: 166,
        price: 49500,
        pax: 2,
        isSuite: true
      },
      {
        name: 'Entertainment Suite',
        area: 166,
        price: 51150,
        pax: 2,
        isSuite: true
      },
      {
        name: 'L450 Superior / Deluxe',
        area: 42,
        price: 3630,
        pax: 1,
        isSuite: false
      },
      {
        name: 'L450 Superior / Deluxe',
        area: 42,
        price: 4895,
        pax: 2,
        isSuite: false
      },
      {
        name: 'L600 Deluxe',
        area: 42,
        price: 4950,
        pax: 1,
        isSuite: false
      },
      {
        name: 'L600 Deluxe',
        area: 42,
        price: 6215,
        pax: 2,
        isSuite: false
      },
      {
        name: 'L600 Premier / L600 Executive',
        area: 56,
        price: 5830,
        pax: 1,
        isSuite: false
      },
      {
        name: 'L600 Premier / L600 Executive',
        area: 56,
        price: 7095,
        pax: 2,
        isSuite: false
      },
    ]
  },
  {
    "name": "Ramada Hong Kong Grand View",
    "location": "Eastern",
    "address": "No.88 Chun Yeung Street,\nNorth Point, Hong Kong Hong Kong",
    "reservationSite": "www.ramadahongkonggrandvie\nw.com",
    "email": "hotel@ramadahkgv.com",
    "phone": "2130 3388",
    "col8": "2130 3399",
    "col9": 33,
    "col10": "HK$680\n(Single Occupancy)\nHK$780\n(Double Occupancy)\nHK$880\n(Triple Occupancy)\nHK$980\n(Quadruple Occupancy)",
    "col11": 284,
    "col12": "HK$530\n(Single Occupancy)\nHK$630\n(Double Occupancy)\nHK$730\n(Triple Occupancy)",
    "col13": "Y",
    "col14": "Y",
    "col15": "Our hotel welcomes the quarantine guests under the age of 18 to\nstay and we will provide special care for the guests. In addition,\nthe contact phone number for the guest's guardian will be\nrequired.\n(Guests under the age of 14 must stay with an adult)",
    rooms: [
      {
        price: 680,
        pax: 1,
        isSuite: true
      },
      {
        price: 780,
        pax: 2,
        isSuite: true
      },
      {
        price: 880,
        pax: 3,
        isSuite: true
      },
      {
        price: 980,
        pax: 4,
        isSuite: true
      },
      {
        price: 530,
        pax: 1,
        isSuite: false
      },
      {
        price: 630,
        pax: 2,
        isSuite: false
      },
      {
        price: 730,
        pax: 3,
        isSuite: false
      }
    ]
  },
  {

    "name": "Four Points by Sheraton Hong Kong,\nTung Chung",
    "location": "Islands",
    "address": "9 Yi Tung Road, Tung Chung, Lantau Island, Hong Kong",
    "reservationSite": "https://www.marriott.com/hotel\ns/hotel-deals/details/hkgfp-\nfour-points-hong-kong-tung-\nchung/off-19568",
    "email": "fp.hkgfp.reservations@fourpoints.c\nom",
    "phone": 23528035,
    "col8": 23528011,
    "col9": 13,
    "col10": "HK$2,500 (Single)\nHK$3,000 (Double)",
    "col11": 587,
    "col12": "Traditional Room:\nHK$880 (Single)\nHK$1,180 (Double)\nOcean View Room:\nHK$1,100 (Single)\nHK$1,400 (Double)",
    "col13": "Y",
    "col14": "Y",
    "col15": "(a) Must stay with an adult\n(b) Needs to present a document signed by a parent/ legal\nguardian to confirm such arrangement upon check-in\n(c) Needs to present a document signed by a parent/ legal\nguardian to confirm such arrangement upon check-in",
    rooms: [
      {
        isSuite: false,
        name: 'Traditional Room',
        price: 880,
        pax: 1
      },
      {
        isSuite: false,
        name: 'Traditional Room',
        price: 1180,
        pax: 2
      },
      {
        isSuite: true,
        price: 2500,
        pax: 1
      },
      {
        isSuite: true,
        price: 3000,
        pax: 2
      }

    ]

  },
  {
    "name": "Regal Airport Hotel",
    "location": "Islands",
    "address": "9 Cheong Tat Road, Hong Kong International Airport,\nChek Lap Kok, Hong Kong",
    "reservationSite": "https://www.regalhotel.com/reg\nal-airport-hotel",
    "email": "stay@airport.regalhotel.com",
    "phone": "(852) 2286 6888",
    "col8": "(852) 2286 8622",
    "col9": 36,
    "col10": "Presidential Suite (360 sq. m.): 3-\nbedrooms suite with kitchen.\n$16,000 (Single),\n$19,000 (Double),\n$22,000 (Triple)\nInclude 3 meals per staying guest (s)\nDeluxe Suite:\n$2,490 (Single),\n$3,090 (Double)\nInclude 3 meals per staying guest (s)\nSuite:\n$1,990 (Single),\n$2,590 (Double)\nInclude 3 meals per staying guest (s)",
    "col11": 664,
    "col12": "Deluxe Room -\n$890 (Single)\n$1,290 (Double)\n$1,690 (Triple)\nInclude 3 meals per staying guest (s)\nStandard Room -\n$590 (Single)\n$890 (Double)\n$1,190 (Triple)\nInclude 3 meals per staying guest (s)\nEcomony Room -\n$500 (Single)\n$800 (Double)\n$1,100 (Triple)\nInclude 3 meals per staying guest (s)",
    "col13": "Yes. Accept outside\ndelivery. Items will\nbe delivered to\nroom 3 times a day\nas followed: 10:00\nam - 12:00 noon,\n2:00 pm - 4:00 pm,\n7:00 pm - 9:00 pm.",
    "col14": "Y",
    "col15": "(a) Must stay with an adult\n(b) Must stay with an adult\n(c) A letter signed by his/her parent or guardian to confirm the\narrangement is required prior check-in",
    rooms: [
      {
        name: 'Presidential Suite',
        area: 360,
        info: 'bedrooms suite with kitchen, 3 meals per guest',
        price: 16000,
        pax: 1,
        isSuite: true
      },
      {
        name: 'Presidential Suite',
        area: 360,
        info: 'bedrooms suite with kitchen, 3 meals per guest',
        price: 19000,
        pax: 2,
        isSuite: true

      },
      {
        name: 'Presidential Suite',
        area: 360,
        info: 'bedrooms suite with kitchen, 3 meals per guest',
        price: 22000,
        pax: 3,
        isSuite: true

      },
      {
        name: 'Deluxe Suite',
        price: 2490,
        pax: 1,
        info: '3 meals per guest',
        isSuite: true

      },
      {
        name: 'Deluxe Suite',
        price: 3090,
        pax: 2,
        info: '3 meals per guest',
        isSuite: true

      },
      {
        name: 'Suite',
        price: 1990,
        pax: 1,
        info: '3 meals per guest',
        isSuite: true

      },
      {
        name: 'Suite',
        price: 2590,
        pax: 1,
        info: '3 meals per guest',
        isSuite: true
      },
      {
        name: 'Deluxe Room',
        isSuite: false,
        price: 890,
        pax: 1,
        info: '3 meals per guest'
      },
      {
        name: 'Deluxe Room',
        isSuite: false,
        price: 1290,
        pax: 2,
        info: '3 meals per guest'
      },
      {
        name: 'Deluxe Room',
        isSuite: false,
        price: 1690,
        pax: 3,
        info: '3 meals per guest'
      },
      {
        name: 'Standard Room',
        isSuite: false,
        price: 590,
        pax: 1,
        info: '3 meals per guest'
      },
      {
        name: 'Standard Room',
        isSuite: false,
        price: 890,
        pax: 2,
        info: '3 meals per guest'
      },
      {
        name: 'Standard Room',
        isSuite: false,
        price: 1190,
        pax: 3,
        info: '3 meals per guest'
      },
      {
        name: 'Economy Room',
        isSuite: false,
        price: 500,
        pax: 1,
        info: '3 meals per guest'
      },
      {
        name: 'Economy Room',
        isSuite: false,
        price: 800,
        pax: 2,
        info: '3 meals per guest'
      },
      {
        name: 'Economy Room',
        isSuite: false,
        price: 1100,
        pax: 3,
        info: '3 meals per guest'
      },

    ]
  },
  {
    "name": "Bridal Tea House Hotel Hung Hom\nGillies Avenue South",
    "location": "Kowloon City",
    "address": "No. 69 Gillies Avenue South, Hung Hom",
    "reservationSite": "https://bthhotel.com",
    "email": "info@bthhotel.com",
    "phone": "2364 1212",
    "col8": "2365 7662",
    "col9": "",
    "col10": "",
    "col11": 45,
    "col12": "HK$450",
    "col13": "Y",
    "col14": "N",
    "col15": "Hotel does not accept children under 18 years old",
    rooms: [
      {
        isSuite: true,
        price: 450,
        pax: 1,
        info: 'Check with hotel regarding number of guests'
      }
    ]
  },
  {
    "name": "iclub Ma Tau Wai Hotel",
    "location": "Kowloon City",
    "address": "8 Ha Heung Road, Ma Tau Wai, Hong Kong",
    "reservationSite": "https://www.iclub-\nhotels.com/iclub-ma-tau-wai-\nhotel",
    "email": "servicedesk@matauwai.iclub-\nhotels.com",
    "phone": "(852) 3963 6600",
    "col8": "(852) 3963 6622",
    "col9": "",
    "col10": "",
    "col11": 340,
    "col12": "Connecting/Family Room\n2 perons at $1,290\n3 persons at $1,590\n4 persons at $1,890\nSuperior Room\nSingle occupancy at $690\nDouble occupancy at $990\nStandard Room\nSingle occupancy at $590\nDouble occupancy at $890\nEconomy Room\nSingle occupancy at $500\nDouble occupancy at $750\n** The above rates include 3 meals per staying guest (s)",
    "col13": "Yes. Accept outside\ndelivery. Items will\nbe delivered to\nroom 3 times a day\nas followed:\n10:00am-\n12:00noon,\n2:00pm-4:00pm,\n7:00pm-9:00pm",
    "col14": "Y",
    "col15": "(a) Must stay with an adult\n(b) Must stay with an adult\n(c) A letter signed by his/her parent or guardian to confirm the\narrangement is required prior check-in",
    rooms: [
      {
        name: 'Connecting/family room',
        price: 1290,
        pax: 2,
        isSuite: false,
        info: 'includes 3 meals per guest'

      },
      {
        name: 'Connecting/family room',
        price: 1590,
        pax: 3,
        isSuite: false,
        info: 'includes 3 meals per guest'

      },
      {
        name: 'Connecting/family room',
        price: 1890,
        pax: 4,
        isSuite: false,
        info: 'includes 3 meals per guest'

      },
      {
        name: 'Superior Room',
        price: 690,
        pax: 1,
        isSuite: false,
        info: 'includes 3 meals per guest'

      },
      {
        name: 'Superior Room',
        price: 990,
        pax: 2,
        isSuite: false,
        info: 'includes 3 meals per guest'

      },
      {
        name: 'Standard Room',
        price: 590,
        pax: 1,
        isSuite: false,
        info: 'includes 3 meals per guest'

      },
      {
        name: 'Standard Room',
        price: 890,
        pax: 2,
        isSuite: false,
        info: 'includes 3 meals per guest'

      },
      {
        name: 'Economy Room',
        price: 500,
        pax: 1,
        isSuite: false,
        info: 'includes 3 meals per guest'

      },
      {
        name: 'Economy Room',
        price: 750,
        pax: 2,
        isSuite: false,
        info: 'includes 3 meals per guest'
      },
    ]
  },
  {
    "name": "Kerry Hotel, Hong Kong",
    "location": "Kowloon City",
    "address": "38 Hung Luen Road, Hung Hom Bay, Kowloon Hong\nKong SAR",
    "reservationSite": "http://www.shangri-\nla.com/tc/hongkong/kerry/",
    "email": "csteam.hongkong@shangri-la.com",
    "phone": "2733 8786",
    "col8": "",
    "col9": 24,
    "col10": "HK$4,188",
    "col11": 358,
    "col12": "HK$1,706",
    "col13": "Y",
    "col14": "Y",
    "col15": "(a) Must stay with an adult\n(b) Must stay with an adult\n(c) The hotel suggests that guests aged 18 years or under be\naccompanied by a parent or legal guardian. If the guest decides\nto stay alone, the guest needs to present a letter signed by a\nparent/legal guardian to confirm this arrangement before\nchecking-in at the hotel.",
    rooms: [
      {
        isSuite: true,
        pax: 2,
        price: 4188,
        info: 'check with hotel regarding pax'
      },
      {
        isSuite: false,
        price: 1706,
        pax: 2,
        info: 'Check with hotel regarding pax'
      }
    ]
  },
  {
    "name": "Metropark Hotel Kowloon",
    "location": "Kowloon City",
    "address": "75 Waterloo Road, Kowloon, Hong Kong",
    "reservationSite": "www.MetroparkHotelKowloon.\ncom",
    "email": "hotel.hkkl@metroparkhotels.com",
    "phone": "2761 1711",
    "col8": "2761 0769",
    "col9": 8,
    "col10": "Suite Room\n$1,440 (Single)\n$1,600 (Double)\nMetropark Suite\n$3,800 (Single)\n$3,960 (Double)",
    "col11": 477,
    "col12": "Standard Room\n$580 (Single)\n$740 (Double)\nSuperior Room\n$680 (Single)\n$840 (Double)",
    "col13": "Y",
    "col14": "Y",
    "col15": "Guest under the age of 15 must be accompanied by an adult.",
    rooms: [
      {
        name: 'Suite Room',
        pax: 1,
        isSuite: true,
        price: 1440
      },
      {
        name: 'Suite Room',
        pax: 2,
        isSuite: true,
        price: 1600
      },
      {
        name: 'Metropark Suite',
        pax: 1,
        isSuite: true,
        price: 3800
      },
      {
        name: 'Metropark Suite',
        pax: 2,
        isSuite: true,
        price: 3960
      },
      {
        name: 'Standard Room',
        pax: 1,
        isSuite: false,
        price: 580
      },
      {
        name: 'Standard Room',
        pax: 2,
        isSuite: false,
        price: 740
      },
      {
        name: 'Superior Room',
        pax: 1,
        isSuite: false,
        price: 680
      },
      {
        name: 'Superior Room',
        pax: 2,
        isSuite: false,
        price: 840
      }
    ]
  },
  {
    "name": "Regal Oriental Hotel",
    "location": "Kowloon City",
    "address": "30 - 38 Sa Po Road, Kowloon City, Hong Kong",
    "reservationSite": "https://www.regalhotel.com/reg\nal-oriental-hotel",
    "email": "roh.foam@regalhotel.com",
    "phone": "(852) 6117 9319",
    "col8": "(852) 2718 4111",
    "col9": 20,
    "col10": "Presidential Suite (130 sq. m.): 2-\nbedrooms suite with kitchen.\n$9,800 (Single), $11,800 (Double),\n$13,800 (Triple) Include 3 meals per\nstaying guest (s)\nDeluxe Apartment Suite (107 sq. m.): 2-\nbedrooms suite with kitchen.\n$8,800 (Single), $10,800 (Double),\n$12,800 (Triple) Include 3 meals per\nstaying guest (s)\nSuite: $1,590 (Single), $1,990 (Double)\nInclude 3 meals per staying guest (s)",
    "col11": 390,
    "col12": "Deluxe Room - $790 (Single) $1,140 (Double) $1,490 (Triple) Include 3 meals per\nstaying guest (s)\nStandard Room - $590 (Single)$890 (Double)$1,190 (Triple)Include 3 meals per\nstaying guest (s)\nEcomony Roomn - $500 (Single)$750 (Double)$1,000 (Triple)Include 3 meals per\nstaying guest (s)",
    "col13": "Yes\nAccept outside\ndelivery. Items will\nbe delivered to\nroom 3 times a day\nas followed:\n10:00 am - 12:00\nпоon\n2:00 pm 4:00 pm\n7:00 pm - 9:00 pm",
    "col14": "Y",
    "col15": "(a) Must stay with an adult\n(b) Must stay with an adult\n(c) A letter signed by his/her parent or guardian to confirm the\narrangement is required prior check-in",
    rooms: [
      {
        name: 'Presidential Suite',
        isSuite: true,
        area: 130,
        info: '2 bedrooms with suite with Kitchen',
        price: 9800,
        pax: 1
      },
      {
        name: 'Presidential Suite',
        isSuite: true,
        area: 130,
        info: '2 bedrooms with suite with Kitchen',
        price: 11800,
        pax: 2
      },
      {
        name: 'Presidential Suite',
        isSuite: true,
        area: 130,
        info: '2 bedrooms with suite with Kitchen',
        price: 13800,
        pax: 3
      },
      {
        name: 'Presidential Suite',
        isSuite: true,
        area: 130,
        info: '2 bedrooms with suite with Kitchen',
        price: 13800,
        pax: 3
      },
      {
        name: 'Deluxe apartment Suite',
        isSuite: true,
        area: 107,
        info: '2 bedrooms with suite with Kitchen',
        price: 8800,
        pax: 1
      },
      {
        name: 'Deluxe apartment Suite',
        isSuite: true,
        area: 107,
        info: '2 bedrooms with suite with Kitchen',
        price: 10800,
        pax: 2
      },
      {
        name: 'Deluxe apartment Suite',
        isSuite: true,
        area: 107,
        info: '2 bedrooms with suite with Kitchen',
        price: 12800,
        pax: 3
      },
      {
        name: 'Suite',
        isSuite: true,
        info: '2 bedrooms with suite with Kitchen',
        price: 1590,
        pax: 1
      },
      {
        name: 'Suite',
        isSuite: true,
        info: '2 bedrooms with suite with Kitchen',
        price: 1990,
        pax: 2
      },
      {
        name: 'Deluxe Room',
        isSuite: false,
        price: 790,
        pax: 1
      },
      {
        name: 'Deluxe Room',
        isSuite: false,
        price: 1140,
        pax: 2
      },
      {
        name: 'Deluxe Room',
        isSuite: false,
        price: 1490,
        pax: 3,
        info: 'includes 3 meals per guest'
      },
      {
        name: 'Standard Room',
        isSuite: false,
        price: 590,
        pax: 1,
        info: 'includes 3 meals per guest'
      },
      {
        name: 'Standard Room',
        isSuite: false,
        price: 890,
        pax: 2,
        info: 'includes 3 meals per guest'
      },
      {
        name: 'Standard Room',
        isSuite: false,
        price: 1190,
        pax: 3,
        info: 'includes 3 meals per guest'
      },
      {
        name: 'Economy Room',
        isSuite: false,
        price: 500,
        pax: 1,
        info: 'includes 3 meals per guest'
      },
      {
        name: 'Economy Room',
        isSuite: false,
        price: 750,
        pax: 2,
        info: 'includes 3 meals per guest'
      },
      {
        name: 'Economy Room',
        isSuite: false,
        price: 1000,
        pax: 3,
        info: 'includes 3 meals per guest'
      }
    ]
  },

  {
    "name": "Dorsett Tsuen Wan, Hong Kong",
    "location": "Kwai Tsing District",
    "address": "28 Kin Chuen Street, Kwai Chung, Hong Kong",
    "reservationSite": "https://www.dorsetthotels.com/\nzh-hk/dorsett-tsuen-\nwan/offers/4 14 min16 nights\nspecial.html",
    "email": "reservations.tsuenwan@dorsetthotel\ns.com",
    "phone": "3996 6863",
    "col8": "3996 6806",
    "col9": 44,
    "col10": "$1,300.00\n(Include 3 meals for one person)\n$1,500.00\n(Include 3 meals for two person)",
    "col11": 436,
    "col12": "Superior\n$600 (1 рах) / $800 (2 рах)\nDorsett (170R)\n$700 (1 рах)/ $900 (2 рах)\nDeluxe\n$800 (1 рах)/ $1,000 (2 рах) / $1,200 (3 рах)\nInterconnecting\n$1,600 (2 pax) /$1,800 (3 pax)/$2,000 (4 pax)/$2,200 (5 pax)",
    "col13": "Y",
    "col14": "Y",
    "col15": "A parent / legal guardian physically shows up to complete the\nregistration and check-out with the child.\nThe parent / legal guardian is required to sign a Declaration\nForm",
    rooms: [
      {
        isSuite: true,
        price: 1300,
        pax: 2,
        info: 'Check with hotel regarding pax, 3 meals per guest'
      },
      {
        isSuite: true,
        price: 1500,
        pax: 2,
        info: 'Check with hotel regarding pax, 3 meals per guest'
      },
      {
        name: 'Superior',
        isSuite: false,
        price: 600,
        pax: 1,
        info: 'Check with hotel regarding pax, 3 meals per guest'
      },
      {
        name: 'Superior',
        isSuite: false,
        price: 800,
        pax: 2,
        info: 'Check with hotel regarding pax, 3 meals per guest'
      },
      {
        name: 'Dorsett',
        isSuite: false,
        price: 700,
        pax: 1,
        info: 'Check with hotel regarding pax, 3 meals per guest'
      },
      {
        name: 'Dorsett',
        isSuite: false,
        price: 900,
        pax: 2,
        info: 'Check with hotel regarding pax, 3 meals per guest'
      },
      {
        name: 'Deluxe',
        isSuite: false,
        price: 800,
        pax: 1,
        info: 'Check with hotel regarding pax, 3 meals per guest'
      },
      {
        name: 'Deluxe',
        isSuite: false,
        price: 1000,
        pax: 2,
        info: 'Check with hotel regarding pax, 3 meals per guest'
      },
      {
        name: 'Deluxe',
        isSuite: false,
        price: 1200,
        pax: 3,
        info: 'Check with hotel regarding pax, 3 meals per guest'
      },
      {
        name: 'Interconnecting',
        isSuite: false,
        price: 1600,
        pax: 2,
        info: 'Check with hotel regarding pax, 3 meals per guest'
      },
      {
        name: 'Interconnecting',
        isSuite: false,
        price: 1800,
        pax: 3,
        info: 'Check with hotel regarding pax, 3 meals per guest'
      },
      {
        name: 'Interconnecting',
        isSuite: false,
        price: 2000,
        pax: 4,
        info: 'Check with hotel regarding pax, 3 meals per guest'
      },
      {
        name: 'Interconnecting',
        isSuite: false,
        price: 2200,
        pax: 5,
        info: 'Check with hotel regarding pax, 3 meals per guest'
      }
    ]
  },
  {
    "name": "Nina Hotel Island South (Formerly\nL'hotel Island South)",
    "location": "Southern District",
    "address": "55 Wong Chuk Hang Road, Aberdeen, Hong Kong",
    "reservationSite": "https://www.ninahotelgroup.co\nm/en/nina-hotel-island-\nsouth/quarantine",
    "email": "reservations.is @ninahotelgroup.com",
    "phone": "3968 8838",
    "col8": "3968 8868",
    "col9": 11,
    "col10": "City View Suite: $2,100 (Single)/\n$2,350 (Double)\nAqua Suite (With balcony): $2,800\n(Single) / $3,050 (Double)\nGrand Aqua Suite (With balcony):\n$3,800 (Single) /$4,050 (Double)\nThe above rates are inclusive of Meal\nbox for Breakfast, Lunch and Dinner,\nadditional Meal Box at $250 net per\nperson per day",
    "col11": 421,
    "col12": "City View Room: $770 (Single)/$1,020 (Double)\nHill View Room: $870 (Single) / $1,120 (Double)\nHill View Room with Balcony: $1,420 (Single)/ $1,670 (Double)\nFamily Room: $1,840 (Double)\nThe above rates are inclusive of Meal box for Breakfast, Lunch and Dinner,\nadditional Meal Box at $250 net per person per day",
    "col13": "Y",
    "col14": "Y",
    "col15": "Pre-registration by parents or guardians would be needed for\nguests under the age of 18",
    rooms: [
      {
        name: 'City View Suite',
        isSuite: true,
        pax: 1,
        price: 2100,
        info: 'The above rates are inclusive of Mealbox for Breakfast, Lunch and Dinner,additional Meal Box at $250 net perperson per day'
      },
      {
        name: 'City View Suite',
        isSuite: true,
        pax: 2,
        price: 2350,
        info: 'The above rates are inclusive of Mealbox for Breakfast, Lunch and Dinner,additional Meal Box at $250 net perperson per day'
      },
      {
        name: 'Aqua Suite (with balcony)',
        isSuite: true,
        pax: 1,
        price: 2800,
        info: 'The above rates are inclusive of Mealbox for Breakfast, Lunch and Dinner,additional Meal Box at $250 net perperson per day'
      },
      {
        name: 'Aqua Suite (with balcony)',
        isSuite: true,
        pax: 2,
        price: 3050,
        info: 'The above rates are inclusive of Mealbox for Breakfast, Lunch and Dinner,additional Meal Box at $250 net perperson per day'
      },
      {
        name: 'Grand Aqua Suite (with balcony)',
        isSuite: true,
        pax: 1,
        price: 3800,
        info: 'The above rates are inclusive of Mealbox for Breakfast, Lunch and Dinner,additional Meal Box at $250 net perperson per day'
      },
      {
        name: 'Grand Aqua Suite (with balcony)',
        isSuite: true,
        pax: 2,
        price: 4050,
        info: 'The above rates are inclusive of Mealbox for Breakfast, Lunch and Dinner,additional Meal Box at $250 net perperson per day'
      },
      {
        name: 'City View Room',
        isSuite: false,
        pax: 1,
        price: 770,
        info: 'The above rates are inclusive of Mealbox for Breakfast, Lunch and Dinner,additional Meal Box at $250 net perperson per day'
      },
      {
        name: 'City View Room',
        isSuite: false,
        pax: 2,
        price: 1020,
        info: 'The above rates are inclusive of Mealbox for Breakfast, Lunch and Dinner,additional Meal Box at $250 net perperson per day'
      },
      {
        name: 'Hill View Room',
        isSuite: false,
        pax: 1,
        price: 870,
        info: 'The above rates are inclusive of Mealbox for Breakfast, Lunch and Dinner,additional Meal Box at $250 net perperson per day'
      },
      {
        name: 'Hill View Room',
        isSuite: false,
        pax: 2,
        price: 1120,
        info: 'The above rates are inclusive of Mealbox for Breakfast, Lunch and Dinner,additional Meal Box at $250 net perperson per day'
      },
      {
        name: 'Hill View Room With Balcony',
        isSuite: false,
        pax: 1,
        price: 1420,
        info: 'The above rates are inclusive of Mealbox for Breakfast, Lunch and Dinner,additional Meal Box at $250 net perperson per day'
      },
      {
        name: 'Hill View Room With Balcony',
        isSuite: false,
        pax: 2,
        price: 1670,
        info: 'The above rates are inclusive of Mealbox for Breakfast, Lunch and Dinner,additional Meal Box at $250 net perperson per day'
      },
      {
        name: 'Family room',
        isSuite: false,
        pax: 2,
        price: 1840,
        info: 'The above rates are inclusive of Mealbox for Breakfast, Lunch and Dinner,additional Meal Box at $250 net perperson per day'
      }
    ]
  },
  {
    "name": "Ovolo Southside",
    "location": "Southern District",
    "address": "64 Wong Chuk Hang Road, Wong Chuk Hang",
    "reservationSite": "https://ovolohotels.com/ovolo/o\nffers/meet-your-quarantine-\nconcierge/",
    "email": "reservations @ovologroup.com",
    "phone": "2165 1000",
    "col8": "2790 5490",
    "col9": 38,
    "col10": "Rockstar Suite:\nHK$4,200 (Single)\nHK$4,450 (Double)\nConnecting Rooms (Per Room):\nHK$1,700 (Single)\nHK$1,950 (Double)",
    "col11": 122,
    "col12": "Non-suite Twin:\nHK$580 (Single)\nHK$830 (Double)\nNon-suite Queen:\nHK$690 (Single)\nHK$940 (Double)\nDeluxe Room:\nHK$1,050 (Single)\nHK$1,300 (Double)\nPremium Room:\nHK$1,800 (Single)\nHK$2,050 (Double)\nHK$2,300 (Triple)",
    "col13": "Y",
    "col14": "Y",
    "col15": "We welcome guests between 14 to 17 years old to stay in the\nhotel alone for quarantine themselves, a parent/legal guardian\nrequire to complete a consent letter for underage prior check in.\nIf the guest is 14 years old or younger, the guest must be\naccompanied by a parent/legal guardian, and follow the same\nquarantine rules during the stay in hotel.\nSpecific room type will be arrange for underage.",
    rooms: [
      {
        name: 'Rockstar Suite',
        price: 4200,
        pax: 1,
        isSuite: true
      },
      {
        name: 'Rockstar Suite',
        price: 4450,
        pax: 2,
        isSuite: true
      },
      {
        name: 'Connecting Rooms (Per Room)',
        price: 1700,
        pax: 1,
        isSuite: true
      },
      {
        name: 'Connecting Rooms (Per Room)',
        price: 1950,
        pax: 2,
        isSuite: true
      },
      {
        isSuite: false,
        name: 'Non-suite Twin',
        pax: 1,
        price: 580
      },
      {
        isSuite: false,
        name: 'Non-suite Twin',
        pax: 2,
        price: 830
      },
      {
        isSuite: false,
        name: 'Non-suite Queen',
        pax: 1,
        price: 690
      },
      {
        isSuite: false,
        name: 'Non-suite Queen',
        pax: 2,
        price: 940
      },
      {
        isSuite: false,
        name: 'Deluxe Room',
        pax: 1,
        price: 1050
      },
      {
        isSuite: false,
        name: 'Deluxe Room',
        pax: 2,
        price: 1300
      },
      {
        isSuite: false,
        name: 'Premium Room',
        pax: 1,
        price: 1800
      },
      {
        isSuite: false,
        name: 'Premium Room',
        pax: 2,
        price: 2050
      },
      {
        isSuite: false,
        name: 'Premium Room',
        pax: 3,
        price: 2300
      }
    ]
  },
  {
    "name": "Silka Far East Hotel Hong Kong",
    "location": "Tsuen Wan",
    "address": "135 - 143 Castle Peak Road,\nTsuen Wan, New Terrorites",
    "reservationSite": "www.silkahotels.com/fareast",
    "email": "info.fareast@silkahotels.com",
    "phone": "2406 9090",
    "col8": "3657 2828",
    "col9": "",
    "col10": "",
    "col11": 240,
    "col12": "Туре 1\nHK$498 Net\n(one pax)\nHK$650 Net\n(two pax)\nТуре 2\nHK$900 Net\n(three pax)",
    "col13": "Y",
    "col14": "Y",
    "col15": "(a) Must stay with an adult\n(b) A parent/legal guardian should physically show up to\ncomplete the registration and check-out with the child. The\nparent/legal guardian is required to sign a Declaration Form\n(c) The parent/legal guardian is required to sign a declaration\nform to hotel before check-in",
    rooms: [
      {
        isSuite: false,
        name: 'Type 1',
        price: 498,
        pax: 1
      },
      {
        isSuite: false,
        name: 'Type 1',
        price: 650,
        pax: 2
      },
      {
        isSuite: false,
        name: 'Type 2',
        price: 900,
        pax: 3
      }
    ]
  },
  {
    "name": "Best Western Hotel Causeway Bay",
    "location": "Wanchai",
    "address": "38 Bowrington Road, Causeway Bay",
    "reservationSite": "http://www.bestwesternhotelho\nngkong.com",
    "email": "rSvn@bestwesternhotelhongkong.co",
    "phone": "2496 6666",
    "col8": "3147 9237",
    "col9": "",
    "col10": "",
    "col11": 254,
    "col12": "$480(Single Occupancy)/$580(Double Occupancy)",
    "col13": "Y",
    "col14": "Y",
    "col15": "(a) & (b) & (c) Hotel welcomes the quarantine guests under the\nage of 18 to stay and we will provide special care for the guests.\nIn addition, the contact phone number for the guest's guardian\nwill be required",
    rooms: [
      {
        isSuite: false,
        price: 480,
        pax: 1
      },
      {
        isSuite: false,
        price: 580,
        pax: 2
      }
    ]
  },

  {
    "name": "Crowne Plaza Hong Kong Causeway Bay",
    "location": "Wanchai",
    "address": "8 Leighton Road, Causeway Bay, Hong Kong",
    "reservationSite": "www.cphongkong.com",
    "email": "rsvn@cphongkong.com",
    "phone": "3980 3980",
    "col8": "3980 3399",
    "col9": 10,
    "col10": "HK$4,988 (Single)\nHK$5,538 (Double)\nRates mentioned are for Single / Double\nОссирancy.\nEach additional Guest is subject to an\nadditional charge of HK$550 per room\nper night\n(including children at 3 years old or\nabove).",
    "col11": 118,
    "col12": "Specialty Room\nHK$1,988 (Single)\nHK$2,538 (Double)\nFamily Room\nHK$1,688 (Single)\nHK$2,238 (Double)\nDeluxe Room Y. HK$1,488 (Single)\nHK$2,038 (Double)\nSuperior Room\nHK$1,288 (Single)\nHK$1,838 (Double)\nStandard Room\nHK$1,088 (Single)\nHK$1,638 (Double)\nRates mentioned are for Single / Double Occupancy.\nEach additional Guest is subject to an additional charge of HK$550 per room per\nnight\n(including children at 3 years old or above).\nSuperior Room",
    "col13": "Y. However, hotel\nshall, from time to\ntime at its sole\ndiscretion, adjust\nthis policy\naccording to the\nsituation.",
    "col14": "Y",
    "col15": "(a) Guardian must register for the guest in advance.\n(b) Guardian must register for the guest in advance.\n(c) Guardian must register for the guest in advance.",
    rooms: [
      {
        isSuite: true,
        pax: 1,
        price: 4988,
        info: 'Each additional guest is subject to an additional charg of HK$550 per room per night, including children at 3 years old or above'
      },
      {
        isSuite: true,
        pax: 1,
        price: 5538,
        info: 'Each additional guest is subject to an additional charg of HK$550 per room per night, including children at 3 years old or above'
      },
      {
        isSuite: false,
        pax: 1,
        name: 'Specialty Room',
        price: 1988,
        info: 'Each additional guest is subject to an additional charg of HK$550 per room per night, including children at 3 years old or above'
      },
      {
        isSuite: false,
        pax: 2,
        name: 'Specialty Room',
        price: 2538,
        info: 'Each additional guest is subject to an additional charg of HK$550 per room per night, including children at 3 years old or above'
      },
      {
        isSuite: false,
        pax: 1,
        name: 'Family Room',
        price: 1688,
        info: 'Each additional guest is subject to an additional charg of HK$550 per room per night, including children at 3 years old or above'
      },
      {
        isSuite: false,
        pax: 2,
        name: 'Family Room',
        price: 2238,
        info: 'Each additional guest is subject to an additional charg of HK$550 per room per night, including children at 3 years old or above'
      },
      {
        isSuite: false,
        pax: 1,
        name: 'Deluxe Room',
        price: 1488,
        info: 'Each additional guest is subject to an additional charg of HK$550 per room per night, including children at 3 years old or above'
      },
      {
        isSuite: false,
        pax: 2,
        name: 'Deluxe Room',
        price: 2038,
        info: 'Each additional guest is subject to an additional charg of HK$550 per room per night, including children at 3 years old or above'
      },
      {
        isSuite: false,
        pax: 1,
        name: 'Superior Room',
        price: 1288,
        info: 'Each additional guest is subject to an additional charg of HK$550 per room per night, including children at 3 years old or above'
      },
      {
        isSuite: false,
        pax: 2,
        name: 'Superior Room',
        price: 1838,
        info: 'Each additional guest is subject to an additional charg of HK$550 per room per night, including children at 3 years old or above'
      },
      {
        isSuite: false,
        pax: 1,
        name: 'Standard Room',
        price: 1088,
        info: 'Each additional guest is subject to an additional charg of HK$550 per room per night, including children at 3 years old or above'
      },
      {
        isSuite: false,
        pax: 2,
        name: 'Standard Room',
        price: 1638,
        info: 'Each additional guest is subject to an additional charg of HK$550 per room per night, including children at 3 years old or above'
      },

    ]
  },
  {

    "name": "Dorsett Wanchai Hong Kong",
    "location": "Wanchai",
    "address": "387 - 397 Queen's Road East, Wan Chai, Hong Kong",
    "reservationSite": "https://www.wanchai.dorsetthot\nels.com/",
    "email": "reservation.wanchai@dorsetthotels.\ncom",
    "phone": "852 3552 1133",
    "col8": "852 3552 1410",
    "col9": 20,
    "col10": "Executive Suite\nHK$3400 nett (Single)\nHK$3800 nett (Double)\nInclude three meals Standard Menu",
    "col11": 400,
    "col12": "Superior Room\n$880 nett (Single)\n$1280 nett (Double)\nInclude three meals - Standard Menu\nPremier Causeway Bay City View Room\n(Limited Number of Inter-Connecting Rooms Available, Subejct to Availability)\n$1400 nett (Single)\n$1800 nett (Double)\nInclude three meals - Standard Menu\nPremier Course View Room\n(Limited Number of Inter-Connecting Rooms Available, Subejct to Availability)\n$1600 nett (Single)\n$2000 nett (Double)\nInclude three meals - Standard Menu\nDeluxe Triple Room (for 3 persons stay)\n(3 firm single beds)\n$2000 (3 persons)\nInclude three meals - Standard Menu\nFamily Quad Room (for 4 persons stay)\n$2400 (4 persons)\nInclude three meals - Standard Menu",
    "col13": "Y",
    "col14": "Yes, selected room\ntypes",
    "col15": "(a) Age 11 years old : The parent / legal guardian is required to\nsign a Declaration Form.\nBelow 11 years old : Must Stay with an adult\n(b) Between 12 and 15 years old: The parent / legal guardian is\nrequired to sign a Declaration Form\n(c) Between 16 and 17 years old : The parent / legal guardian is\nrequired to sign a Delclaration Form",
    rooms: [
      {
        name: 'Executive Suite',
        isSuite: true,
        price: 3400,
        pax: 1,
        info: 'Includes three meals - Standard Menu'
      },
      {
        name: 'Executive Suite',
        isSuite: true,
        price: 3800,
        pax: 2,
        info: 'Includes three meals - Standard Menu'
      },
      {
        name: 'Superior Room',
        isSuite: true,
        price: 880,
        pax: 1,
        info: 'Includes three meals - Standard Menu'
      },
      {
        name: 'Superior Room',
        isSuite: true,
        price: 1280,
        pax: 2,
        info: 'Includes three meals - Standard Menu'
      },
      {
        name: 'Premier Causeway Bay City View room',
        isSuite: true,
        price: 1400,
        pax: 1,
        info: 'Includes three meals - Standard Menu. Limited Number of Inter-connecting Rooms available.'
      },
      {
        name: 'Premier Causeway Bay City View room',
        isSuite: true,
        price: 1800,
        pax: 2,
        info: 'Includes three meals - Standard Menu. Limited Number of Inter-connecting Rooms available.'
      },
      {
        name: 'Premier Course View room',
        isSuite: true,
        price: 1600,
        pax: 1,
        info: 'Includes three meals - Standard Menu. Limited Number of Inter-connecting Rooms available.'
      },
      {
        name: 'Premier Course View room',
        isSuite: true,
        price: 2000,
        pax: 2,
        info: 'Includes three meals - Standard Menu. Limited Number of Inter-connecting Rooms available.'
      },
      {
        name: 'Deluxe Triple Room (for 3 persons stay)',
        isSuite: true,
        price: 2000,
        pax: 3,
        info: 'Includes three meals - Standard Menu. Limited Number of Inter-connecting Rooms available.'
      },
      {
        name: 'Family Quad Room (for 4 persons stay)',
        isSuite: true,
        price: 2400,
        pax: 4,
        info: 'Includes three meals - Standard Menu. Limited Number of Inter-connecting Rooms available.'
      },
    ]
  },
  {
    "name": "Eco Tree Hotel Causeway Bay",
    "location": "Wanchai",
    "address": "15 Mercury Street, Causeway Bay, Hong Kong",
    "reservationSite": "https://causewaybay.ecotreehot\nel.com.hk/home/",
    "email": "reservation@ecotreehotelewb.com.h\nk",
    "phone": 23171788,
    "col8": 23171328,
    "col9": 2,
    "col10": "$1,200 (Single);\n$1,400 (Double)",
    "col11": 97,
    "col12": "Superior Room\n$570 (Single)\n$770 (Double)\nSuperior Corner Room\n$670 (Single)\n$870 (Double)\nDeluxe Room\n$770 (Single)\n$970 (Double)",
    "col13": "Y (9AM-9PM)",
    "col14": "Y",
    "col15": "(a) Must stay with an adult\n(b) Must stay with an adult\n(c) The guardian needs to sign a consent form",
    rooms: [
      {
        isSuite: true,
        price: 1200,
        pax: 1
      },
      {
        isSuite: true,
        price: 1400,
        pax: 2
      },
      {
        name: 'Superior Room',
        isSuite: false,
        price: 570,
        pax: 1
      },
      {
        name: 'Superior Room',
        isSuite: false,
        price: 770,
        pax: 2
      },
      {
        name: 'Superior Corner Room',
        isSuite: false,
        price: 670,
        pax: 1
      },
      {
        name: 'Superior Corner Room',
        isSuite: false,
        price: 870,
        pax: 2
      },
      {
        name: 'Deluxe Room',
        isSuite: false,
        price: 770,
        pax: 1
      },
      {
        name: 'Deluxe Room',
        isSuite: false,
        price: 970,
        pax: 2
      },
    ]
  },
  {
    "name": "Hotel Indigo Hong Kong Island",
    "location": "Wanchai",
    "address": "No. 246 Queen's Road East, Hong Kong",
    "reservationSite": "www.hotelindigo.com/hongkon",
    "email": "ISVn.hkgin@ihg.com",
    "phone": 39263888,
    "col8": 39263926,
    "col9": "6.",
    "col10": "Premier Suite\n$3,880 (Single)\n$4,180 (Double)",
    "col11": 132,
    "col12": "Superior Room\n$1,180 (Single)\n$1,480 (Double)\nDeluxe Room\n$1,580 (Single)\n$1,880 (Double)",
    "col13": "Y",
    "col14": "Y",
    "col15": "(a) Must stay with an adult\n(b) Must stay with an adult\n(c) Can stay on their own, if consent form signed by the legal\nguardian before check-in.",
    rooms: [
      {
        name: 'Premier Suite',
        price: 3880,
        pax: 1,
        isSuite: true
      },
      {
        name: 'Premier Suite',
        price: 4180,
        pax: 1,
        isSuite: true
      },
      {
        isSuite: false,
        name: 'Superior Room',
        price: 1180,
        pax: 1
      },
      {
        isSuite: false,
        name: 'Superior Room',
        price: 1480,
        pax: 2
      },
      {
        isSuite: false,
        name: 'Deluxe Room',
        price: 1580,
        pax: 1
      },
      {
        isSuite: false,
        name: 'Deluxe Room',
        price: 1880,
        pax: 2
      }
    ]
  },
  {

    "name": "Mira Moon Hotel",
    "location": "Wanchai",
    "address": "388 Jaffe Road, Causeway Bay, Hong Kong",
    "reservationSite": "https://www.miramoonhotel.co\nEl",
    "email": "enquiry@miramoonhotel.com",
    "phone": "2643 8888",
    "col8": "2315 5280",
    "col9": 1,
    "col10": "HKD6,500nett\nwith daily meal for one person\nHKD7,000nett\nwith daily meal for two persons",
    "col11": 89,
    "col12": "Rooms Type 1 - New Moon Room\nHKD1,130nett with daily 3 meals for one person\nHKD1,630nett with daily 3 meals for two persons\nRooms Type 2 - Half Moon Room\nHKD1,430nett with daily 3 meals for one person\nHKD1,930nett with daily 3 meals for two persons\nRooms Type 3 -Full Moon Room\nHKD1,530nett with daily 3 meals for one person\nHKD2,030nett with daily 3 meals for two persons",
    "col13": "YES",
    "col14": "NO",
    "col15": "We welcome guests between 16 and 17 years old to stay in the\nhotel alone for isolation, but a legal guardian/parent must\naccompany the guest to check in and check out at the hotel, fill\nout a health declaration form and provide an emergency contact\nnumber.\nIf the guest is 15 years old or younger, the guest must be\naccompanied by a legal guardian/parent, and follow the same\nisolation rules during the stay to reduce the risk of community\ntransmission.",
    rooms: [
      {
        isSuite: true,
        price: 6500,
        pax: 1,
        info: 'With daily meal for one person'

      },
      {
        isSuite: true,
        price: 7000,
        pax: 2,
        info: 'With daily meal for two persons'

      },
      {
        name: 'Rooms Type 1 - New Moon Room',
        isSuite: false,
        price: 1130,
        pax: 1,
        info: 'With daily 3 meals for one persons'
      },
      {
        name: 'Rooms Type 1 - New Moon Room',
        isSuite: false,
        price: 1630,
        pax: 2,
        info: 'With daily 3 meals for two persons'
      },
      {
        name: 'Rooms Type 2 - Half Moon Room',
        isSuite: false,
        price: 1430,
        pax: 1,
        info: 'With daily 3 meals for one persons'
      },
      {
        name: 'Rooms Type 2 - Half Moon Room',
        isSuite: false,
        price: 1930,
        pax: 2,
        info: 'With daily 3 meals for two persons'
      },
      {
        name: 'Rooms Type 3 - Full Moon Room',
        isSuite: false,
        price: 1530,
        pax: 1,
        info: 'With daily 3 meals for one person'
      },
      {
        name: 'Rooms Type 3 - Full Moon Room',
        isSuite: false,
        price: 2030,
        pax: 2,
        info: 'With daily 3 meals for two persons'
      },
    ]
  },

  {

    "name": "Empire Hotel Causeway Bay",
    "location": "Wanchai",
    "address": "No. 8 Wing Hing Street, Hong Kong",
    "reservationSite": "http://www.empirehotel.com.hk",
    "email": "reservations-cwb@empirehotel-\nhongkong.com",
    "phone": "3692 2333",
    "col8": "3692 2300",
    "col9": 23,
    "col10": "Suite Room HK$1,250 (single)\nHK$1,450 (double)\nConnecting Room (2-room)\nHK$1,300 (1pax)\nHK$1,500 (2 pax)\nHK$1,700 (3 pax)\nHK$1,900 (4 pax)\nInclude 3 meals per staying guest(s)",
    "col11": 147,
    "col12": "Economy Room\nHK$600 (single) HK$800 (double)\nStandard Room\nHK$700 (single) HK$900 (double)\nDeluxe Room\nHK$1,050 (single) HK$1,250 (double)\nInclude 3 meals per staying guest(s)",
    "col13": "Y, Accept outside\ndelivery items, will\nbe delivered to\nroom 3 times a day:\n10:00 - 12:00\n14:00 - 16:00\n19:00 - 21:00",
    "col14": "Y",
    "col15": "(a) Must stay with an adult\n(b) Must stay with an adult\n(c) Guest needs to present a consent letter signed by a parent/\nlegal guardian to confirm such arrangement upon check-in",
    rooms: [
      {
        name: 'Suite Room',
        isSuite: true,
        price: 1250,
        pax: 1
      },
      {
        name: 'Suite Room',
        isSuite: true,
        price: 1450,
        pax: 2
      },
      {
        name: 'Connecting Room (2-room)',
        isSuite: true,
        price: 1300,
        pax: 1
      },
      {
        name: 'Connecting Room (2-room)',
        isSuite: true,
        price: 1500,
        pax: 2
      },
      {
        name: 'Connecting Room (2-room)',
        isSuite: true,
        price: 1700,
        pax: 3
      },
      {
        name: 'Connecting Room (2-room)',
        isSuite: true,
        price: 1900,
        pax: 4
      },
      {
        isSuite: false,
        name: 'Economy Room',
        price: 600,
        pax: 1
      },
      {
        isSuite: false,
        name: 'Economy Room',
        price: 800,
        pax: 2
      },
      {
        isSuite: false,
        name: 'Standard Room',
        price: 700,
        pax: 1
      },
      {
        isSuite: false,
        name: 'Standard Room',
        price: 900,
        pax: 2
      },
      {
        isSuite: false,
        name: 'Deluxe Room',
        price: 1050,
        pax: 1
      },
      {
        isSuite: false,
        name: 'Deluxe Room',
        price: 1250,
        pax: 2
      }
    ]
  },
  {

    "name": "Empire Prestige Causeway Bay",
    "location": "Wanchai",
    "address": "No. 8A Wing Hing Street, Hong Kong",
    "reservationSite": "http://www.empirehotel.com.hk",
    "email": "reservations-cwb@empirehotel-\nhongkong.com",
    "phone": "3692 2333",
    "col8": "3692 2300",
    "col9": 2,
    "col10": "Suite Room\nHK$1,250 (single)\nHK$1,450 (double)\nInclude 3 meals per staying guest(s)",
    "col11": 58,
    "col12": "Standard Rooms\nHK$700 (single)\nInclude 3 meals per staying guest(s)\nHK$900 (double)",
    "col13": "Y, Accept outside\ndelivery items, will\nbe delivered to\nroom 3 times a day:\n10:00 - 12:00\n14:00 - 16:00\n19:00 - 21:00",
    "col14": "Y",
    "col15": "(a) Must stay with an adult\n(b) Must stay with an adult\n(c) Guest needs to present a consent letter signed by a parent/\nlegal guardian to confirm such arrangement upon check-in",
    rooms: [
      {
        isSuite: true,
        name: 'Suite Room',
        price: 1250,
        pax: 1,
        info: 'Include 3 meals per staying guest(s)'
      },
      {
        isSuite: true,
        name: 'Suite Room',
        price: 1450,
        pax: 2,
        info: 'Include 3 meals per staying guest(s)'
      },
      {
        isSuite: false,
        name: 'Standar Rooms',
        price: 700,
        pax: 1,
        info: 'Include 3 meals per staying guest(s)'
      },
      {
        isSuite: false,
        name: 'Standar Rooms',
        price: 900,
        pax: 2,
        info: 'Include 3 meals per staying guest(s)'
      }
    ]
  },
  {

    "name": "Pentahotel Hong Kong, Kowloon",
    "location": "Wong Tai Sin",
    "address": "19 Luk Hop Street, San Po Kong, Kowloon, Hong Kong",
    "reservationSite": "www.pentahotelhongkongkowl\noon.com",
    "email": "reservations.kowloon@pentahotelsa\nsia.com",
    "phone": "3112 8222",
    "col8": "3112 8233",
    "col9": 5,
    "col10": "HK$1,400 (Single)/\nHK$1,800 (Twin)\ninclude three meals -\n\"Eat Well\" Menu",
    "col11": 395,
    "col12": "Penta Standard Room\nHK$520 (Single)/\nHK$800 (Twin)\ninclude 3 meals - \"Balanced Eats\" Menu\nPenta Plus Room\nHK$820 (Single) /\nHK$1,220 (Twin)\ninclude 3 meals -\n\"Eat Well\" Menu",
    "col13": "Y",
    "col14": "Y",
    "col15": "(a) Has to be accompanied by an adult taking the same flight to\nHong Kong\n(b) Has to be accompanied by an adult taking the same flight to\nHong Kong\nc) Hotel will arrange accommdation for guests over the age of\n16\n#Each guestroom accommodate two person only",
    rooms: [
      {
        isSuite: true,
        name: 'single',
        price: 1400,
        pax: 1,
        info: 'Include three meals - Eat well Menu'
      },
      {
        isSuite: true,
        name: 'Twin',
        price: 1800,
        pax: 2,
        info: 'Include three meals - Eat well Menu'
      },
      {
        isSuite: false,
        name: 'Penta Standard Room Single',
        price: 520,
        pax: 1,
        info: 'Include three meals - Balanced Eats Menu'
      },
      {
        isSuite: false,
        name: 'Penta Standard Room Twin',
        price: 800,
        pax: 2,
        info: 'Include three meals - Balanced Eats Menu'
      },
      {
        isSuite: false,
        name: 'Penta Plus Room',
        price: 820,
        pax: 1,
        info: 'Include three meals - Eat Well Menu'
      },
      {
        isSuite: false,
        name: 'Penta Plus Room',
        price: 1220,
        pax: 2,
        info: 'Include three meals - Eat Well Menu'
      },


    ]
  },
  {

    "name": "Bridal Tea House Hotel Yau Ma Tei\nWing Sing Lane",
    "location": "Yau Tsim Mong",
    "address": "No. 5 Wing Sing Lane, Yau Ma Tei, Kowloon",
    "reservationSite": "https://bthhotel.com",
    "email": "info@bthhotel.com",
    "phone": 37287000,
    "col8": 27810367,
    "col9": "",
    "col10": "",
    "col11": 59,
    "col12": "HK$450",
    "col13": "Y",
    "col14": "N",
    "col15": "Hotel does not accept children under 18 years old",
    rooms: [
      {
        isSuite: false,
        price: 450,
        pax: 1,
        info: 'Check with hotel regarding more than 1 guest'
      }
    ]
  },
  {
    "name": "Dorsett Mongkok Hong Kong",
    "location": "Yau Tsim Mong",
    "address": "88 Tai Kok Tsui Road, Kowloon, Hong Kong",
    "reservationSite": "https://www.mongkok.dorsetth\notels.com/",
    "email": "reservation.mongkok@dorsetthotels\n.com",
    "phone": "852 3987 2388",
    "col8": "852 3987 2394",
    "col9": "6.",
    "col10": "Suite Premier\nHK$2,600 nett (Single)\nHK$2,900 nett (Double)\nInclude three meals - Standard Menu",
    "col11": 279,
    "col12": "Room Standard\n$550 nett (Single)\n$850 nett (Double)\nInclude three meals – Basic Menu\nRoom Comfort\n$770 nett (Single)\n$1,070 nett (Double)\nInclude three meals Standard Menu\nRoom Superior\n$1,000 nett (Single)\n$1,300 nett (Double)\nInclude three meals Standard Menu\nFamily Quad Room (for 4 persons stay)\n$2,400 nett (4 persons)\nInclude three meals Standard Menu",
    "col13": "Y",
    "col14": "Yes, selected room\ntypes",
    "col15": "(a) Age 11 years old : The parent / legal guardian is required to\nsign a Declaration Form.\nBelow 11 years old : Must Stay with an adult\n(b) Between 12 and 15 years old : The parent/ legal guardian is\nrequired to sign a Declaration Form\n(c) Between 16 and 17 years old : The parent / legal guardian is\nrequired to sign a Delclaration Form",
    rooms: [
      {
        isSuite: true,
        name: 'Suite Premier',
        pax: 1,
        price: 2600,
        info: 'Three meals - standard menu'
      },
      {
        isSuite: true,
        name: 'Suite Premier',
        pax: 2,
        price: 2900,
        info: 'Three meals - standard menu'
      },
      {
        isSuite: false,
        name: 'Room Standard',
        pax: 1,
        price: 550,
        info: 'Three meals - basic menu'
      },
      {
        isSuite: false,
        name: 'Room Standard',
        pax: 2,
        price: 850,
        info: 'Three meals - basic menu'
      },
      {
        isSuite: false,
        name: 'Room Comfort',
        pax: 1,
        price: 770,
        info: 'Three meals - basic menu'
      },
      {
        isSuite: false,
        name: 'Room Comfort',
        pax: 2,
        price: 1070,
        info: 'Three meals - basic menu'
      },
      {
        isSuite: false,
        name: 'Room Superior',
        pax: 1,
        price: 1000,
        info: 'Three meals - basic menu'
      },
      {
        isSuite: false,
        name: 'Room Superior',
        pax: 2,
        price: 1300,
        info: 'Three meals - basic menu'
      },
      {
        isSuite: false,
        name: 'Family Quad Room',
        pax: 4,
        price: 2400,
        info: 'Three meals - basic menu'
      }
    ]
  },
  {

    "name": "Ramada Hong Kong Grand",
    "location": "Yau Tsim Mong",
    "address": "23 Austin Avenue, Tsim Sha Tsui, Kowloon, Hong Kon",
    "reservationSite": "www.ramadahongkonggrand.co",
    "email": "ISvn@ramadahkg.com",
    "phone": 31226222,
    "col8": 27309328,
    "col9": "",
    "col10": "",
    "col11": 396,
    "col12": "HK$480 for Single Room / HK$580 for Double Room",
    "col13": "Y",
    "col14": "Y",
    "col15": "Our hotel welcomes the quarantine guests under the age of 18 to\nstay and we will provide special care for the guests. In addition,\nthe contact phone number for the guest's guardian will be\nrequired.",
    rooms: [
      {
        isSuite: false,
        name: 'Single Room',
        price: 480,
        pax: 1
      },
      {
        isSuite: false,
        name: 'Double Room',
        price: 580,
        pax: 2
      }
    ]
  },

  {
    "name": "Sheraton Hong Kong Hotel and Towers",
    "location": "Yau Tsim Mong",
    "address": "20 Nathan Road, Tsim Sha Tsui",
    "reservationSite": "sheratonhongkonghotel.com",
    "email": "RES.HongKong@sheraton.com",
    "phone": "852-2732-6771",
    "col8": "852-2368-1999",
    "col9": 68,
    "col10": "HK$3,190 (1 guest)\nHK$3,740 (2 guests)",
    "col11": 392,
    "col12": "Harbour View Room\n$1,980 (Single)\n$2,530 (Double)\nDeluxe Room\n$1,180 (Single)\n$1,730 (Double)",
    "col13": "Y",
    "col14": "Y",
    "col15": "(a) Must stay with an adult\n(b) Must stay with an adult\n(c) Must stay with an adult",
    rooms: [
      {
        isSuite: true,
        pax: 1,
        price: 3190
      },
      {
        isSuite: true,
        pax: 2,
        price: 3740
      },
      {
        name: 'Harbou View Room',
        isSuite: false,
        pax: 1,
        price: 1980
      },
      {
        name: 'Harbou View Room',
        isSuite: false,
        pax: 2,
        price: 2530
      },
      {
        name: 'Deluxe Room',
        isSuite: false,
        pax: 1,
        price: 1180
      },
      {
        name: 'Deluxe Room',
        isSuite: false,
        pax: 1,
        price: 1730
      }
    ]
  },
  {
    "name": "Silka Seaview Hotel Hong Kong",
    "location": "Yau Tsim Mong",
    "address": "268 Shanghai Street, Yau Ma Tei,\nKowloon, Hong Kong",
    "reservationSite": "www.silkahotels.com/seaview",
    "email": "info.seaview@ silkahotels.com",
    "phone": "2782 0882",
    "col8": "2781 8800",
    "col9": "",
    "col10": "",
    "col11": 268,
    "col12": "Туре 1\nHK$498 Net\n(one pax)\nHK$650 Net\n(two pax)",
    "col13": "Y",
    "col14": "Y",
    "col15": "(a) Must stay with an adult\n(b) A parent/legal guardian should physically show up to\ncomplete the registration and check-out with the child. The\nparent/legal guardian is required to sign a Declaration Form\n(c) The parent/legal guardian is required to sign a declaration\nform to hotel before check-in",
    rooms: [
      {
        isSuite: false,
        name: 'Type 1',
        pax: 1,
        price: 498
      },
      {
        isSuite: false,
        name: 'Type 1',
        price: 650,
        pax: 2
      }
    ]
  }
]